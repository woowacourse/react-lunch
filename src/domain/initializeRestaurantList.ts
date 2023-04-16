export const getSavedLocalStorageList = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const hasSavedLocalStorageList = (key: string) => {
  const data = getSavedLocalStorageList(key);

  return data && data.length > 0;
};

export const saveLocalStorageList = <Type>(key: string, value: Type) => {
  localStorage.setItem(key, JSON.stringify(value));
};
