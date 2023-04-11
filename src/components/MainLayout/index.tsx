import { Component } from 'react';

import './style.css';

import FilterSection from './FilterSection';
import RestaurantListSection from './RestaurantListSection';

class MainLayout extends Component {
	render() {
		return (
			<main>
				<FilterSection />
				<RestaurantListSection />
			</main>
		);
	}
}

export default MainLayout;
