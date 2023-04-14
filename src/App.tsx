import React, { useEffect, useMemo, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Modal from './components/Modal';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import mockData from './data/mockData.json';
import Store from './store';
import getSortingFilteredList from './utils/getSortingFilteredList';
import type { Category, Restaurant } from './components/RestaurantItem/type';
import type { Dispatch, SetStateAction } from 'react';

export type Sort = '이름순' | '거리순';
export interface State {
	modalId: string;
	isModalOpen: boolean;
	restaurantList: Restaurant[];
	setCategory: Dispatch<SetStateAction<Category>>;
	setSortOption: Dispatch<SetStateAction<Sort>>;
	setModalId: Dispatch<SetStateAction<string>>;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const mock = mockData.restaurantList as Restaurant[];

function App() {
	const [category, setCategory] = useState<Category>('전체');
	const [sortOption, setSortOption] = useState<Sort>('이름순');
	const [modalId, setModalId] = useState('1');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [restaurantList, setRestaurantList] = useState<Restaurant[]>(mock);

	useEffect(() => {
		const resultList = getSortingFilteredList(category, sortOption, mock);

		setRestaurantList(resultList);
	}, [category, sortOption]);

	const value = useMemo(
		() => ({
			modalId,
			isModalOpen,
			restaurantList,
			setCategory,
			setSortOption,
			setModalId,
			setIsModalOpen,
		}),
		[category, sortOption, modalId, isModalOpen, restaurantList, setCategory, setSortOption, setModalId, setIsModalOpen]
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
