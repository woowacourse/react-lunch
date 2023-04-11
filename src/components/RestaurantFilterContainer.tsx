import { ChangeEvent, Component } from "react";
import SelectBox from "./SelectBox";
import mockData from "../assets/mockData.json";

import styles from "./RestaurantFilterContainer.module.css";
import { Restaurant } from "../types/restaurant";

interface Props {
  restaurants: Restaurant[];
  setRestaurants: (restaurants: Restaurant[]) => void;
}

interface State {
  category: string;
  sorting: string;
}

class RestaurantFilterContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { category: "전체", sorting: "이름순" };
  }

  onChangeCategorySelect(event: ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === "전체") {
      this.props.setRestaurants(mockData);
      return;
    }

    this.props.setRestaurants(mockData.filter((data) => data.category === event.target.value));
  }

  onChangeSortingSelect(event: ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === "이름순") {
      this.props.setRestaurants(
        [...this.props.restaurants].sort((first, second) => first.name.localeCompare(second.name))
      );
      return;
    }

    this.props.setRestaurants([...this.props.restaurants].sort((first, second) => first.distance - second.distance));
  }

  render() {
    return (
      <section className={styles.container}>
        <SelectBox
          name="category"
          options={["전체", "한식", "중식", "일식", "양식", "아시안", "기타"]}
          onChange={this.onChangeCategorySelect.bind(this)}
        />
        <SelectBox name="sorting" options={["이름순", "거리순"]} onChange={this.onChangeSortingSelect.bind(this)} />
      </section>
    );
  }
}

export default RestaurantFilterContainer;
