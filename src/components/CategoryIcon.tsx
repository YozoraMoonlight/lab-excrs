import React from 'react';
import { BookHeartIcon, ClipboardListIcon, ScrollTextIcon, StoreIcon } from 'lucide-react';
import { CategoryId } from '../types/exercise';

const ICONS: Record<CategoryId, typeof StoreIcon> = {
  'sari-sari': StoreIcon,
  registration: ClipboardListIcon,
  scrapbook: BookHeartIcon,
  biography: ScrollTextIcon
};

export function CategoryIcon({ id, className = 'h-5 w-5' }: {id: CategoryId;className?: string;}) {
  const Icon = ICONS[id];
  return <Icon className={className} aria-hidden="true" />;
}