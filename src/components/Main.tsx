import RestaurantFilterContainer from "./RestaurantFilterContainer";
import RestaurantList from "./RestaurantList";
import useRestaurants from "../hooks/useRestaurants";

import styles from "./Main.module.css";

const Main = () => {
  const { restaurants, setOption } = useRestaurants();

  return (
    <main className={styles.container}>
      <RestaurantFilterContainer setOption={setOption} />
      <section>
        <RestaurantList restaurants={restaurants} />
      </section>
    </main>
  );
};

export default Main;
