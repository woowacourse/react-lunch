import { Restaurant } from '../../types/restaurants';
import BottomSheet from '../@common/BottomSheet';
import CategoryImg from '../CategoryImg';
import Styled from './styled';

interface RestaurantDetailBottomSheetProps {
  restaurant: Restaurant;
  close: VoidFunction;
}

export default function RestaurantDetailBottomSheet(
  props: RestaurantDetailBottomSheetProps
) {
  const { restaurant, close } = props;
  const { title, distance, detail, link, category } = restaurant;

  return (
    <BottomSheet onClose={close}>
      <Styled.BottomSheet>
        <CategoryImg category={category} />
        <Styled.Detail>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Distance>캠퍼스부터 {distance}분 이내</Styled.Distance>
          <Styled.Description>{detail}</Styled.Description>
          <Styled.Link href={link}>{link}</Styled.Link>
          <Styled.Button onClick={close}>닫기</Styled.Button>
        </Styled.Detail>
      </Styled.BottomSheet>
    </BottomSheet>
  );
}
