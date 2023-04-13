import { parseJson } from './json';

export const localStorageGetItem = (key: string) => {
  return localStorage.getItem(key);
};

interface typeCheckProps<T> {
  key: string;
  initialValue?: T;
}

export const localStorageValueCheck = <T>({ key, initialValue }: typeCheckProps<T>): T => {
  const value = localStorageGetItem(key);

  if (value === null) {
    if (initialValue !== undefined) return initialValue;
    throw new Error('value is null');
  }

  const narrowedValue = parseJson<T>(value);

  return narrowedValue;
};
