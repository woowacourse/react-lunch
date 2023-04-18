import React, { useState } from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import Modal from '../Modal/Modal';
import { RestaurantInfo } from '../data/type';
import mockData from '../data/mockData.json';
import './RestaurantList.css';

interface RestaurantListProps {
  selectedCategory: string;
  selectedSort: string;
}

const restaurantData: RestaurantInfo[] = mockData.restaurant;

const RestaurantList = ({
  selectedCategory,
  selectedSort,
}: RestaurantListProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRestaurant, setModalRestaurant] = useState<RestaurantInfo>({
    id: 0,
    category: '',
    name: '',
    distance: 0,
    description: '',
    link: '',
  });

  const handleModalOpen = (restaurant: RestaurantInfo) => {
    setModalOpen(true);
    setModalRestaurant(restaurant);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const filteredAndSortedRestaurantData = [...restaurantData]
    .filter((restaurant) => {
      return (
        selectedCategory === '전체' || restaurant.category === selectedCategory
      );
    })
    .sort((a, b) => {
      if (selectedSort === '이름순') {
        return a.name.localeCompare(b.name);
      } else {
        return a.distance - b.distance;
      }
    });

  return (
    <section className="restaurant-list-container">
      <ul id="restaurantList" className="restaurant-list">
        {filteredAndSortedRestaurantData.map((restaurant) => {
          return (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              onModalOpen={handleModalOpen}
            />
          );
        })}
      </ul>
      {modalOpen && (
        <Modal
          restaurant={modalRestaurant}
          isModalOpen={modalOpen}
          onCloseModal={handleModalClose}
        />
      )}
    </section>
  );
};

export default RestaurantList;
