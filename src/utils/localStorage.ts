export const getLocalStorage = (key: string): null | [] => {
  const item = localStorage.getItem(key);

  return item && JSON.parse(item);
};

export const setLocalStorage = (key: string, value: []) =>
  localStorage.setItem(key, JSON.stringify(value));
