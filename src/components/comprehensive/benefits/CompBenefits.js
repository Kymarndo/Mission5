import styles from './CompBenefits.module.css'
import compbens from './compbens.jpg'

export default function CompBenefits() {
    return (
      <div id={styles.outercontainer}>
        <div id={styles.innercontainer}>
          <div id={styles.left}>
            <img src={compbens} alt="Woman with dog" id={styles.image}></img>
          </div>
          <div id={styles.right}>
            <div id={styles.title}>Features & Benefits</div>
            <div id={styles.list}>
              <div className={styles.listItem}>
                › 1 year new for old car replacement
              </div>
              <div className={styles.listItem}>
                › Lifetime guarantee on repairs we arrange
              </div>
              <div className={styles.listItem}>
                › Replacement of stolen keys and recoding of locks (up to
                $1,000)
              </div>
              <div className={styles.listItem}>
                › Hire car after theft of up to 14 days
              </div>
            </div>
            <div id={styles.button}>Policy PDF</div>
          </div>
        </div>
      </div>
    );
}