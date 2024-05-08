import { useCallback, useEffect, useState } from "react";

import styles from "./auto-complete.module.css";
import { Suggestion } from "../../types";
import { constants } from "../../utils";

interface SuggestionsListProps {
  suggestions: Suggestion[];
  input: string;
  onItemClick: (item: string) => void;
}

export default function SuggestionsList({
  suggestions,
  input,
  onItemClick,
}: SuggestionsListProps): JSX.Element {
  const highlightText = useCallback(
    (text: string, input: string, idx: number) => {
      const regex = new RegExp(`(${input})`, "gi");
      const parts = text.split(regex);

      return parts.map((part, index) => {
        const isMatch = part.toLowerCase() === input.toLowerCase();
        return isMatch ? (
          <strong key={index} className={styles.highlightText}>
            {part}
          </strong>
        ) : (
          part
        );
      });
    },
    [input]
  );

  const renderItem = useCallback(
    (item: Suggestion, index: number) => {
      return (
        <button
          className={styles.button}
          onClick={() => onItemClick(item.label)}
          key={item.id}
        >
          {highlightText(item.label, input, index)}
        </button>
      );
    },
    [input, onItemClick]
  );

  if (suggestions.length === 0 && input.length > 2) {
    return <p className={styles.noResults}>{constants.NO_RESULTS_FOUND}</p>;
  }

  return (
    <ul className={styles.ul}>
      {suggestions.map((suggestion, index) => (
        <li key={suggestion.id} className={styles.li}>
          {renderItem(suggestion, index)}
        </li>
      ))}
    </ul>
  );
}
