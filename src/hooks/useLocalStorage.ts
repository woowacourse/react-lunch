import { Dispatch, SetStateAction, useState } from "react";

export const useLocalStorage = <T extends unknown>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initialValue);
  localStorage.setItem(key, String(value));

  return [value, setValue];
};
