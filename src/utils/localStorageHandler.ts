export const getItemFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
export const setItemInLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
