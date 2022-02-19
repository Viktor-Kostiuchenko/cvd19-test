import { useState, useEffect } from "react";


export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const dataFromLS = localStorage.getItem(key);

    if (key === "country") {
      return localStorage.getItem(key) ?? defaultValue;
    }

    if (!dataFromLS) {
      return defaultValue;
    }

    return new Date(localStorage.getItem(key));
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
