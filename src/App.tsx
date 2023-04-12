import React from 'react';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import styles from './App.module.css';
class App extends React.Component {
	render() {
		return (
			<main className='App'>
				<Header />
				<section className={styles.mainSection}>
					<SelectorSection />
					<RestaurantList />
				</section>
			</main>
		);
	}
}

export default App;
