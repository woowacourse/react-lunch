import { Component } from "react";
import SelectBox from "./SelectBox";

import styles from "./RestaurantFilterContainer.module.css";

class RestaurantFilterContainer extends Component {
  onChangeCategorySelect() {}

  onChangeSortingSelect() {}

  render() {
    return (
      <section className={styles.container}>
        <SelectBox
          name="category"
          options={["전체", "한식", "중식", "일식", "양식", "아시안", "기타"]}
          onChange={this.onChangeCategorySelect}
        />
        <SelectBox name="sorting" options={["이름순", "거리순"]} onChange={this.onChangeSortingSelect} />
      </section>
    );
  }
}

export default RestaurantFilterContainer;
