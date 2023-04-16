import { Body, Title } from '../styles/Text';
import type Restaurant from '../types/Restaurant';
import CategoryIcon from './CategoryIcon';
import BottomSheet from './common/BottomSheet';
import Button from './common/Button';
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
        <Title>{restaurant.name}</Title>
        <styled.BottomSheetBody>
          캠퍼스부터 {restaurant.distanceByMinutes}분 내
        </styled.BottomSheetBody>

        <Body>{restaurant.description}</Body>
        {restaurant.link !== null && (
          <a href={restaurant.link} target="_blank" rel="noreferrer">
            <Body>{restaurant.link}</Body>
          </a>
        )}

        <styled.BottomSheetButtonGroup>
          <Button variant="outlined">삭제하기</Button>
          <Button variant="primary" onClick={onClose} data-cy="close-button">
            닫기
          </Button>
        </styled.BottomSheetButtonGroup>
      </styled.RestaurantDetailBottomSheet>
    </BottomSheet>
  );
};

export default RestaurantDetailBottomSheet;
