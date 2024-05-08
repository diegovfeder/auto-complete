import styles from "./auto-complete.module.css";
import { constants } from "../../utils";

export default function Loading(): JSX.Element {
  return (
    <div role="status" className={styles.loading}>
      {constants.LOADING}
    </div>
  );
}
