import { useEffect, useMemo, useState } from 'react';
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
  modalInfo: Restaurant;
  isModalOpen: boolean;
  restaurantList: Restaurant[];
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
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>(mock);

  useEffect(() => {
    const resultList = getSortingFilteredList(category, sortOption, mock);

    setRestaurantList(resultList);
  }, [category, sortOption]);

  const value = useMemo(
    () => ({
      modalInfo,
      isModalOpen,
      restaurantList,
      setCategory,
      setSortOption,
      setModalInfo,
      setIsModalOpen,
    }),
    [
      category,
      sortOption,
      modalInfo,
      isModalOpen,
      restaurantList,
      setCategory,
      setSortOption,
      setModalInfo,
      setIsModalOpen,
    ]
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
