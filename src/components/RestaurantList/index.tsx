import React from 'react';
import styles from './RestaurantList.module.css';
import RestaurantItem from '../RestaurantItem';
import Store from '../../store';

class RestaurantList extends React.PureComponent {
	render() {
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
}

export default RestaurantList;
