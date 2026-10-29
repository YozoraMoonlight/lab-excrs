import { useCallback, useEffect, useState } from 'react';
import { Answers, CategoryId, Exercise, LabStep } from '../types/exercise';
import { findCategory } from '../utils/categories';
import { generateExercise } from '../utils/exerciseGenerator';

interface SessionState {
  step: LabStep;
  exercise: Exercise | null;
  answers: Answers;
  history: string[];
}

const STORAGE_KEY = 'it2402-lab-generator:v1';
const HISTORY_LIMIT = 200;
const INITIAL_STATE: SessionState = { step: 'home', exercise: null, answers: {}, history: [] };

export function useLabSession() {
  const [state, setState] = useState<SessionState>(loadState);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {

      // Storage is optional; the generator works without it.
    }}, [state]);

  const selectCategory = useCallback(
    (categoryId: CategoryId) => {
      const exercise = generateExercise(findCategory(categoryId), {
        avoid: state.history,
        previous: null,
        version: nextVersion(state.history, categoryId)
      });
      setState((prev) => ({
        step: 'answer',
        exercise,
        answers: {},
        history: [...prev.history, exercise.signature].slice(-HISTORY_LIMIT)
      }));
    },
    [state.history]
  );

  const regenerate = useCallback(() => {
    if (!state.exercise) return;
    const current = state.exercise;
    const exercise = generateExercise(findCategory(current.categoryId), {
      avoid: state.history,
      previous: current,
      version: nextVersion(state.history, current.categoryId)
    });
    setState((prev) => ({
      step: 'answer',
      exercise,
      answers: {},
      history: [...prev.history, exercise.signature].slice(-HISTORY_LIMIT)
    }));
  }, [state.exercise, state.history]);

  const setAnswer = useCallback((fieldId: string, value: string) => {
    setState((prev) => ({ ...prev, answers: { ...prev.answers, [fieldId]: value } }));
  }, []);

  const submit = useCallback(() => {
    setState((prev) => prev.exercise ? { ...prev, step: 'result' } : prev);
  }, []);

  const editAnswers = useCallback(() => {
    setState((prev) => prev.exercise ? { ...prev, step: 'answer' } : prev);
  }, []);

  const startNew = useCallback(() => {
    setState((prev) => ({ ...prev, step: 'home', exercise: null, answers: {} }));
  }, []);

  return { ...state, selectCategory, regenerate, setAnswer, submit, editAnswers, startNew };
}

function nextVersion(history: string[], categoryId: CategoryId): number {
  return history.filter((sig) => sig.startsWith(`${categoryId}:`)).length + 1;
}

function loadState(): SessionState {
  if (typeof window === 'undefined') return INITIAL_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_STATE;
    const parsed = JSON.parse(raw) as Partial<SessionState>;
    const exercise =
    parsed.exercise && Array.isArray(parsed.exercise.questions) && parsed.exercise.questions.length === 10 ? parsed.exercise : null;
    const step: LabStep = exercise && (parsed.step === 'answer' || parsed.step === 'result') ? parsed.step : 'home';
    return {
      step,
      exercise: step === 'home' ? null : exercise,
      answers: step === 'home' ? {} : parsed.answers ?? {},
      history: Array.isArray(parsed.history) ? parsed.history.slice(-HISTORY_LIMIT) : []
    };
  } catch {
    return INITIAL_STATE;
  }
}