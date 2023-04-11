import { Component } from 'react';
import './style.css';

import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';

class FilterSection extends Component {
	render() {
		return (
			<section className="filter-section">
				<CategoryFilter />
				<Sorting />
			</section>
		);
	}
}

export default FilterSection;
