import { Category, Restaurant, SortingType } from './types/restaurant';

import React, { useEffect, useState } from 'react';
import { Header, RestaurantList, RestaurantDetail } from './components';

import mockData from './mockData.json';

interface Props {}

interface State {
  restaurants: Restaurant[];
  category: string;
  sortingType: SortingType;
  isModalOpen: boolean;
  detailId: Restaurant['id'];
}

const App = (props: Props) => {
  const [state, setState] = useState<State>({
    restaurants: JSON.parse(localStorage.getItem('restaurants') || '[]'),
    category: '전체',
    sortingType: '이름순',
    isModalOpen: false,
    detailId: '1',
  });

  useEffect(() => {
    if (!localStorage.getItem('restaurants')) {
      localStorage.setItem('restaurants', JSON.stringify(mockData.restaurants));
    }
  }, []);

  const openModal = (id: Restaurant['id']) => {
    setState({
      ...state,
      detailId: id,
      isModalOpen: true,
    });
  };

  const closeModal = () => {
    setState({
      ...state,
      isModalOpen: false,
    });
  };

  const setCategory = (category: Category) => {
    setState({
      ...state,
      category,
    });
  };

  const setSortingType = (sortingType: SortingType) => {
    setState({
      ...state,
      sortingType,
    });
  };

  const filterRestaurants = () => {
    const { category, sortingType } = state;

    const restaurants = state.restaurants.filter(
      (restaurant) => category === '전체' || restaurant.category === category
    );

    const getPivot = (restaurant: Restaurant) => {
      return sortingType === '이름순' ? restaurant.name : restaurant.distance;
    };

    return restaurants.sort((a, b) => {
      const A = getPivot(a);
      const B = getPivot(b);
      if (A > B) return 1;
      if (A < B) return -1;
      return 0;
    });
  };

  return (
    <div className="App">
      <Header />

      <RestaurantList
        restaurants={filterRestaurants()}
        openModal={openModal}
        setCategory={setCategory}
        setSortingType={setSortingType}
      />

      {state.isModalOpen && (
        <RestaurantDetail
          closeModal={closeModal}
          restaurant={
            mockData.restaurants.find(
              (restaurant) => restaurant.id === state.detailId
            ) as Restaurant
          }
        />
      )}
    </div>
  );
};

export default App;
