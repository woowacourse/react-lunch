import { Component } from 'react';
import RestaurantFilter from '../RestaurantFilter/RestaurantFilter';
import { RestaurantFilterProps } from '../../types/types';

interface MainState {
  category: string;
  sorting: string;
}

export default class Main extends Component<object, MainState> {
  state: MainState = {
    category: '전체',
    sorting: '이름순',
  };

  handleCategoryChange = (category: string) => {
    this.setState({ category });
  };

  handleSortingChange = (sorting: string) => {
    this.setState({ sorting });
  };

  render() {
    const restaurantFilterProps: RestaurantFilterProps = {
      onCategoryChange: this.handleCategoryChange,
      onSortingChange: this.handleSortingChange,
    };
    return (
      <>
        <RestaurantFilter {...restaurantFilterProps} />
      </>
    );
  }
}
