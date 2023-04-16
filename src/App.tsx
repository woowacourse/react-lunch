import React from 'react';
import styles from './App.module.css';

import Header from './components/Header';
import Modal from './components/Modal';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import LunchProvider from './context/LunchProvider';

function App() {
  return (
    <>
      <Header />
      <main className={styles.app}>
        <section className={styles.mainSection}>
          <LunchProvider>
            <SelectorSection />
            <RestaurantList />
            <Modal />
          </LunchProvider>
        </section>
      </main>
    </>
  );
}

export default React.memo(App);
