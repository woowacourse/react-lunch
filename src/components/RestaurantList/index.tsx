import React, { useContext } from 'react';
import Store from '../../store';
import RestaurantItem from '../RestaurantItem';
import styles from './RestaurantList.module.css';
import type { State } from '../../App';

function RestaurantList() {
	const { restaurantList } = useContext(Store) as State;

	return (
		<ul className={styles.restaurantList}>
			{restaurantList.map((restaurant) => (
				<RestaurantItem key={restaurant.id} restaurant={restaurant} isModal={false} />
			))}
		</ul>
	);
}

export default RestaurantList;
