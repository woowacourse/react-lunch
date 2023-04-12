import React, { Component } from 'react';
import './RestaurantList.css';

export default class RestaurantList extends Component {
  render() {
    return (
      <section className="restaurant-list-container">
        <ul id="restaurantList" className="restaurant-list"></ul>
      </section>
    );
  }
}
