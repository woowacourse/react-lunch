import { Component } from "react";
import getCategoryImage from "../assets/images/category";

import styles from "./CategoryIcon.module.css";

interface Props {
  category: string;
}

class CategoryIcon extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { category } = this.props;

    return (
      <div className={styles.category}>
        <img src={getCategoryImage(category)} alt={category} className={styles.categoryIcon} />
      </div>
    );
  }
}

export default CategoryIcon;
