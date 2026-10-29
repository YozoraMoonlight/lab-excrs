import { ExerciseQuestion } from '../types/exercise';

const INT_PATTERN = /^[-+]?\d+$/;
const DOUBLE_PATTERN = /^[-+]?(\d+\.?\d*|\.\d+)$/;
const JAVA_INT_MAX = 2147483647;
const MAX_LINE_LENGTH = 80;

/** Returns an error message, or null when the answer is valid for its Scanner method. */
export function validateAnswer(question: ExerciseQuestion, raw: string): string | null {
  const value = raw.trim();
  if (!value) return 'This answer is required.';

  switch (question.method) {
    case 'next':
      if (/\s/.test(value)) return 'Use one word only. next() stops reading at the first space.';
      return null;
    case 'nextLine':
      if (value.length > MAX_LINE_LENGTH) return `Keep this under ${MAX_LINE_LENGTH} characters.`;
      return null;
    case 'nextInt':{
        if (!INT_PATTERN.test(value)) return 'Enter a whole number with no decimals.';
        const n = parseInt(value, 10);
        if (Math.abs(n) > JAVA_INT_MAX) return 'That number is too large for an int.';
        return checkRange(question, n);
      }
    case 'nextDouble':{
        if (!DOUBLE_PATTERN.test(value)) return 'Enter a number, e.g. 12.5 (use a period for decimals).';
        return checkRange(question, Number(value));
      }
    default:
      return null;
  }
}

/** The value as Java would print it in the result section. */
export function formatOutputValue(question: ExerciseQuestion, raw: string): string {
  const value = raw.trim();
  if (question.method === 'nextInt') return String(parseInt(value, 10));
  if (question.method === 'nextDouble') return Number(value).toFixed(2);
  if (question.method === 'next') return value.split(/\s+/)[0];
  return value;
}

function checkRange(question: ExerciseQuestion, n: number): string | null {
  if (question.min !== undefined && n < question.min) return `Enter a value of at least ${question.min}.`;
  if (question.max !== undefined && n > question.max) return `Enter a value no greater than ${question.max}.`;
  return null;
}