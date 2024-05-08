import styles from "./auto-complete.module.css";

export default function Loading(): JSX.Element {
  return (
    <div role="status" className={styles.loading}>
      Loading...
    </div>
  );
}
