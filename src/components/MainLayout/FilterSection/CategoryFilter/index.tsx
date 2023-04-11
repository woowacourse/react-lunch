import { Component } from 'react';

import Select from '../../../common/Select';

const CATEGORIES = ['전체', '한식', '중식', '일식', '양식', '아시안', '기타'];

class CategoryFilter extends Component {
	render() {
		return <Select options={CATEGORIES} />;
	}
}

export default CategoryFilter;
