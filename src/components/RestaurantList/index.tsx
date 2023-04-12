import React from 'react';
import styles from './RestaurantList.module.css';
import mockData from '../../data/mockData.json';
import type { Restaurant } from '../../components/RestaurantItem/type';
import RestaurantItem from '../RestaurantItem';

interface mock {
	restaurantList: Restaurant[];
}

class RestaurantList extends React.Component {
	render() {
		const { restaurantList } = mockData as mock;
		return (
			<ul className={styles.restaurantList}>
				{restaurantList.map((restaurant) => {
					return <RestaurantItem key={restaurant.id} restaurant={restaurant} />;
				})}
			</ul>
		);
	}
}

export default RestaurantList;
