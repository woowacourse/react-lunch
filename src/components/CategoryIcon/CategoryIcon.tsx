import type { Category } from '../../constants/categories';
import * as styled from './CategoryIcon.styles';

import 기타 from '../../assets/categories/기타.png';
import 아시안 from '../../assets/categories/아시안.png';
import 양식 from '../../assets/categories/양식.png';
import 일식 from '../../assets/categories/일식.png';
import 중식 from '../../assets/categories/중식.png';
import 한식 from '../../assets/categories/한식.png';

const categoryToImageMapper: Record<Category, string> = {
  한식,
  중식,
  일식,
  양식,
  아시안,
  기타,
};

type CategoryIconProps = {
  category: Category;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  return (
    <styled.CategoryIcon>
      <img src={categoryToImageMapper[category]} alt={category} />
    </styled.CategoryIcon>
  );
};

export default CategoryIcon;
