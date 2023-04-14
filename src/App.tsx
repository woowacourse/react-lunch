import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Modal from './components/Modal';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import mockData from './data/mockData.json';
import Store from './store';
import type { Category, Restaurant } from './components/RestaurantItem/type';

export type Sort = '이름순' | '거리순';
export interface State {
	category: Category;
	sort: Sort;
	restaurantList: Restaurant[];
	isModalOpen: boolean;
	modalId: string;
	setModalId: (id: string) => void;
	toggleModal: () => void;
	setCategory: (category: Category) => void;
	setSortState: (sort: Sort) => void;
}

class App extends React.Component<object, State> {
	toggleModal: () => void;

	setModalId: (id: string) => void;

	setCategory: (category: Category) => void;

	setSortState: (sort: Sort) => void;

	constructor(props: object) {
		super(props);
		const { restaurantList } = mockData as { restaurantList: Restaurant[] };

		this.toggleModal = () => {
			this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
		};

		this.setModalId = (id: string) => {
			this.setState({ modalId: id });
		};

		this.setCategory = (category: Category) => {
			this.setState({ category });
			this.setState((prevState) => {
				const filteredList =
					category === '전체'
						? restaurantList
						: restaurantList.filter((restaurant) => restaurant.category === category);
				if (prevState.sort === '거리순') {
					return { restaurantList: filteredList.sort((x, y) => Number(x.distance) - Number(y.distance)) };
				}

				return { restaurantList: filteredList.sort((x, y) => x.name.localeCompare(y.name)) };
			});
		};

		this.setSortState = (sort: Sort) => {
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
			isModalOpen: false,
			modalId: '1',
			toggleModal: this.toggleModal,
			restaurantList: restaurantList as Restaurant[],
			setCategory: this.setCategory,
			setSortState: this.setSortState,
			setModalId: this.setModalId,
		};
	}

	render() {
		return (
			<main className={styles.app}>
				<Header />
				<section className={styles.mainSection}>
					<Store.Provider value={this.state}>
						<SelectorSection />
						<RestaurantList />
						<Modal />
					</Store.Provider>
				</section>
			</main>
		);
	}
}

export default App;
