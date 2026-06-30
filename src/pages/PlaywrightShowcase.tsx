import React from 'react';
import HazardBar from '../components/HazardBar';
import PageHeader from '../components/PageHeader';
import CodePanel from '../components/CodePanel';
import HighlightsGrid from '../components/HighlightsGrid';
import PageFooter from '../components/PageFooter';
import styles from './PlaywrightShowcase.module.css';

const PlaywrightShowcase: React.FC = () => (
  <>
    <HazardBar />
    <div className={styles.wrap}>
      <PageHeader />

      <section>
        <div className={styles.sectionLabel}>
          <span className={styles.num}>01</span> Sample Test Code
        </div>
        <CodePanel />
      </section>

      <section>
        <div className={styles.sectionLabel}>
          <span className={styles.num}>02</span> Key Highlights
        </div>
        <HighlightsGrid />
      </section>

      <div className={styles.plate}>
        <h2>Purpose</h2>
        <p>
          This page serves as a showcase of automated QA practices integrated into the
          Mechanical Repair App. Visitors can see real test code alongside the deployed
          app, reinforcing professional discipline in software testing and CI/CD pipelines.
        </p>
      </div>

      <PageFooter />
    </div>
  </>
);

export default PlaywrightShowcase;
