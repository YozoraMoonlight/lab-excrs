import React from 'react';
import { Answers, ExerciseQuestion } from '../../types/exercise';
import { validateAnswer } from '../../utils/answers';

interface QuestionListProps {
  questions: ExerciseQuestion[];
  answers: Answers;
  onAnswer: (fieldId: string, value: string) => void;
}

export function QuestionList({ questions, answers, onAnswer }: QuestionListProps) {
  return (
    <ol className="space-y-5">
      {questions.map((q) => {
        const value = answers[q.fieldId] ?? '';
        const error = value.trim() ? validateAnswer(q, value) : null;
        const inputId = `q-${q.fieldId}`;
        return (
          <li key={q.fieldId}>
            <label htmlFor={inputId} className="flex items-start gap-2 text-[15px] font-bold text-ink">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-ink bg-accent text-xs font-extrabold text-white">
                {q.number}
              </span>
              <span className="pt-0.5">{q.prompt}</span>
            </label>
            <input
              id={inputId}
              type="text"
              value={value}
              onChange={(e) => onAnswer(q.fieldId, e.target.value)}
              inputMode={q.method === 'nextInt' ? 'numeric' : q.method === 'nextDouble' ? 'decimal' : 'text'}
              autoComplete="off"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${inputId}-error` : undefined}
              className={`mt-2 h-12 w-full rounded-xl border-2 bg-surface px-3 text-base text-ink focus:outline-none focus:ring-4 focus:ring-accent-soft ${
              error ? 'border-danger' : 'border-ink focus:border-accent'}`
              } />
            
            {error &&
            <p id={`${inputId}-error`} className="mt-1 text-sm font-medium text-danger">
                {error}
              </p>
            }
          </li>);

      })}
    </ol>);

}