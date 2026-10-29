import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { CategoryDef } from '../../types/exercise';
import { CategoryIcon } from '../CategoryIcon';

interface CategoryCardProps {
  category: CategoryDef;
  size: 'wide' | 'small' | 'tall';
  className?: string;
  onSelect: () => void;
}

export function CategoryCard({ category, size, className = '', onSelect }: CategoryCardProps) {
  const big = size === 'tall';

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex flex-col overflow-hidden rounded-2xl border-2 border-ink p-4 text-left shadow-manga hover:brightness-[0.97] active:translate-x-[3px] active:translate-y-[3px] active:shadow-manga-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${className}`}>
      
      <CategoryIcon
        id={category.id}
        className={`pointer-events-none absolute text-ink/10 ${big ? '-bottom-4 -right-4 h-32 w-32' : '-bottom-3 -right-3 h-20 w-20'}`} />
      
      <div className="relative flex items-start justify-between gap-2">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-ink bg-surface text-accent">
          <CategoryIcon id={category.id} />
        </span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-sun text-ink">
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <span
        className={`relative mt-auto pt-3 font-display leading-snug text-ink ${
        big ? 'text-lg sm:text-xl' : 'text-[15px] sm:text-lg'}`
        }>
        
        {category.name}
      </span>
    </button>);

}