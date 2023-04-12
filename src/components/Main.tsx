import { Component } from "react";

import RestaurantFilterContainer from "./RestaurantFilterContainer";
import RestaurantList from "./RestaurantList";
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from "../constants/options";

import styles from "./Main.module.css";

interface State {
  category: string;
  sorting: string;
}

class Main extends Component<{}, State> {
  state = { category: CATEGORY_OPTIONS.TOTAL, sorting: SORTING_OPTIONS.NAME };

  setOption(key: string, option: string): void {
    this.setState((prev) => ({ ...prev, [key]: option }));
  }

  render() {
    return (
      <main className={styles.container}>
        <RestaurantFilterContainer setOption={this.setOption.bind(this)} />
        <section>
          <RestaurantList options={this.state} />
        </section>
      </main>
    );
  }
}

export default Main;
