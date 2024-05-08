import styles from "./auto-complete.module.css";
import { Suggestion } from "../../types";

const highlightText = (text: string, input: string) => {
  const parts = text.split(new RegExp(`(${input})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === input.toLowerCase() ? (
      <strong key={index} className={styles.highlightText}>{part}</strong>
    ) : (
      part
    )
  );
};

export default function SuggestionsList({
  suggestions,
  input,
}: {
  suggestions: Suggestion[];
  input: string;
}): JSX.Element {
  if (input.length > 2 && suggestions.length === 0) {
    return <div className={styles.noResults}>No suggestions found</div>;
  }

  return (
    <ul className={styles.ul}>
      {suggestions.map((suggestion) => (
        <li key={suggestion.id} className={styles.li}>
          {highlightText(suggestion.label, input)}
        </li>
      ))}
    </ul>
  );
}
