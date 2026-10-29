import { CategoryDef, Exercise, FieldDef, JavaType, PatternDef, ScannerMethod } from '../types/exercise';

interface Selection {
  pattern: PatternDef;
  patternIndex: number;
  fields: FieldDef[];
  signature: string;
}

interface GenerateOptions {
  avoid: string[];
  previous: Exercise | null;
  version: number;
}

const REQUIRED_METHODS: ScannerMethod[] = ['next', 'nextLine', 'nextInt', 'nextDouble'];
const REQUIRED_TYPES: JavaType[] = ['String', 'int', 'double'];
const METHOD_TYPE: Record<ScannerMethod, JavaType> = { next: 'String', nextLine: 'String', nextInt: 'int', nextDouble: 'double' };
const MAX_ATTEMPTS = 400;

export function generateExercise(category: CategoryDef, options: GenerateOptions): Exercise {
  const avoid = new Set(options.avoid);
  const previous = options.previous;
  const otherPatterns = category.patterns.filter((p) => p.id !== previous?.patternId);
  let fallback: Selection | null = null;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    // When regenerating, prefer a different pattern first so the new version is clearly different.
    const pool = previous && attempt < MAX_ATTEMPTS / 2 && otherPatterns.length > 0 ? otherPatterns : category.patterns;
    const pattern = randomItem(pool);
    const selection = selectFields(category, pattern, category.patterns.indexOf(pattern));
    if (!selection || selection.signature === previous?.signature) continue;
    if (!fallback) fallback = selection;
    if (avoid.has(selection.signature)) continue;
    return buildExercise(category, selection, options.version);
  }

  if (fallback) return buildExercise(category, fallback, options.version);
  throw new Error(`Unable to generate a valid exercise for ${category.name}`);
}

/** Counts distinct valid field combinations a category can produce. */
export function countCombinations(category: CategoryDef): number {
  const lookup = fieldLookup(category);
  const signatures = new Set<string>();

  category.patterns.forEach((pattern) => {
    const walk = (slotIndex: number, chosen: FieldDef[], usedGroups: Set<string>) => {
      if (slotIndex === pattern.slots.length) {
        if (isBalanced(chosen)) signatures.add(makeSignature(category.id, pattern.id, chosen));
        return;
      }
      pattern.slots[slotIndex].forEach((id) => {
        const field = lookup.get(id);
        if (!field || usedGroups.has(groupOf(field))) return;
        const nextGroups = new Set(usedGroups);
        nextGroups.add(groupOf(field));
        walk(slotIndex + 1, [...chosen, field], nextGroups);
      });
    };
    walk(0, [], new Set());
  });

  return signatures.size;
}

export function isBalanced(fields: {type: JavaType;method: ScannerMethod;}[]): boolean {
  return (
    REQUIRED_METHODS.every((m) => fields.some((f) => f.method === m)) &&
    REQUIRED_TYPES.every((t) => fields.some((f) => f.type === t)));

}

function selectFields(category: CategoryDef, pattern: PatternDef, patternIndex: number): Selection | null {
  if (pattern.slots.length !== 10) return null;
  const lookup = fieldLookup(category);
  const usedGroups = new Set<string>();
  const fields: FieldDef[] = [];

  for (const slot of pattern.slots) {
    const options = slot.
    map((id) => lookup.get(id)).
    filter((f): f is FieldDef => !!f && !usedGroups.has(groupOf(f)) && METHOD_TYPE[f.method] === f.type);
    if (options.length === 0) return null;
    const chosen = randomItem(options);
    usedGroups.add(groupOf(chosen));
    fields.push(chosen);
  }

  const variables = new Set(fields.map((f) => f.variable));
  if (variables.size !== 10 || !isBalanced(fields)) return null;

  return { pattern, patternIndex, fields, signature: makeSignature(category.id, pattern.id, fields) };
}

function buildExercise(category: CategoryDef, selection: Selection, version: number): Exercise {
  const { pattern, patternIndex, fields, signature } = selection;
  return {
    id: makeExerciseId(category.prefix, patternIndex, signature),
    categoryId: category.id,
    patternId: pattern.id,
    patternName: pattern.name,
    patternSummary: pattern.summary,
    className: pattern.className,
    programTitle: category.programTitle,
    signature,
    version,
    questions: fields.map((field, index) => ({
      number: index + 1,
      fieldId: field.id,
      variable: field.variable,
      type: field.type,
      method: field.method,
      label: field.label,
      // Plain ASCII apostrophes keep the prompt readable in every NetBeans console encoding.
      prompt: simplestPrompt(field.prompts),
      hint: field.hint,
      min: field.min,
      max: field.max
    }))
  };
}

/** Prefers the short "Enter your/the ..." wording; falls back to the shortest prompt. */
function simplestPrompt(prompts: string[]): string {
  const sorted = [...prompts].sort((a, b) => a.length - b.length);
  const enter = sorted.find((p) => /^enter\b/i.test(p));
  // Plain ASCII apostrophes keep the prompt readable in every NetBeans console encoding.
  return (enter ?? sorted[0]).replace(/\u2019/g, "'");
}

function fieldLookup(category: CategoryDef): Map<string, FieldDef> {
  return new Map(category.fields.map((f) => [f.id, f]));
}

function groupOf(field: FieldDef): string {
  return field.group ?? field.id;
}

function makeSignature(categoryId: string, patternId: string, fields: FieldDef[]): string {
  return `${categoryId}:${patternId}:${fields.map((f) => f.id).sort().join(',')}`;
}

function makeExerciseId(prefix: string, patternIndex: number, signature: string): string {
  const combo = hashString(signature).toString(36).toUpperCase().padStart(4, '0').slice(-4);
  const salt = Math.floor(Math.random() * 36 * 36).toString(36).toUpperCase().padStart(2, '0');
  return `${prefix}-P${patternIndex + 1}-${combo}${salt}`;
}

function hashString(value: string): number {
  let hash = 5381;
  for (let i = 0; i < value.length; i++) hash = (hash << 5) + hash + value.charCodeAt(i) >>> 0;
  return hash;
}

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}