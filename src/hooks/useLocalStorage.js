import { useState, useEffect } from "react";


export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const dataFromLS = localStorage.getItem(key);

    if (key === "country") {
      return dataFromLS ?? defaultValue;
    }

    if (!dataFromLS) {
      return defaultValue;
    }


    return new Date(dataFromLS);
  });

  useEffect(() => localStorage.setItem(key, state), [key, state]);

  return [state, setState];
};
