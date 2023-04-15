import { useState } from 'react';
import RestaurantFilter from '../RestaurantFilter/RestaurantFilter';
import { RestaurantFilterProps, MainState, RestaurantListProps, ModalProps } from '../../types/types';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Modal from '../Modal/Modal';

const Main = () => {
  const [state, setState] = useState<MainState>({
    category: '전체',
    sorting: '이름순',
    restaurantId: undefined,
    isModalOpen: false,
  });

  const handleCategoryChange = (category: string) => {
    setState(prevState => ({ ...prevState, category }));
  };

  const handleSortingChange = (sorting: string) => {
    setState(prevState => ({ ...prevState, sorting }));
  };

  const handleRestaurantIdChange = (restaurantId: number) => {
    setState(prevState => ({ ...prevState, restaurantId, isModalOpen: true }));
  };

  const handleCloseModal = () => {
    setState(prevState => ({ ...prevState, isModalOpen: false }));
  };

  const restaurantFilterProps: RestaurantFilterProps = {
    onCategoryChange: handleCategoryChange,
    onSortingChange: handleSortingChange,
  };

  const restaurantListProps: RestaurantListProps = {
    ...state,
    changeRestaurantId: handleRestaurantIdChange,
  };

  const modalProps: ModalProps = {
    restaurantId: state.restaurantId,
    handleClose: handleCloseModal,
  };

  return (
    <>
      <RestaurantFilter {...restaurantFilterProps} />
      <RestaurantsList {...restaurantListProps} />
      {state.isModalOpen && <Modal {...modalProps} />}
    </>
  );
};

export default Main;
