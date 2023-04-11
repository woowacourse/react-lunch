import { Component } from 'react';

import './style.css';

import FilterSection from './FilterSection';

class MainLayout extends Component {
	render() {
		return (
			<main>
				<FilterSection />
				{/* <RestaurantListSection /> */}
			</main>
		);
	}
}

export default MainLayout;
