import React from 'react';
import { Restaurant } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import RestaurantDataService from '../../domains/RestaurantDataService';

class RestaurantList extends React.Component {
  restaurantsData = RestaurantDataService.getRestaurants();

  render() {
    return (
      <ul>
        {this.restaurantsData.map((restaurantData: Restaurant) => {
          return (
            <RestaurantItem
              key={restaurantData.id}
              id={restaurantData.id}
              category={restaurantData.category}
              name={restaurantData.name}
              distance={restaurantData.distance}
              description={restaurantData.description}
            />
          );
        })}
      </ul>
    );
  }
}

export default RestaurantList;
