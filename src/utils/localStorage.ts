export const getLocalStorage = (key: string): unknown => {
  const item = localStorage.getItem(key);

  if (item == null) {
    return null;
  }

  return JSON.parse(item);
};

export const setLocalStorage = (key: string, value: unknown) =>
  localStorage.setItem(key, JSON.stringify(value));
