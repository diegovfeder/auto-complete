import { constants } from "../../utils";
import styles from "./auto-complete.module.css";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
}

export default function Input({
  value,
  onChange,
  label = constants.LABEL_SEARCH_FOR_A_COUNTRY,
  placeholder = constants.PLACEHOLDER_TYPE_TO_SEARCH,
}: InputProps): JSX.Element {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}
