import React, { useCallback } from "react";

import styles from "./auto-complete.module.css";
import { Suggestion } from "../../types";
import { Input, Loading, SuggestionsList } from ".";

interface AutoCompleteProps {
  suggestions: Suggestion[];
  input: string;
  onInputChange: (value: string) => void;
  loading?: boolean;
  label?: string;
  placeholder?: string;
}

export default function AutoComplete({
  suggestions,
  input = "",
  onInputChange,
  loading = false,
  label = "",
  placeholder = "",
}: AutoCompleteProps): JSX.Element {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = event.target.value;

      onInputChange(targetValue);
    },
    []
  );

  const handleItemClick = useCallback((item: string) => {
    onInputChange(item);
  }, []);

  return (
    <div className={styles.container}>
      <Input
        value={input}
        onChange={handleChange}
        label={label}
        placeholder={placeholder}
      />
      <div className={styles.listContainer}>
        {loading ? (
          <Loading />
        ) : (
          <SuggestionsList
            input={input}
            suggestions={suggestions}
            onItemClick={handleItemClick}
          />
        )}
      </div>
    </div>
  );
}
