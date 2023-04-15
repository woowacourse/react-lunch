import { useEffect, useState } from 'react';

import { Restaurant } from '../../domain/type';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const localStorageData = getLocalStorage('restaurants') as Restaurant[];

    if (localStorageData) {
      setRestaurants(localStorageData);
      return;
    }

    const fetchRestaurants = async () => {
      const response = await fetch('./react-lunch/mockData.json');

      if (!response.ok) {
        throw new Error('음식점 목록을 불러올 수 없습니다.');
      }

      const data = await response.json();

      setRestaurants(data);
      setLocalStorage('restaurants', data);
    };

    fetchRestaurants();
  }, []);

  return { restaurants };
};
