import { ChangeEvent, Component } from "react";
import SelectBox from "./SelectBox";

import styles from "./RestaurantFilterContainer.module.css";

interface Props {
  setOption: (key: string, option: string) => void;
}

interface State {
  category: string;
  sorting: string;
}

class RestaurantFilterContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  onChangeCategorySelect(event: ChangeEvent<HTMLSelectElement>) {
    this.props.setOption("category", event.target.value);
  }

  onChangeSortingSelect(event: ChangeEvent<HTMLSelectElement>) {
    this.props.setOption("sorting", event.target.value);
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
