import styled from 'styled-components';

export const RestaurantDetailBottomSheet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RestaurantDetailCategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  border-radius: 50%;
  background: var(--lighten-color);

  & > img {
    width: 36px;
    height: 36px;
  }
`;

export const BottomSheetBody = styled.div`
  color: var(--primary-color);
`;

export const BottomSheetButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 36px;

  & > * {
    flex: 1;
  }
`;
