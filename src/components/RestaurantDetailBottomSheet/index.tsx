import { Restaurant } from '../../types/restaurants';
import BottomSheet from '../@common/BottomSheet';
import CategoryImg from '../CategoryImg';
import St from './styled';

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
      <St.BottomSheet>
        <CategoryImg category={category} />
        <St.Detail>
          <St.Title>{title}</St.Title>
          <St.Distance>캠퍼스부터 {distance}분 이내</St.Distance>
          <St.Description>{detail}</St.Description>
          <St.Link href={link}>{link}</St.Link>
          <St.Button onClick={close}>닫기</St.Button>
        </St.Detail>
      </St.BottomSheet>
    </BottomSheet>
  );
}
