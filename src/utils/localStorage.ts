export const getLocalStorage = (key: string): null | [] => {
  const item = localStorage.getItem(key);

  if (item == null) {
    return null;
  }

  return JSON.parse(item);
};

export const setLocalStorage = (key: string, value: []) =>
  localStorage.setItem(key, JSON.stringify(value));
