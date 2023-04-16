import { useEffect, useState } from 'react';

import { RESTAURANTS_LOCAL_STORAGE_KEY } from '../constants';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import type { Restaurant } from '../type';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const localStorageData = getLocalStorage(
      RESTAURANTS_LOCAL_STORAGE_KEY,
    ) as Restaurant[];

    if (localStorageData) {
      setRestaurants(localStorageData);
      return;
    }

    const fetchRestaurants = async () => {
      const response = await fetch('./mockData.json');

      if (!response.ok) {
        throw new Error('음식점 목록을 불러올 수 없습니다.');
      }

      const data = await response.json();

      setRestaurants(data);
      setLocalStorage(RESTAURANTS_LOCAL_STORAGE_KEY, data);
    };

    fetchRestaurants();
  }, []);

  return { restaurants };
};
