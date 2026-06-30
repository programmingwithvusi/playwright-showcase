//import React from 'react';
import type { HighlightCell, StatusChip } from '../types/showcase';

export const STATUS_CHIPS: StatusChip[] = [
  { label: '1 / 1 passed', showDot: true },
  { label: 'Suite: mechanical-repair-app' },
  { label: 'Runner: Playwright' },
];

export const HIGHLIGHT_CELLS: HighlightCell[] = [
  {
    index: 'A — NAV',
    title: 'Navigation',
    description: (
      <>
        Uses{' '}
        <code style={{ color: 'var(--text-primary)' }}>page.goto('/')</code> to
        load the homepage before any assertions run.
      </>
    ),
  },
  {
    index: 'B — ASSERT',
    title: 'Assertions',
    description:
      'Confirms the app title renders and that the newly created job appears after saving.',
  },
  {
    index: 'C — INPUT',
    title: 'Form Interaction',
    description:
      'Fills out the job description and cost fields exactly as a technician would on the shop floor.',
  },
  {
    index: 'D — VERIFY',
    title: 'Verification',
    description:
      'Ensures the job is rendered in the list immediately after the save action completes.',
  },
];
