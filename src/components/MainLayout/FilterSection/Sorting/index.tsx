import { Component } from 'react';

import Select from '../../../common/Select';

const SORT_BY = ['이름순', '거리순'];

class Sorting extends Component {
	render() {
		return <Select options={SORT_BY} />;
	}
}

export default Sorting;
