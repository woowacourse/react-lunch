import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const item = localStorage.getItem(key);
  const [value, setValue] = useState<T>(item ? JSON.parse(item) : initialValue);

  const setLocalValue = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setLocalValue];
};
