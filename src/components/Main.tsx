import { useState } from "react";

import RestaurantFilterContainer from "./RestaurantFilterContainer";
import RestaurantList from "./RestaurantList";
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from "../constants/options";

import styles from "./Main.module.css";

interface State {
  category: string;
  sorting: string;
}

const Main = () => {
  const [options, setOptions] = useState<State>({ category: CATEGORY_OPTIONS.TOTAL, sorting: SORTING_OPTIONS.NAME });

  const selectOptions = (key: string, option: string): void => {
    setOptions((prev) => ({ ...prev, [key]: option }));
  };

  return (
    <main className={styles.container}>
      <RestaurantFilterContainer selectOptions={selectOptions} />
      <section>
        <RestaurantList options={options} />
      </section>
    </main>
  );
};

export default Main;
