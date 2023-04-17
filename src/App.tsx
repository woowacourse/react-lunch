import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './styles/App.css';
import { RestaurantInfo, isFoodCategory, isSortMethod } from './types/restaurantInfo';
import { getSavedRestaurantList, hasSavedRestaurantList, saveRestaurantList } from './components/RestaurantList/initializeRestaurantList';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Modal from './components/Modal/Modal';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';

function App() {
  if (!hasSavedRestaurantList()) saveRestaurantList();
  // const storedList = getSavedRestaurantList();

  // const [originalRestaurantList, setOriginalRestaurantList] = useState(storedList);
  const [clickedRestaurant, setClickedRestaurant] = useState(null as (RestaurantInfo | null));
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedSortingMethod, setSelectedSortingMethod] = useState('이름순');

  const selectChangeCallback = (event: React.ChangeEvent<HTMLSelectElement>, kind: 'sort' | 'filter') => {
    const { value } = event.currentTarget;

    if (kind === 'filter') {
      setSelectedCategory(value);
    }

    if (kind === 'sort') {
      setSelectedSortingMethod(value);
    }
  }

  const deleteRestaurant = () => {
    if (!clickedRestaurant) return;

    // const updatedList = originalRestaurantList.filter((restaurant) => restaurant !== clickedRestaurant);
    // saveRestaurantList(updatedList);

    // setOriginalRestaurantList(updatedList);
    setClickedRestaurant(null);
  }

  useEffect(() => { 
    if (!clickedRestaurant) return;

    document.body.dataset.hideScroll = 'true';

    return () => { document.body.dataset.hideScroll = 'false'; };
  }, [clickedRestaurant]);

  return (
    <div className="app">
      <Header onChange={selectChangeCallback} />
      <RestaurantList
        onClick={(info: RestaurantInfo) => setClickedRestaurant(info)}
        category={isFoodCategory(selectedCategory) ? selectedCategory : '전체'}
        sortingMethod={isSortMethod(selectedSortingMethod) ? selectedSortingMethod : '이름순'}
      />
      {clickedRestaurant && (
        <Modal onClose={() => setClickedRestaurant(null)}>
          <RestaurantDetail
            onDeleteClick={deleteRestaurant}
            onCloseClick={() => setClickedRestaurant(null)}
            restaurantInfo={clickedRestaurant}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
