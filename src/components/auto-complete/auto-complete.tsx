import React from "react";

import { Suggestion } from "../../types";
import { Input, Loading, SuggestionsList } from ".";
import styles from "./auto-complete.module.css";

interface AutoCompleteProps {
  suggestions: Suggestion[];
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading?: boolean;
  label?: string;
  placeholder?: string;
}

export default function AutoComplete({
  suggestions,
  input = "",
  handleChange,
  loading = false,
  label = "",
  placeholder = "",
}: AutoCompleteProps): JSX.Element {
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
          <SuggestionsList suggestions={suggestions} input={input} />
        )}
      </div>
    </div>
  );
}
