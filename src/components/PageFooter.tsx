import React from 'react';
import styles from './PageFooter.module.css';

const PageFooter: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.tag}>
      MECHANICAL REPAIR APP <b>//</b> QA SHOWCASE
    </div>
    <div className={styles.tag}>
      RUNNER: <b>Playwright</b> · BROWSERS: <b>Chromium / Firefox / WebKit</b>
    </div>
  </footer>
);

export default PageFooter;
