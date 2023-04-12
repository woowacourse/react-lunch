import { Component } from 'react';

import './style.css';

import FilterSection from './FilterSection';
import RestaurantListSection from './RestaurantListSection';

import { Restaurant } from '../../domain/type';
interface Props {
  restaurants: Restaurant[] | null;
}
class MainLayout extends Component<Props> {
  render() {
    return (
      <main>
        <FilterSection />
        <RestaurantListSection restaurants={this.props.restaurants} />
      </main>
    );
  }
}

export default MainLayout;
