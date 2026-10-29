import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';

interface BackButtonProps {
  label: string;
  onClick: () => void;
}

export function BackButton({ label, onClick }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-10 items-center gap-1.5 rounded-full border-2 border-ink bg-surface px-4 text-sm font-bold text-ink shadow-manga-sm hover:bg-accent-soft active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
      
      <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>);

}