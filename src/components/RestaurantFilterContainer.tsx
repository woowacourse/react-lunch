import { ChangeEvent, Component } from "react";
import SelectBox from "./SelectBox";
import { CATEGORIES, SELECT_NAME, SORTING } from "../constants/options";

import styles from "./RestaurantFilterContainer.module.css";

interface Props {
  setOption: (key: string, option: string) => void;
}

class RestaurantFilterContainer extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onChangeCategorySelect(event: ChangeEvent<HTMLSelectElement>) {
    this.props.setOption(SELECT_NAME.CATEGORY, event.target.value);
  }

  onChangeSortingSelect(event: ChangeEvent<HTMLSelectElement>) {
    this.props.setOption(SELECT_NAME.SORTING, event.target.value);
  }

  render() {
    return (
      <section className={styles.container}>
        <SelectBox name={SELECT_NAME.CATEGORY} options={CATEGORIES} onChange={this.onChangeCategorySelect.bind(this)} />
        <SelectBox name={SELECT_NAME.SORTING} options={SORTING} onChange={this.onChangeSortingSelect.bind(this)} />
      </section>
    );
  }
}

export default RestaurantFilterContainer;
