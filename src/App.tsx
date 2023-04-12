import React from 'react';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import styles from './App.module.css';
import Store from './store';
import type { category } from './components/RestaurantItem/type';

export type sort = '이름순' | '거리순';
export interface State {
	category: category | '전체';
	sort: sort;
	setCategory: (category: category) => void;
	setSortState: (sort: sort) => void;
}

class App extends React.Component<any, State> {
	setCategory: (category: category) => void;
	setSortState: (sort: sort) => void;

	constructor(props: any) {
		super(props);

		this.setCategory = (category: category) => {
			this.setState({ category });
		};
		this.setSortState = (sort: sort) => {
			this.setState({ sort });
		};
		this.state = {
			category: '전체',
			sort: '이름순',
			setCategory: this.setCategory,
			setSortState: this.setSortState,
		};
	}

	render() {
		return (
			<main className='App'>
				<Header />
				<section className={styles.mainSection}>
					<Store.Provider value={this.state}>
						<SelectorSection />
						<RestaurantList />
					</Store.Provider>
				</section>
			</main>
		);
	}
}

export default App;
