import categoryImages from "../assets/images/category";
import type { Category } from "../constants/options";

import styles from "./CategoryIcon.module.css";

interface CategoryIconProps {
  category: Category;
}

const CategoryIcon = (props: CategoryIconProps) => {
  const { category } = props;

  return (
    <div className={styles.category}>
      <img src={categoryImages[category]} alt={category} className={styles.categoryIcon} />
    </div>
  );
};

export default CategoryIcon;
