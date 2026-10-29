import React from 'react';
import { categories } from '../../data/categories';
import { CategoryId } from '../../types/exercise';
import { CategoryCard } from './CategoryCard';

interface CategoryPickerProps {
  onSelect: (id: CategoryId) => void;
}

const LAPTOP_URL = `${import.meta.env.BASE_URL}8e7589c6-8077-441b-8cb6-d67f1cf18506.jpg`;

/**
 * Interlocking bento, in category order.
 * Phone (2 cols):  [hero hero] [0 0] [1 2] [3 2]
 * Desktop (4 cols): [hero hero 0 0] [hero hero 1 2] [3 3 3 2]
 */
const TILES = [
{ place: 'col-span-2', tone: 'bg-sky-soft', size: 'wide' as const },
{ place: 'col-span-1', tone: 'bg-sun-soft', size: 'small' as const },
{ place: 'col-span-1 row-span-2', tone: 'bg-mint-soft', size: 'tall' as const },
{ place: 'col-span-1 sm:col-span-3', tone: 'bg-peach-soft', size: 'wide' as const }];


export function CategoryPicker({ onSelect }: CategoryPickerProps) {
  return (
    <section
      aria-labelledby="choose-heading"
      className="grid auto-rows-[136px] grid-cols-2 gap-3 sm:auto-rows-[156px] sm:grid-cols-4 sm:gap-4">
      
      <div className="col-span-2 flex items-center gap-2 overflow-hidden rounded-2xl border-2 border-ink bg-surface px-3 shadow-manga sm:row-span-2 sm:flex-col sm:justify-center sm:gap-1 sm:px-6">
        <img src={LAPTOP_URL} alt="" className="h-32 w-32 shrink-0 object-contain mix-blend-multiply sm:h-52 sm:w-52" />
        <h1 id="choose-heading" className="font-display text-2xl leading-tight text-ink sm:text-center sm:text-3xl">
          Choose a program!
        </h1>
      </div>
      {categories.map((category, index) => {
        const tile = TILES[index % TILES.length];
        return (
          <CategoryCard
            key={category.id}
            category={category}
            size={tile.size}
            className={`${tile.place} ${tile.tone}`}
            onSelect={() => onSelect(category.id)} />);


      })}
    </section>);

}