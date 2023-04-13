import { Component, MouseEvent } from 'react';

import './style.css';

import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';
import RestaurantItem from './RestaurantItem';

import { Restaurant } from '../../domain/type';
import { restaurantService } from '../../domain/restaurantService';

interface Props {
  restaurants: Restaurant[];
  onClickRestaurant: (restaurantId: string) => void;
}

interface State {
  category: string;
  sortBy: string;
}

class MainLayout extends Component<Props, State> {
  state = {
    category: '전체',
    sortBy: '이름순',
  };

  setCategory = (category: string) => {
    this.setState({ ...this.state, category });
  };

  setSorting = (sortBy: string) => {
    this.setState({ ...this.state, sortBy });
  };

  handleRestaurantClick = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const item = target.closest('.restaurant') as HTMLLIElement;
    const restaurantId = item.dataset.id;

    if (!restaurantId) return;

    this.props.onClickRestaurant(restaurantId);
  };

  render() {
    const filtered = restaurantService.filterByCategory(
      this.props.restaurants,
      this.state.category,
    );
    const sorted =
      this.state.sortBy === '이름순'
        ? restaurantService.sortByName(filtered)
        : restaurantService.sortByDistance(filtered);

    return (
      <main>
        <section className="filter-section">
          <CategoryFilter onChangeCategory={this.setCategory} />
          <Sorting onChangeSorting={this.setSorting} />
        </section>
        <section className="restaurant-list-section">
          <ul className="restaurant-list" onClick={this.handleRestaurantClick}>
            {sorted?.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default MainLayout;
