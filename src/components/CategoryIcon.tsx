import getCategoryImage from "../assets/images/category";
import { CategoryOptions } from "../constants/options";

import styles from "./CategoryIcon.module.css";

interface Props {
  category: CategoryOptions;
}

const CategoryIcon = (props: Props) => {
  const { category } = props;

  return (
    <div className={styles.category}>
      <img src={getCategoryImage(category)} alt={category} className={styles.categoryIcon} />
    </div>
  );
};

export default CategoryIcon;
