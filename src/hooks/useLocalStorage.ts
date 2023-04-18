import { useEffect } from 'react';

import mockData from '../mockData.json';

export const useLocalStorage = (key: string) => {
  useEffect(() => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(mockData.restaurants));
    }
  }, []);

  return JSON.parse(localStorage.getItem(key) || '[]');
};
