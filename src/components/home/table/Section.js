import styles from './Table.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export default function Section({ sect }) {
    const [displayMore, setDisplayMore] = useState(false)
    const clicked = () => {
        setDisplayMore(!displayMore);
    }
    return (
      <div className={styles.sectionContainer}>
        <div className={styles.infoSection} onClick={clicked}>
          <div className={displayMore ? styles.secondary : styles.info}>
            {displayMore ? sect.secondary : sect.info}
          </div>
          <div className={styles.showMore}>
            {displayMore ? (
              <FontAwesomeIcon icon={faAngleDown} />
            ) : (
              <FontAwesomeIcon icon={faAngleRight} />
            )}
          </div>
        </div>
        {sect.special ? (
          <>
            <div className={styles.tppd} style={{ "fontSize": "20px" }}>
              {sect.tppd}
            </div>
            <div className={styles.comp} style={{ "fontSize": "20px" }}>
              {sect.comp}
            </div>
            <div className={styles.tpft} style={{ "fontSize": "20px" }}>
              {sect.tpft}
            </div>
          </>
        ) : (
          <>
            <div
              className={styles.tppd}
              style={
                sect.tppd
                  ? { color: "#286dbd" }
                  : { color: "#d9d9d9", "fontSize": "20px" }
              }
            >
              {sect.tppd ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faCircle} />
              )}
            </div>
            <div
              className={styles.comp}
              style={
                sect.comp
                  ? { color: "#286dbd" }
                  : { color: "#d9d9d9", "fontSize": "20px" }
              }
            >
              {sect.comp ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faCircle} />
              )}
            </div>
            <div
              className={styles.tpft}
              style={
                sect.tpft
                  ? { color: "#286dbd" }
                  : {
                      color: "#d9d9d9",
                      "fontSize": "20px",
                      "fontWeight": "900",
                    }
              }
            >
              {sect.tpft ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faCircle} />
              )}
            </div>
          </>
        )}
      </div>
    );
}