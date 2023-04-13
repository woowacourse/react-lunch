import { Component } from 'react';
import RestaurantFilter from '../RestaurantFilter/RestaurantFilter';
import { RestaurantFilterProps, MainState, RestaurantListProps, ModalProps } from '../../types/types';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Modal from '../Modal/Modal';

export default class Main extends Component<object, MainState> {
  state: MainState = {
    category: '전체',
    sorting: '이름순',
    restaurantId: undefined,
    isModalOpen: false,
  };

  handleCategoryChange = (category: string) => {
    this.setState({ category });
  };

  handleSortingChange = (sorting: string) => {
    this.setState({ sorting });
  };

  handleRestaurantIdChange = (restaurantId: number) => {
    this.setState({ restaurantId, isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const restaurantFilterProps: RestaurantFilterProps = {
      onCategoryChange: this.handleCategoryChange,
      onSortingChange: this.handleSortingChange,
    };

    const restaurantListProps: RestaurantListProps = {
      ...this.state,
      changeRestaurantId: this.handleRestaurantIdChange,
    };

    const modalProps: ModalProps = {
      restaurantId: this.state.restaurantId,
      handleClose: this.handleCloseModal,
      isOpen: this.state.isModalOpen,
    };

    return (
      <>
        <RestaurantFilter {...restaurantFilterProps} />
        <RestaurantsList {...restaurantListProps} />
        {this.state.isModalOpen && <Modal {...modalProps} />}
      </>
    );
  }
}
