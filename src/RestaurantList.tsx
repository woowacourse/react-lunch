import React , { useState, useEffect } from 'react';
import RestaurantItem from './RestaurantItem.tsx';
import { FilterOption, Restaurant } from './util/type.js';
import { pipe } from './util/util.ts';

type RestaurantListState = Omit<Restaurant, 'link'>[];

type RestaurantListProps = {
  filterOptions: FilterOption;
  onToggleDrawer: (id?: number) => void;
};

const RestaurantList:React.FC<RestaurantListProps> = ({ filterOptions, onToggleDrawer }) => {
  const { category, sorting } = filterOptions;
  // TODO: 타입 구체화
  const [restaurantList, setRestaurantList] = useState<RestaurantListState>([]);

  useEffect(() => {
    const rawRestaurantList = localStorage.getItem('restaurantList');
    if (rawRestaurantList) { 
        setRestaurantList(JSON.parse(rawRestaurantList));
    } else {
      fetch('./mockData.json')
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('restaurantList', JSON.stringify(data));
        setRestaurantList(data);
      });
    }
  }, []);
  
  const filterByCategory = (restaurantList, category):Restaurant[] =>  {
    if (category === '전체') return restaurantList;
    return restaurantList.filter(
      (restaurant) => restaurant.category === category
    );
  }

  const filterBySort = (restaurantList, sorting):Restaurant[] => {
    return restaurantList.sort((firstElement, secondElement) => {
      if (sorting === 'name') {
        return firstElement.title.localeCompare(secondElement.title);
      }
      if (sorting === 'distance') {
        return firstElement.distance - secondElement.distance;
      }
      return 0;
    });
  }

    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {pipe(filterByCategory, filterBySort)(
            restaurantList,
            [category, sorting]
          ).map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              onToggleDrawer={onToggleDrawer}
            />
          ))}
        </ul>
      </section>
    );
}

export default RestaurantList;
