import React from 'react';
import styles from './RestaurantList.module.css';
import RestaurantItem from '../RestaurantItem';
import Store from '../../store';

class RestaurantList extends React.Component {
	render() {
		return (
			<ul className={styles.restaurantList}>
				<Store.Consumer>
					{(store) =>
						store?.restaurantList.map((restaurant) => {
							return <RestaurantItem key={restaurant.id} restaurant={restaurant} />;
						})
					}
				</Store.Consumer>
			</ul>
		);
	}
}

export default RestaurantList;
