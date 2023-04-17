import { useState, useEffect } from 'react';
import { Restaurant } from '../util/type';

type RestaurantListStateType = {
  restaurantList: Omit<Restaurant, 'link'>[];
};

const useRestaurantList = (): RestaurantListStateType => {
  const [state, setState] = useState<RestaurantListStateType>({
    restaurantList: [],
  });

  const fetchData = async () => {
    const rawRestaurantList = localStorage.getItem('restaurantList');
    if (rawRestaurantList) {
      setState({ restaurantList: JSON.parse(rawRestaurantList) });
      return;
    }

    const res = await fetch('./mockData.json');
    const data = await res.json();
    localStorage.setItem('restaurantList', JSON.stringify(data));
    setState({ restaurantList: data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};

export default useRestaurantList;
