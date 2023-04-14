import React, { useMemo, useState } from 'react';
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
	setCategory12: (category: Category) => void;
	setSortState12: (sort: Sort) => void;
}

const mock = mockData.restaurantList as Restaurant[];

function App() {
	const [category, setCategory] = useState<Category>('전체');
	const [sort, setSort] = useState<Sort>('이름순');
	const [modalId, setModalId] = useState('1');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [restaurantList, setRestaurantList] = useState<Restaurant[]>(mock);

	const toggleModal = () => {
		setIsModalOpen((prevState) => !prevState);
	};

	const setCategory12 = (category1: Category) => {
		setCategory(category1);
		setRestaurantList(() => {
			const filteredList = category1 === '전체' ? mock : mock.filter((restaurant) => restaurant.category === category1);
			if (sort === '거리순') {
				return filteredList.sort((x, y) => Number(x.distance) - Number(y.distance));
			}

			return filteredList.sort((x, y) => x.name.localeCompare(y.name));
		});
	};

	const setSortState12 = (sort2: Sort) => {
		setSort(sort2);
		setRestaurantList((prevState) =>
			sort2 === '거리순'
				? prevState.sort((x, y) => Number(x.distance) - Number(y.distance))
				: prevState.sort((x, y) => x.name.localeCompare(y.name))
		);
	};

	const value = useMemo(
		() => ({
			category,
			sort,
			modalId,
			isModalOpen,
			restaurantList,
			toggleModal,
			setModalId,
			setCategory12,
			setSortState12,
		}),
		[category, sort, modalId, isModalOpen, restaurantList, toggleModal, setModalId, setCategory12, setSortState12]
	);

	return (
		<main className={styles.app}>
			<Header />
			<section className={styles.mainSection}>
				<Store.Provider value={value}>
					<SelectorSection />
					<RestaurantList />
					<Modal />
				</Store.Provider>
			</section>
		</main>
	);
}

export default App;
