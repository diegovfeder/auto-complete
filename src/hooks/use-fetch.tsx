import React, { useState, useEffect, useCallback } from "react";

interface Country {
  name: string;
  code: string;
}

interface FetchCountriesResponse {
  response: Country[];
}

interface UseFetchCountriesResponse {
  data: Country[];
  loading: boolean;
  error: Error | null;
}

const useFetchCountries = (): UseFetchCountriesResponse => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url = "https://api-football-v1.p.rapidapi.com/v3/countries";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "957127990amsh9cfec01b046d72dp1518b0jsnbf5fc487c2ac",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result.response); // Make sure your response actually has a .response property that contains the data
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Unknown error occurred"));
      }
    } finally {
      setLoading(false);
    }
  }, []); // useCallback with empty dependency array

  useEffect(() => {
    fetchData();
  }, [fetchData]); // useEffect dependency on fetchData

  return { data, loading, error };
};

export default useFetchCountries;
