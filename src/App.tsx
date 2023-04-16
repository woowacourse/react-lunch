import React from 'react';
import styles from './App.module.css';

import Header from './components/Header';
import Modal from './components/Modal';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import LunchProvider from './context/LunchProvider';

function App() {
	return (
		<LunchProvider>
			<main className={styles.app}>
				<Header />
				<section className={styles.mainSection}>
					<SelectorSection />
					<RestaurantList />
					<Modal />
				</section>
			</main>
		</LunchProvider>
	);
}

export default App;
