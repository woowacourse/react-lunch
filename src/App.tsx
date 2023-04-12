import React from 'react';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import styles from './App.module.css';
import Store from './store';
import type { category } from './components/RestaurantItem/type';
import type { Restaurant } from './components/RestaurantItem/type';

import mockData from './data/mockData.json';

export type sort = '이름순' | '거리순';
export interface State {
	category: category;
	sort: sort;
	restaurantList: Restaurant[];
	setCategory: (category: category) => void;
	setSortState: (sort: sort) => void;
}

type AppProps = {};

class App extends React.Component<AppProps, State> {
	setCategory: (category: category) => void;
	setSortState: (sort: sort) => void;

	constructor(props: AppProps) {
		super(props);
		const { restaurantList } = mockData as { restaurantList: Restaurant[] };

		this.setCategory = (category: category) => {
			this.setState({ category });

			this.setState((prevState) => {
				const filteredList = category === '전체' ? restaurantList : restaurantList.filter((restaurant) => restaurant.category === category);
				if (prevState.sort === '거리순') {
					return { restaurantList: filteredList.sort((x, y) => Number(x.distance) - Number(y.distance)) };
				}

				return { restaurantList: filteredList.sort((x, y) => x.name.localeCompare(y.name)) };
			});
		};

		this.setSortState = (sort: sort) => {
			this.setState({ sort });
			this.setState((prevState) => ({
				restaurantList:
					sort === '거리순'
						? prevState.restaurantList.sort((x, y) => Number(x.distance) - Number(y.distance))
						: prevState.restaurantList.sort((x, y) => x.name.localeCompare(y.name)),
			}));
		};

		this.state = {
			category: '전체',
			sort: '이름순',
			restaurantList: restaurantList as Restaurant[],
			setCategory: this.setCategory,
			setSortState: this.setSortState,
		};
	}

	componentDidUpdate() {
		console.log(this.state);
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
