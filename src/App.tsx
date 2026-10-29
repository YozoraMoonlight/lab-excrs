import React, { useEffect } from 'react';
import { CategoryPicker } from './components/home/CategoryPicker';
import { AnswerView } from './components/exercise/AnswerView';
import { ResultView } from './components/result/ResultView';
import { useLabSession } from './hooks/useLabSession';
import { findCategory } from './utils/categories';

export function App() {
  const session = useLabSession();
  const { step, exercise } = session;
  const category = exercise ? findCategory(exercise.categoryId) : null;
  const viewKey = step === 'home' || !exercise ? 'home' : `${step}-${exercise.id}`;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [viewKey]);

  return (
    <div className="screentone min-h-screen w-full font-sans text-ink antialiased">
      <main className="mx-auto w-full max-w-2xl px-4 py-6 sm:px-6 sm:py-10">
        {step === 'home' || !exercise || !category ?
        <CategoryPicker onSelect={session.selectCategory} /> :
        step === 'answer' ?
        <AnswerView
          exercise={exercise}
          category={category}
          answers={session.answers}
          onAnswer={session.setAnswer}
          onSubmit={session.submit}
          onBack={session.startNew} /> :


        <ResultView exercise={exercise} category={category} answers={session.answers} onEdit={session.editAnswers} />
        }
      </main>
    </div>);

}