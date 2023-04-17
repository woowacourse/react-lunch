import { useMemo } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import SelectorSection from './components/SelectorSection';
import useSelector from './components/SelectorSection/hooks/useSelector';
import { SelectorStore } from './store';
import type { Category } from './components/RestaurantItem/type';
import type { Selector } from './components/SelectorSection/hooks/useSelector';

export type Sort = '이름순' | '거리순';
export interface SelectorState {
  selector: Selector;
  setCategory: (category: Category) => void;
  setSortOption: (sortOption: Sort) => void;
}

function App() {
  const { selector, setCategory, setSortOption } = useSelector();

  const value = useMemo(
    () => ({
      selector,
      setCategory,
      setSortOption,
    }),
    [selector, setCategory, setSortOption]
  );

  return (
    <main className={styles.app}>
      <Header />
      <section className={styles.mainSection}>
        <SelectorStore.Provider value={value}>
          <SelectorSection />
          <RestaurantList />
        </SelectorStore.Provider>
      </section>
    </main>
  );
}

export default App;
