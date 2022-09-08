import styles from './OptionalInsurance.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function OptionalInsurance() {
  return (
    <div id={styles.optionalInsuranceSection}>
      <div id={styles.title}>Optional Mechanical Breakdown Insurance</div>
      <div id={styles.container}>
        <div id={styles.info}>
          Mechanical Breakdown Insurance covers unforeseen and sudden mechanical
          and electrical breakdowns. If you are getting Finance, your Mechanical
          Breakdown Insurance can be included in your loan. And remember, you
          can get Mechanical Breakdown Insurance for any vehicle, even if you
          didn’t buy it at Turners.
        </div>
        <div id={styles.innerContainer}>
          <div className={styles.subTitles} style={{paddingTop:'30px'}}>Consumable Item</div>
          <div className={styles.subTitles}>Repatriation Costs</div>
          <div className={styles.subTitles}>
            Accommodation and Return Home Travel
          </div>
          <div className={styles.subTitles}>
            24/7 Roadside Assistance through AA Roadservice
          </div>
        </div>
      </div>
      <div id={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>5,000 Cover</div>
          <div className={styles.cardSection}>up to $350 per claim </div>
          <div className={styles.cardSection}>up to $250 per claim </div>
          <div className={styles.cardSection}>up to $500 per claim </div>
          <div className={styles.tick}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>10,000 Cover</div>
          <div className={styles.cardSection}>up to $750 per claim </div>
          <div className={styles.cardSection}>up to $500 per claim </div>
          <div className={styles.cardSection}>up to $1,500 per claim </div>
          <div className={styles.tick}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
      </div>
    </div>
  );
}
