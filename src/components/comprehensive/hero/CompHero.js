import styles from "./CompHero.module.css";

export default function CompHero() {
  return (
    <div id={styles.container}>
      <div id={styles.intro}>
        <div id={styles.title}>Comprehensive Everyday Plus</div>
        <div id={styles.info}>
          Comprehensive Everyday Plus covers your vehicle for accident, fire or
          theft and your liability for damage to other people’s property or
          bodily injury. Optional benefits can be added on to your plan.
        </div>
      </div>
    </div>
  );
}
