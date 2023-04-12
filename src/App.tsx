import React from 'react';
import Header from './components/Header';
import RestaurantItem from './components/RestaurantItem';
import SelectorSection from './components/SelectorSection';
import mockData from './data/mockData.json';
import type { Restaurant } from './components/RestaurantItem/type';

interface mock {
	restaurantList: Restaurant[];
}
class App extends React.Component {
	render() {
		const { restaurantList } = mockData as mock;

		return (
			<main className='App'>
				<Header />
				<SelectorSection />
				{restaurantList.map((restaurant) => {
					return <RestaurantItem key={restaurant.id} restaurant={restaurant} />;
				})}
			</main>
		);
	}
}

export default App;
