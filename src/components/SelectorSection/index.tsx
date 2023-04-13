import React from 'react';
import CategorySelector from './CategorySelector';
import styles from './SelectorSection.module.css';
import SortedSelector from './SortedSelector';

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
