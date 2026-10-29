export type JavaType = 'String' | 'int' | 'double';
export type ScannerMethod = 'next' | 'nextLine' | 'nextInt' | 'nextDouble';
export type CategoryId = 'sari-sari' | 'registration' | 'scrapbook' | 'biography';
export type LabStep = 'home' | 'answer' | 'result';

export interface FieldDef {
  id: string;
  /** Fields sharing a group are semantic duplicates and never appear together. */
  group?: string;
  variable: string;
  type: JavaType;
  method: ScannerMethod;
  label: string;
  prompts: string[];
  hint: string;
  min?: number;
  max?: number;
}

export interface PatternDef {
  id: string;
  name: string;
  className: string;
  summary: string;
  /** Exactly 10 slots; each slot lists compatible alternative field ids. */
  slots: string[][];
}

export interface CategoryDef {
  id: CategoryId;
  name: string;
  prefix: string;
  tagline: string;
  description: string;
  programTitle: string;
  highlights: string[];
  answerNote?: string;
  fields: FieldDef[];
  patterns: PatternDef[];
}

export interface ExerciseQuestion {
  number: number;
  fieldId: string;
  variable: string;
  type: JavaType;
  method: ScannerMethod;
  label: string;
  prompt: string;
  hint: string;
  min?: number;
  max?: number;
}

export interface Exercise {
  id: string;
  categoryId: CategoryId;
  patternId: string;
  patternName: string;
  patternSummary: string;
  className: string;
  programTitle: string;
  questions: ExerciseQuestion[];
  signature: string;
  version: number;
}

export type Answers = Record<string, string>;