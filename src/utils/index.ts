export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setLocalStorage = (key: string, data: []) => {
  localStorage.setItem(key, JSON.stringify(data));
};
