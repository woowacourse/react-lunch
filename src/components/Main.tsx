import { useState } from "react";

import RestaurantFilterContainer from "./RestaurantFilterContainer";
import RestaurantList from "./RestaurantList";
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from "../constants/options";

import styles from "./Main.module.css";

interface Options {
  category: string;
  sorting: string;
}

const Main = () => {
  const [options, setOptions] = useState<Options>({ category: CATEGORY_OPTIONS.TOTAL, sorting: SORTING_OPTIONS.NAME });

  const setOption = (key: string, option: string) => {
    setOptions((prev) => ({ ...prev, [key]: option }));
  };

  return (
    <main className={styles.container}>
      <RestaurantFilterContainer setOption={setOption} />
      <section>
        <RestaurantList options={options} />
      </section>
    </main>
  );
};

export default Main;
