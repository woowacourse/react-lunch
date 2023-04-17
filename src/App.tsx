import { useMemo, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Modal from './components/Modal';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import useSelector from './components/SelectorSection/hooks/useSelector';
import mockData from './data/mockData.json';
import Store from './store';
import type { Category, Restaurant } from './components/RestaurantItem/type';
import type { Selector } from './components/SelectorSection/hooks/useSelector';
import type { Dispatch, SetStateAction } from 'react';

export type Sort = '이름순' | '거리순';
export interface State {
  modalInfo: Restaurant;
  selector: Selector;
  isModalOpen: boolean;
  setCategory: (category: Category) => void;
  setSortOption: (sortOption: Sort) => void;
  setModalInfo: Dispatch<SetStateAction<Restaurant>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const mock = mockData.restaurantList as Restaurant[];

function App() {
  const { selector, setCategory, setSortOption } = useSelector();
  const [modalInfo, setModalInfo] = useState(mock[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const value = useMemo(
    () => ({
      modalInfo,
      isModalOpen,
      selector,
      setCategory,
      setSortOption,
      setModalInfo,
      setIsModalOpen,
    }),
    [selector, modalInfo, isModalOpen, setCategory, setSortOption, setModalInfo, setIsModalOpen]
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
