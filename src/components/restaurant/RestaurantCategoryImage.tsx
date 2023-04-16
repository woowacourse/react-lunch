import styled from 'styled-components';
import theme from '../../styles/theme';
import { imgSrc } from '../../constants';
import { Category } from '../../type';

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    margin-right: 16px;
    border-radius: 50%;
    background: ${theme.color.lighten};
  `,
};
export function RestaurantCategoryImage({ category }: { category: Category }) {
  const getImageSrc = (category: Category) => {
    return `${process.env.PUBLIC_URL}/images/category-${imgSrc[category]}.png`;
  };

  return (
    <Style.Wrapper>
      <img src={getImageSrc(category)} alt={category} />
    </Style.Wrapper>
  );
}
