import type { ReactNode } from 'react';

export interface HighlightCell {
  index: string;
  title: string;
  description: ReactNode;
}

export interface StatusChip {
  label: string;
  showDot?: boolean;
}
