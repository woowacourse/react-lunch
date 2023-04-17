import RestaurantDetailModal from './RestaurantDetailModal';
import RestaurantFilter from './RestaurantFilter';
import RestaurantList from './RestaurantList';
import useRestaurantList from '../../hooks/useRestaurantList';
import { useState } from 'react';

const RestaurantFinder = () => {
  const [modalRestaurantId, setModalRestaurantId] = useState<null | number>(null);
  const { restaurantList, setFindOptions } = useRestaurantList();
  const modalRestaurant = restaurantList.find((restaurant) => restaurant.id === modalRestaurantId);

  const removeModalRestaurantId = () => {
    setModalRestaurantId(null);
  };

  return (
    <main>
      <RestaurantFilter setFindOptions={setFindOptions} />
      <RestaurantList restaurantList={restaurantList} setModalRestaurantId={setModalRestaurantId} />
      {modalRestaurant && <RestaurantDetailModal restaurant={modalRestaurant} onCloseModal={removeModalRestaurantId} />}
    </main>
  );
};

export default RestaurantFinder;
