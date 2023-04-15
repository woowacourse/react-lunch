import { useState } from 'react';

import './style.css';

import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';
import RestaurantItem from './RestaurantItem';
import RestaurantDetailModal from '../RestaurantDetailModal';

import { useModal } from '../common/Modal/useModal';
import { restaurantService } from '../../domain/restaurantService';
import type { Restaurant } from '../../domain/type';

interface Props {
  restaurants: Restaurant[];
}

const MainLayout = ({ restaurants }: Props) => {
  const [clickedRestaurant, setClickedRestaurant] = useState<Restaurant | null>(
    null,
  );
  const [category, setCategory] = useState('전체');
  const [sortBy, setSortBy] = useState('이름순');
  const { isModalOpen, openModal, closeModal } = useModal();
  const canModalOpen = isModalOpen && clickedRestaurant !== null;
  const filtered = restaurantService.filterByCategory(restaurants, category);
  const sorted =
    sortBy === '이름순'
      ? restaurantService.sortByName(filtered)
      : restaurantService.sortByDistance(filtered);

  const handleRestaurantClick = (restaurant: Restaurant) => {
    openModal();
    setClickedRestaurant(restaurant);
  };

  return (
    <>
      <main>
        <section className="filter-section">
          <CategoryFilter onChangeCategory={setCategory} />
          <Sorting onChangeSorting={setSortBy} />
        </section>
        <section className="restaurant-list-section">
          <ul className="restaurant-list">
            {sorted.map((restaurant) => (
              <RestaurantItem
                key={restaurant.id}
                restaurant={restaurant}
                onClickRestaurant={handleRestaurantClick}
              />
            ))}
          </ul>
        </section>
      </main>
      {canModalOpen && (
        <RestaurantDetailModal
          restaurant={clickedRestaurant}
          onCloseModal={closeModal}
        />
      )}
    </>
  );
};

export default MainLayout;
