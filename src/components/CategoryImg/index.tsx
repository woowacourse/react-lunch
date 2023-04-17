import Styled from './styled';
import categoryAsian from '../../assets/category-asian.png';
import categoryChinese from '../../assets/category-chinese.png';
import categoryJapanese from '../../assets/category-japanese.png';
import categoryKorean from '../../assets/category-korean.png';
import categoryWestern from '../../assets/category-western.png';
import categoryEtc from '../../assets/category-etc.png';
import { Category } from '../../types/restaurants';

interface CategoryImgProps {
  category: Category;
}

const CATEGORY_SRC: Record<Category, string> = {
  한식: categoryKorean,
  중식: categoryChinese,
  일식: categoryJapanese,
  양식: categoryWestern,
  아시안: categoryAsian,
  기타: categoryEtc,
};

export default function CategoryImg(props: CategoryImgProps) {
  const { category } = props;
  return (
    <Styled.Layout>
      <Styled.CategoryImg src={CATEGORY_SRC[category]} alt={category} />
    </Styled.Layout>
  );
}
