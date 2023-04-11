import { Component } from 'react';

import RestaurantItem from './RestaurantItem';

export default class RestaurantList extends Component {
  render() {
    return (
      <section className="restaurant-list-container">
        <ul>
          <RestaurantItem />
        </ul>
      </section>
    );
  }
}
