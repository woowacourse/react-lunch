import React from 'react';
import Store from '../../store';
import RestaurantItem from '../RestaurantItem';
import styles from './RestaurantList.module.css';

function RestaurantList() {
	return (
		<ul className={styles.restaurantList}>
			<Store.Consumer>
				{(store) =>
					store?.restaurantList.map((restaurant) => (
						<RestaurantItem key={restaurant.id} restaurant={restaurant} isModal={false} />
					))
				}
			</Store.Consumer>
		</ul>
	);
}

export default RestaurantList;
