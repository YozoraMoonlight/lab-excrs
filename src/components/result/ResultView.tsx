import React, { useMemo } from 'react';
import { Answers, CategoryDef, Exercise } from '../../types/exercise';
import { buildJavaProgram } from '../../utils/javaProgram';
import { BackButton } from '../BackButton';
import { CodePanel } from './CodePanel';

interface ResultViewProps {
  exercise: Exercise;
  category: CategoryDef;
  answers: Answers;
  onEdit: () => void;
}

export function ResultView({ exercise, category, answers, onEdit }: ResultViewProps) {
  const code = useMemo(() => buildJavaProgram(exercise), [exercise]);

  return (
    <div>
      <BackButton label="Edit answers" onClick={onEdit} />
      <h1 className="mt-4 font-display text-2xl leading-tight text-ink">{category.name}</h1>

      <ol className="mt-5 divide-y-2 divide-dashed divide-line overflow-hidden rounded-2xl border-2 border-ink bg-surface shadow-manga">
        {exercise.questions.map((q) =>
        <li key={q.fieldId} className="flex gap-3 px-4 py-3">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-ink bg-accent-soft text-xs font-extrabold text-ink">
              {q.number}
            </span>
            <div className="min-w-0">
              <p className="text-sm text-muted">{q.prompt}</p>
              <p className="mt-0.5 break-words text-base font-bold text-ink">{answers[q.fieldId]}</p>
            </div>
          </li>
        )}
      </ol>

      <div className="mt-8">
        <CodePanel code={code} fileName={`${exercise.className}.java`} />
      </div>
    </div>);

}