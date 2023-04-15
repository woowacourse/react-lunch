import { useState } from 'react';

import './style.css';

import CategoryFilter from './CategoryFilter';
import SortBySelect from './SortBySelect';
import RestaurantList from './RestaurantList';
import RestaurantDetailModal from '../RestaurantDetailModal';

import { useModal } from '../common/Modal/useModal';
import { DEFAULT_CATEGORY, DEFAULT_SORT_BY } from '../../domain/constants';
import type { Restaurant } from '../../domain/type';

interface Props {
  restaurants: Restaurant[];
}

const RestaurantListContainer = ({ restaurants }: Props) => {
  const [clickedRestaurant, setClickedRestaurant] = useState<Restaurant | null>(
    null,
  );
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [sortBy, setSortBy] = useState(DEFAULT_SORT_BY);
  const { isModalOpen, openModal, closeModal } = useModal();
  const canModalOpen = isModalOpen && clickedRestaurant !== null;

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setClickedRestaurant(restaurant);
    openModal();
  };

  return (
    <>
      <main>
        <section className="filter-section">
          <CategoryFilter onChangeCategory={setCategory} />
          <SortBySelect onChangeSortBy={setSortBy} />
        </section>
        <section className="restaurant-list-section">
          <RestaurantList
            restaurants={restaurants}
            category={category}
            sortBy={sortBy}
            onClickRestaurant={handleRestaurantClick}
          />
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

export default RestaurantListContainer;
