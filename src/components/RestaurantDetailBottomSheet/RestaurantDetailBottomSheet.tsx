import { BodyText, TitleText } from '../../styles/Text';
import type Restaurant from '../../types/Restaurant';
import CategoryIcon from '../CategoryIcon/CategoryIcon';
import BottomSheet from '../common/BottomSheet/BottomSheet';
import Button from '../common/Button/Button';
import * as styled from './RestaurantDetailBottomSheet.styles';

type RestaurantDetailBottomSheetProps = {
  restaurant: Restaurant;
  isOpened: boolean;
  onClose: () => void;
};

const RestaurantDetailBottomSheet = ({
  restaurant,
  isOpened,
  onClose,
}: RestaurantDetailBottomSheetProps) => {
  return (
    <BottomSheet isOpened={isOpened} onClose={onClose}>
      <styled.RestaurantDetailBottomSheet>
        <CategoryIcon category={restaurant.category} />
        <TitleText>{restaurant.name}</TitleText>
        <styled.BottomSheetBodyText>
          캠퍼스부터 {restaurant.distanceByMinutes}분 내
        </styled.BottomSheetBodyText>

        <BodyText>{restaurant.description}</BodyText>
        {restaurant.link !== null && (
          <a href={restaurant.link} target="_blank" rel="noreferrer">
            <BodyText>{restaurant.link}</BodyText>
          </a>
        )}

        <styled.BottomSheetActions>
          <Button variant="outlined">삭제하기</Button>
          <Button variant="primary" onClick={onClose} data-cy="close-button">
            닫기
          </Button>
        </styled.BottomSheetActions>
      </styled.RestaurantDetailBottomSheet>
    </BottomSheet>
  );
};

export default RestaurantDetailBottomSheet;
