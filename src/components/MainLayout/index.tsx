import { useState, MouseEvent } from 'react';

import './style.css';

import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';
import RestaurantItem from './RestaurantItem';

import { Restaurant } from '../../domain/type';
import { restaurantService } from '../../domain/restaurantService';

type OnClickRestaurant = (restaurantId: string) => void;

interface Props {
  restaurants: Restaurant[];
  onClickRestaurant: OnClickRestaurant;
}

const setFilterSectionOption = () => {
  const [category, setCategory] = useState('전체');
  const [sortBy, setSortBy] = useState('이름순');

  function settingCategory(category: string) {
    setCategory(category);
  }

  function settingSortBy(sortBy: string) {
    setSortBy(sortBy);
  }

  return { category, sortBy, settingCategory, settingSortBy };
};

const handleRestaurantClick = (
  callback: OnClickRestaurant,
  event: MouseEvent<HTMLUListElement>,
) => {
  const target = event.target as HTMLElement;
  const item = target.closest('.restaurant') as HTMLLIElement;
  const restaurantId = item.dataset.id;

  if (!restaurantId) return;

  callback(restaurantId);
};

export default function MainLayout(props: Props) {
  const { category, sortBy, settingCategory, settingSortBy } =
    setFilterSectionOption();

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
        <CategoryFilter onChangeCategory={settingCategory} />
        <Sorting onChangeSorting={settingSortBy} />
      </section>
      <section className="restaurant-list-section">
        <ul
          className="restaurant-list"
          onClick={(event) =>
            handleRestaurantClick(props.onClickRestaurant, event)
          }
        >
          {sorted?.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </section>
    </main>
  );
}
