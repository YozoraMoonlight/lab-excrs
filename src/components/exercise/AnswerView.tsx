import React from 'react';
import { Answers, CategoryDef, Exercise } from '../../types/exercise';
import { validateAnswer } from '../../utils/answers';
import { BackButton } from '../BackButton';
import { QuestionList } from './QuestionList';

interface AnswerViewProps {
  exercise: Exercise;
  category: CategoryDef;
  answers: Answers;
  onAnswer: (fieldId: string, value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export function AnswerView({ exercise, category, answers, onAnswer, onSubmit, onBack }: AnswerViewProps) {
  const remaining = exercise.questions.filter((q) => validateAnswer(q, answers[q.fieldId] ?? '') !== null).length;
  const done = remaining === 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (done) onSubmit();
      }}>
      
      <BackButton label="Back" onClick={onBack} />
      <h1 className="mt-4 font-display text-2xl leading-tight text-ink">{category.name}</h1>

      <div className="mt-5 rounded-2xl border-2 border-ink bg-surface p-4 shadow-manga sm:p-6">
        <QuestionList questions={exercise.questions} answers={answers} onAnswer={onAnswer} />
      </div>

      <button
        type="submit"
        disabled={!done}
        className="mt-6 h-14 w-full rounded-2xl border-2 border-ink bg-accent font-display text-lg text-white shadow-manga hover:bg-accent-hover active:translate-x-[3px] active:translate-y-[3px] active:shadow-manga-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-dashed disabled:bg-surface disabled:font-sans disabled:text-base disabled:font-bold disabled:text-muted disabled:shadow-none disabled:active:translate-x-0 disabled:active:translate-y-0">
        
        {done ? 'Get code!' : `Answer all questions (${remaining} left)`}
      </button>
    </form>);

}