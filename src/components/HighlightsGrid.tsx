import React from 'react';
import { HIGHLIGHT_CELLS } from '../data/showcaseData';
import styles from './HighlightsGrid.module.css';

const HighlightsGrid: React.FC = () => (
  <div className={styles.grid}>
    {HIGHLIGHT_CELLS.map(({ index, title, description }) => (
      <div key={index} className={styles.cell}>
        <div className={styles.index}>{index}</div>
        <h3 className={styles.cellTitle}>{title}</h3>
        <p className={styles.cellDesc}>{description}</p>
      </div>
    ))}
  </div>
);

export default HighlightsGrid;
