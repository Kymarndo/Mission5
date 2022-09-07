import styles from "./Table.module.css";
import Section from "./Section";
import { Data } from "./Tableinfo";

export default function Table() {
  return (
    <div id={styles.table}>
      <div id={styles.title}>Coverage at a glance</div>
      <div id={styles.tableContainer}>
        <div id={styles.tableTitles}>
          <div
            className={styles.infoSection}
          ></div>
          <div className={styles.tppd} style={{ "font-size": "20px" }}>
            <span style={{ width: "80%" }}>Third party property damage</span>
          </div>
          <div className={styles.comp} style={{ "font-size": "20px" }}>
            <span style={{ width: "80%" }}>Comprehensive Plus</span>
          </div>
          <div className={styles.tpft} style={{ "font-size": "20px" }}>
            <span style={{ width: "80%" }}>Third Party Fire & Theft</span>
          </div>
        </div>
        {Data.map((sect) => {
          return <Section sect={sect} />;
        })}
        <div id={styles.tableTitles}>
          <div
            className={styles.infoSection}
            style={{ "font-size": "20px" }}
          ></div>
          <div
            className={styles.tppd}
            style={{ "font-size": "20px", color: "#5b5b5b" }}
          >
            <span style={{ width: "80%" }}>Learn more</span>
          </div>
          <div
            className={styles.comp}
            style={{ "font-size": "20px", color: "#5b5b5b" }}
          >
            <span style={{ width: "80%" }}>Learn more</span>
          </div>
          <div
            className={styles.tpft}
            style={{ "font-size": "20px", color: "#5b5b5b" }}
          >
            <span style={{ width: "80%" }}>Learn more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
