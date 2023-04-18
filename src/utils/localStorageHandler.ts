export const getItemFromLocalStorage = (key: string, defaultValue: string) => {
  return localStorage.getItem(key) ?? defaultValue;
};

export const setItemInLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
