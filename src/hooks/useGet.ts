"use client";

import { useEffect, useState } from "react";

export const useGet = <T>() => {
  const [response, setResponse] = useState<T | null>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetch("https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products", { method: "GET" })
        .then((response) => response.json())
        .then((responseData) => setResponse(responseData))
        .catch((error) => setError(error instanceof Error ? error.message : "There was an error where fetching"))
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return { response, error, loading };
};
