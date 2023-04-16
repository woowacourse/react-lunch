import { LOCAL_STORAGE_KEY } from '../constants';

export const saveToLocalStorage = <T>(data: T[], key: string = LOCAL_STORAGE_KEY) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string = LOCAL_STORAGE_KEY) => {
  return JSON.parse(localStorage.getItem(key) as string);
};
