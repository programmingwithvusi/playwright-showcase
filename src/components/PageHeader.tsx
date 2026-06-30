import React from 'react';
import { STATUS_CHIPS } from '../data/showcaseData';
import styles from './PageHeader.module.css';

const PageHeader: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.eyebrow}>QA / Automated Test Record</div>
    <h1 className={styles.title}>
      Playwright Test<br />
      <span>Showcase</span>
    </h1>
    <p className={styles.subhead}>
      A sample end-to-end test validating the Mechanical Repair App — demonstrating how
      automated testing keeps the build reliable, repeatable, and shippable.
    </p>
    <div className={styles.statusStrip}>
      {STATUS_CHIPS.map(({ label, showDot }) => (
        <div key={label} className={styles.statusChip}>
          {showDot && <span className={styles.dot} />}
          {label}
        </div>
      ))}
    </div>
  </header>
);

export default PageHeader;
