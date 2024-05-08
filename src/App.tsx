import { useCallback, useEffect, useState } from "react";

import { useDebounce } from "./hooks";
import { Suggestion } from "./types";
import { mocks, lib, constants } from "./utils";
import AutoComplete from "./components/auto-complete/auto-complete";

function App() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 20);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
    },
    []
  );

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    if (input.length > 2) {
      setLoading(true);
      fetchSuggestions(input).then((data) => {
        setSuggestions(data);
        setLoading(false);
      });
    } else {
      setSuggestions([]);
    }
  }, [input]);

  // TODO: Implement actual search query using an API
  const fetchSuggestions = async (search: string): Promise<Suggestion[]> => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockData: Suggestion[] = lib.mapCountriesToSuggestions(
          mocks.countries
        );
        const filteredData = mockData.filter((s) =>
          s.label.toLowerCase().includes(search.toLowerCase())
        );
        resolve(filteredData);
      }, 300);
    });
  };

  return (
    <main id="main">
      <AutoComplete
        suggestions={suggestions}
        loading={loading}
        input={debouncedInput}
        handleChange={handleChange}
        label={constants.LABEL_SEARCH_FOR_A_COUNTRY}
      />
    </main>
  );
}

export default App;
