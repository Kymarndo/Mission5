import styles from './CompInstant.module.css'

export default function CompInstant() {
  return (
    <div id={styles.container}>
      <div id={styles.main}>
        <div id={styles.left}>Get your instant online quote in two minutes</div>
        <div id={styles.right}>
          <div id={styles.button}>Start my quote</div>
        </div>
      </div>
      <div id={styles.back}>{`<< Back to Insurance Overview`}</div>
    </div>
  );
}
