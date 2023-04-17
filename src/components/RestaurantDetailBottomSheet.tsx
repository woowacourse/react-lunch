import { CATEGORY_ICONS } from '../constants/Restaurants';
import { Body, Title } from '../styles/Text';
import type Restaurant from '../types/Restaurant';
import BottomSheet from './common/BottomSheet';
import Button from './common/Button';
import Icon from './common/Icon';
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
        <styled.RestaurantDetailCategoryIcon title={restaurant.category}>
          <Icon mapper={CATEGORY_ICONS} name={restaurant.category} />
        </styled.RestaurantDetailCategoryIcon>

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
          <Button
            variant="primary"
            onClick={onClose}
            data-cy="restaurant-bottom-sheet-close-button"
          >
            닫기
          </Button>
        </styled.BottomSheetButtonGroup>
      </styled.RestaurantDetailBottomSheet>
    </BottomSheet>
  );
};

export default RestaurantDetailBottomSheet;
