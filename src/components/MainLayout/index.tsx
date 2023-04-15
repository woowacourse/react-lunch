import { MouseEvent, useState } from 'react';

import './style.css';

import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';
import RestaurantItem from './RestaurantItem';

import { restaurantService } from '../../domain/restaurantService';
import type { Restaurant } from '../../domain/type';

interface Props {
  restaurants: Restaurant[];
  onClickRestaurant: (restaurantId: string) => void;
}

const MainLayout = ({ restaurants, onClickRestaurant }: Props) => {
  const [category, setCategory] = useState('전체');
  const [sortBy, setSortBy] = useState('이름순');
  const filtered = restaurantService.filterByCategory(restaurants, category);
  const sorted =
    sortBy === '이름순'
      ? restaurantService.sortByName(filtered)
      : restaurantService.sortByDistance(filtered);

  const handleRestaurantClick = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const item = target.closest('.restaurant') as HTMLLIElement;
    const restaurantId = item.dataset.id;

    if (!restaurantId) return;

    onClickRestaurant(restaurantId);
  };

  return (
    <main>
      <section className="filter-section">
        <CategoryFilter onChangeCategory={setCategory} />
        <Sorting onChangeSorting={setSortBy} />
      </section>
      <section className="restaurant-list-section">
        <ul className="restaurant-list" onClick={handleRestaurantClick}>
          {sorted.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default MainLayout;
