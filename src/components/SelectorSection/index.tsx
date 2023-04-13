import React from 'react';
import SortedSelector from './SortedSelector';
import CategorySelector from './CategorySelector';

import styles from './SelectorSection.module.css';

class SelectorSection extends React.PureComponent {
	render() {
		return (
			<section className={styles.section}>
				<CategorySelector />
				<SortedSelector />
			</section>
		);
	}
}

export default SelectorSection;
