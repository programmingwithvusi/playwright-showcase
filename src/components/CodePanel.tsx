import React from 'react';
import styles from './CodePanel.module.css';

// Arrow characters that are safe inside dangerouslySetInnerHTML HTML strings
// must use the HTML entity => becomes =&gt; to avoid JSX parser treating > as a tag.
const HIGHLIGHTED_CODE = `<span class="tok-kw">import</span> <span class="tok-punc">{</span> test<span class="tok-punc">,</span> expect <span class="tok-punc">}</span> <span class="tok-kw">from</span> <span class="tok-str">'@playwright/test'</span><span class="tok-punc">;</span>

test<span class="tok-punc">.</span><span class="tok-fn">describe</span><span class="tok-punc">(</span><span class="tok-str">'Mechanical Repair App'</span><span class="tok-punc">,</span> <span class="tok-punc">()</span> <span class="tok-kw">=&gt;</span> <span class="tok-punc">{</span>
  test<span class="tok-punc">(</span><span class="tok-str">'should add a new repair job and display it in the list'</span><span class="tok-punc">,</span> <span class="tok-kw">async</span> <span class="tok-punc">(</span><span class="tok-punc">{</span> page <span class="tok-punc">}</span><span class="tok-punc">)</span> <span class="tok-kw">=&gt;</span> <span class="tok-punc">{</span>
    <span class="tok-com">// Navigate to homepage</span>
    <span class="tok-kw">await</span> page<span class="tok-punc">.</span><span class="tok-fn">goto</span><span class="tok-punc">(</span><span class="tok-str">'/'</span><span class="tok-punc">);</span>

    <span class="tok-com">// Assert app title is visible</span>
    <span class="tok-kw">await</span> <span class="tok-fn">expect</span><span class="tok-punc">(</span>page<span class="tok-punc">.</span><span class="tok-fn">getByText</span><span class="tok-punc">(</span><span class="tok-str">/Mechanical Repair App/i</span><span class="tok-punc">))</span><span class="tok-punc">.</span><span class="tok-fn">toBeVisible</span><span class="tok-punc">();</span>

    <span class="tok-com">// Click the "+ Add Repair Job" button</span>
    <span class="tok-kw">await</span> page<span class="tok-punc">.</span><span class="tok-fn">getByRole</span><span class="tok-punc">(</span><span class="tok-str">'button'</span><span class="tok-punc">,</span> <span class="tok-punc">{</span> name<span class="tok-punc">:</span> <span class="tok-str">'+ Add Repair Job'</span> <span class="tok-punc">}</span><span class="tok-punc">)</span><span class="tok-punc">.</span><span class="tok-fn">click</span><span class="tok-punc">();</span>

    <span class="tok-com">// Fill out the form</span>
    <span class="tok-kw">await</span> page<span class="tok-punc">.</span><span class="tok-fn">fill</span><span class="tok-punc">(</span><span class="tok-str">'#description'</span><span class="tok-punc">,</span> <span class="tok-str">'Change spark plugs'</span><span class="tok-punc">);</span>
    <span class="tok-kw">await</span> page<span class="tok-punc">.</span><span class="tok-fn">fill</span><span class="tok-punc">(</span><span class="tok-str">'#cost'</span><span class="tok-punc">,</span> <span class="tok-str">'450'</span><span class="tok-punc">);</span>

    <span class="tok-com">// Save the job</span>
    <span class="tok-kw">await</span> page<span class="tok-punc">.</span><span class="tok-fn">getByRole</span><span class="tok-punc">(</span><span class="tok-str">'button'</span><span class="tok-punc">,</span> <span class="tok-punc">{</span> name<span class="tok-punc">:</span> <span class="tok-str">'Save Repair Job'</span> <span class="tok-punc">}</span><span class="tok-punc">)</span><span class="tok-punc">.</span><span class="tok-fn">click</span><span class="tok-punc">();</span>

    <span class="tok-com">// Assert the new job appears in the list</span>
    <span class="tok-kw">await</span> <span class="tok-fn">expect</span><span class="tok-punc">(</span>page<span class="tok-punc">.</span><span class="tok-fn">getByText</span><span class="tok-punc">(</span><span class="tok-str">'Change spark plugs'</span><span class="tok-punc">))</span><span class="tok-punc">.</span><span class="tok-fn">toBeVisible</span><span class="tok-punc">();</span>
  <span class="tok-punc">});</span>
<span class="tok-punc">});</span>`;

const CodePanel: React.FC = () => (
  <div className={styles.codePanel}>
    <div className={styles.titlebar}>
      <span className={styles.filename}>repair-job.spec.ts</span>
      <div className={styles.traffic}>
        <span /><span /><span />
      </div>
    </div>
    <pre className={styles.pre}>
      <code dangerouslySetInnerHTML={{ __html: HIGHLIGHTED_CODE }} />
    </pre>
  </div>
);

export default CodePanel;
