import styled from 'styled-components';

export const RestaurantDetailBottomSheet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BottomSheetBodyText = styled.span`
  color: var(--primary-color);
`;

export const BottomSheetActions = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 36px;

  & > * {
    flex: 1;
  }
`;
