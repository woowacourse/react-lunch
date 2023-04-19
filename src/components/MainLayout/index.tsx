import { useState } from 'react';

import './style.css';

import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';
import RestaurantItem from './RestaurantItem';

import type { OnClickRestaurant, Restaurant } from '../../domain/type';
import { restaurantService } from '../../domain/restaurantService';

interface Props {
  restaurants: Restaurant[];
  onClickRestaurant: OnClickRestaurant;
}

export default function MainLayout(props: Props) {
  const [category, setCategory] = useState('전체');
  const [sortBy, setSortBy] = useState('이름순');

  const filtered = restaurantService.filterByCategory(
    props.restaurants,
    category,
  );

  const sorted =
    sortBy === '이름순'
      ? restaurantService.sortByName(filtered)
      : restaurantService.sortByTakingTime(filtered);

  return (
    <main>
      <section className="filter-section">
        <CategoryFilter onChangeCategory={setCategory} />
        <Sorting onChangeSorting={setSortBy} />
      </section>
      <section className="restaurant-list-section">
        <ul className="restaurant-list">
          {sorted?.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              onClickRestaurant={props.onClickRestaurant}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
