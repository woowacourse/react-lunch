import Styled from './styled';
import CategoryImg from '../CategoryImg';
import { Restaurant } from '../../types/restaurants';

interface RestaurantItemProps {
  info: Restaurant;
  onClick(): void;
}

export default function RestaurantItem(props: RestaurantItemProps) {
  const {
    info: { title, detail, distance, category },
    onClick,
  } = props;

  return (
    <Styled.Layout
      onClick={onClick}
      data-cy-category={`${category}-restaurant`}
      data-cy-distance={distance}>
      <Styled.LeftSection>
        <CategoryImg category={category} />
      </Styled.LeftSection>
      <Styled.RightSection>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Distance>캠퍼스 부터 {distance}분</Styled.Distance>
        <Styled.Detail>{detail}</Styled.Detail>
      </Styled.RightSection>
    </Styled.Layout>
  );
}
