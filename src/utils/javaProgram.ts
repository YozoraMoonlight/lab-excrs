import { Exercise, ExerciseQuestion } from '../types/exercise';

const I1 = '    ';
const I2 = '        ';

/** True when a leftover newline must be consumed before the next nextLine() read. */
export function needsBufferClear(exercise: Exercise, index: number): boolean {
  const current = exercise.questions[index];
  const next = exercise.questions[index + 1];
  return !!next && current.method !== 'nextLine' && next.method === 'nextLine';
}

/**
 * Builds the program in the exact style of IT2402 05 Handout 1:
 * import java.util.*; → declare variables → Scanner scanner; scanner = new Scanner(System.in);
 * → System.out.print prompt + scanner.nextX() → System.out.println("The ... is " + variable);
 */
export function buildJavaProgram(exercise: Exercise): string {
  const { questions } = exercise;
  const lines: string[] = ['import java.util.*;', `class ${exercise.className} {`, `${I1}public static void main(String[] args) {`];

  questions.forEach((q) => lines.push(`${I2}${q.type} ${q.variable};`));

  lines.push('');
  lines.push(`${I2}Scanner scanner;`);
  lines.push(`${I2}scanner = new Scanner(System.in);`);
  lines.push('');
  lines.push(`${I2}System.out.println("${escapeJava(exercise.programTitle)}");`);
  lines.push('');

  questions.forEach((q, index) => {
    lines.push(`${I2}System.out.print("${escapeJava(promptText(q))}");`);
    lines.push(`${I2}${q.variable} = scanner.${q.method}();`);
    if (needsBufferClear(exercise, index)) lines.push(`${I2}scanner.nextLine();`);
    lines.push('');
  });

  lines.push(`${I2}System.out.println();`);
  questions.forEach((q) => {
    lines.push(`${I2}System.out.println("${escapeJava(resultText(q))}" + ${q.variable});`);
  });

  lines.push(`${I1}}`);
  lines.push('}');
  return lines.join('\n');
}

/** Prompts end with ": " like the handout's "Enter an integer: ". */
function promptText(q: ExerciseQuestion): string {
  const base = q.prompt.trim().replace(/[:?.]\s*$/, '');
  return q.prompt.trim().endsWith('?') ? `${base}? ` : `${base}: `;
}

/** Results read like the handout's "The integer is " + num. */
function resultText(q: ExerciseQuestion): string {
  const words = q.label.split(' ').map((w) => /^[A-Z][a-z]+$/.test(w) ? w.toLowerCase() : w);
  return `The ${words.join(' ')} is `;
}

function escapeJava(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}