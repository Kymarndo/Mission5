import styles from "./CompCoverage.module.css";
import tina from './search-wizard-tina-default.png'

export default function CompCoverage() {
    return (
        <div id={styles.outerContainer}>
            <div id={styles.innerContainer}>
                <div id={styles.left}>
                    <div className={styles.title}>Coverage</div>
                    <div className={styles.info}>
                        <ul>
                            <li>Fire and theft</li>
                            <li>Loss or damage</li>
                            <li>Emergency travel, accommodation and repairs</li>
                            <li>Transport cover</li>
                            <li>Towing and storage costs</li>
                            <li>Windscreen & window glass cover</li>
                            <li>Legal liability for damage to property, or injury</li>
                            <li>Locks and keys </li>
                            <li>Replacement car cover </li>
                            <li>Trailer cover </li>
                            <li>Hire car after theft </li>
                            <li>New car replacement</li>
                        </ul>
                    </div>
                    <div className={styles.title}>Optional benefits</div>
                    <div className={styles.info}>
                        <ul>
                            <li>Excess-free windscreen and window glass replacement </li>
                            <li>Hire car </li>
                            <li>Roadside Assistance</li>
                        </ul>
                    </div>
                </div>
                <div id={styles.right}>
                    <img src={tina} alt='tina' id={styles.image}></img>
                </div>
            </div>
        </div>);}