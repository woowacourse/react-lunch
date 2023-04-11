import { Component } from 'react';

export class RestaurantItems extends Component {
  render() {
    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list" id="restaurant-list"></ul>
      </section>
    );
  }
}
