import useModal from './hooks/useModal';
import useRestaurant from './hooks/useRestaurant';
import { Header, Modal } from './components/common';
import { FilterContainer, RestaurantDetailView, RestaurantList } from './components';
import './App.css';

const App = () => {
  const {
    restaurants,
    restaurantInfo,
    changeRestaurantFilterOption,
    changeRestaurantSortOption,
    setRestaurantInfoForModal,
  } = useRestaurant();
  const { isOpen, openModal, closeModal } = useModal();

  const showRestaurantInfo = (restaurantId: number) => {
    setRestaurantInfoForModal(restaurantId);
    openModal();
  };

  return (
    <div className="App">
      <Header>점심 뭐 먹지</Header>
      <FilterContainer
        onChangeCategoryFilter={changeRestaurantFilterOption}
        onChangeSortFilter={changeRestaurantSortOption}
      />
      <RestaurantList restaurants={restaurants} onClick={showRestaurantInfo} />
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <RestaurantDetailView restaurant={restaurantInfo} />
      </Modal>
    </div>
  );
};

export default App;
