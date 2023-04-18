import RestaurantDetailModal from './RestaurantDetailModal';
import RestaurantFilter from './RestaurantFilter';
import RestaurantList from './RestaurantList';
import useRestaurantList from '../../hooks/useRestaurantList';
import React, { useState } from 'react';
import { Restaurant } from '../../@types/type';
import { RestaurantDetailModalContext } from '../../contexts/RestaurantDetailModalContext';

const RestaurantFinder = () => {
  const { restaurantList, setFindOptions } = useRestaurantList();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRestaurantInfo, setModalRestaurantInfo] = useState<Restaurant | null>(null);

  const value = { isModalOpen, modalRestaurantInfo, setIsModalOpen, setModalRestaurantInfo };

  return (
    <RestaurantDetailModalContext.Provider value={value}>
      <main>
        <RestaurantFilter setFindOptions={setFindOptions} />
        <RestaurantList restaurantList={restaurantList} />
        <RestaurantDetailModal />
      </main>
    </RestaurantDetailModalContext.Provider>
  );
};

export default RestaurantFinder;
