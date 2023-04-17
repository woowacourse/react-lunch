import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.ts';

const useRestaurantList = (key, initValue, callback = (arr) => arr) => {
  const [restaurantList, setRestaurantList] = useLocalStorage(key, initValue);

  useEffect(() => {
    (async () => {
      if (restaurantList.length === 0) {
        const fdata = await fetch('../mockData.json');
        const jsonData = await fdata.json();
        setRestaurantList(jsonData);
      }
    })();
  }, [restaurantList]);

  return callback(restaurantList);
};

export default useRestaurantList;
