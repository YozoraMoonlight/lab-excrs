import { categories } from '../data/categories';
import { CategoryDef, CategoryId } from '../types/exercise';

export function findCategory(id: CategoryId): CategoryDef {
  const category = categories.find((c) => c.id === id);
  if (!category) throw new Error(`Unknown category: ${id}`);
  return category;
}