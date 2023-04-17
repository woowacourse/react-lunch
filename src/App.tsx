import { useMemo, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Modal from './components/Modal';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import mockData from './data/mockData.json';
import Store from './store';
import type { Category, Restaurant } from './components/RestaurantItem/type';
import type { Dispatch, SetStateAction } from 'react';

export type Sort = '이름순' | '거리순';
export interface State {
  modalInfo: Restaurant;
  category: Category;
  sortOption: Sort;
  isModalOpen: boolean;
  setCategory: Dispatch<SetStateAction<Category>>;
  setSortOption: Dispatch<SetStateAction<Sort>>;
  setModalInfo: Dispatch<SetStateAction<Restaurant>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const mock = mockData.restaurantList as Restaurant[];

function App() {
  const [category, setCategory] = useState<Category>('전체');
  const [sortOption, setSortOption] = useState<Sort>('이름순');
  const [modalInfo, setModalInfo] = useState(mock[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const value = useMemo(
    () => ({
      modalInfo,
      isModalOpen,
      category,
      sortOption,
      setCategory,
      setSortOption,
      setModalInfo,
      setIsModalOpen,
    }),
    [category, sortOption, modalInfo, isModalOpen, setCategory, setSortOption, setModalInfo, setIsModalOpen]
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
