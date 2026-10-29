import { FieldDef } from '../types/exercise';

interface FieldOptions {
  group?: string;
  min?: number;
  max?: number;
}

/** String that may contain spaces — read with nextLine(). */
export function lineField(id: string, variable: string, label: string, prompts: string[], hint: string, options: FieldOptions = {}): FieldDef {
  return { id, variable, label, prompts, hint, type: 'String', method: 'nextLine', ...options };
}

/** Single-word String — read with next(). */
export function wordField(id: string, variable: string, label: string, prompts: string[], hint: string, options: FieldOptions = {}): FieldDef {
  return { id, variable, label, prompts, hint, type: 'String', method: 'next', ...options };
}

/** Whole number — read with nextInt(). */
export function intField(id: string, variable: string, label: string, prompts: string[], hint: string, options: FieldOptions = {}): FieldDef {
  return { id, variable, label, prompts, hint, type: 'int', method: 'nextInt', ...options };
}

/** Decimal number — read with nextDouble(). */
export function doubleField(id: string, variable: string, label: string, prompts: string[], hint: string, options: FieldOptions = {}): FieldDef {
  return { id, variable, label, prompts, hint, type: 'double', method: 'nextDouble', ...options };
}