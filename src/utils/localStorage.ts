import { LOCAL_STORAGE_KEY } from '../constants';

export const saveToLocalStorage = <T>(data: T[], key: string = LOCAL_STORAGE_KEY) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string = LOCAL_STORAGE_KEY) => {
  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};
