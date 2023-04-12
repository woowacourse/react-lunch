import React from 'react';
import { Restaurant, RestaurantListState } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import RestaurantDataService from '../../domains/LunchDataService';
import DetailModal from '../Modal/DetailModal';

class RestaurantList extends React.Component {
  restaurantsData = RestaurantDataService.getRestaurants();
  state: RestaurantListState = {
    isClicked: false,
    clickedData: { id: 0, category: '한식', name: '', distance: 0, description: '', link: '' },
  };

  onClick = (event: React.MouseEvent) => {
    const target = event?.target;

    if (!(target instanceof HTMLElement)) return;
    const id = target.closest('[id]')?.id;

    if (!id) return;

    this.setState({ isClicked: true, clickedData: RestaurantDataService.getRestaurant(id) });
  };

  render() {
    const { isClicked, clickedData } = this.state;

    return (
      <>
        <ul onClick={this.onClick}>
          {this.restaurantsData.map((restaurantData: Restaurant) => {
            return (
              <RestaurantItem
                key={restaurantData.id}
                id={restaurantData.id}
                category={restaurantData.category}
                name={restaurantData.name}
                distance={restaurantData.distance}
                description={restaurantData.description}
                link={restaurantData.link}
              />
            );
          })}
        </ul>
        {isClicked && <DetailModal data={clickedData} />}
      </>
    );
  }
}

export default RestaurantList;
