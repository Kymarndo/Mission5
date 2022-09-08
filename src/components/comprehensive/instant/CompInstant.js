import styles from './CompInstant.module.css'
import { Link } from 'react-router-dom';

export default function CompInstant() {
  return (
    <div id={styles.container}>
      <div id={styles.main}>
        <div id={styles.left}>Get your instant online quote in two minutes</div>
        <div id={styles.right}>
          <div id={styles.button}>Start my quote</div>
        </div>
      </div>
      <div id={styles.back}>
        <Link to="/">
          <span style={{ textDecoration:'none'}}>{`<< Back to Insurance Overview`}</span>
        </Link>
      </div>
    </div>
  );
}
