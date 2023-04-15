import getCategoryImage from "../assets/images/category";

import styles from "./CategoryIcon.module.css";

interface CategoryIconProps {
  category: string;
}

const CategoryIcon = (props: CategoryIconProps) => {
  const { category } = props;

  return (
    <div className={styles.category}>
      <img src={getCategoryImage(category)} alt={category} className={styles.categoryIcon} />
    </div>
  );
};

export default CategoryIcon;
