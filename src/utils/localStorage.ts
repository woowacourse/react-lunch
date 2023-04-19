export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};

export const setLocalStorage = <T extends object>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
