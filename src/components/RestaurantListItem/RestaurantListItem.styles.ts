import styled from 'styled-components';
import { BodyText, SubTitleText } from '../../styles/Text';

export const RestaurantListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
  row-gap: 8px;

  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  cursor: pointer;

  & > :first-child {
    grid-row: span 2;
  }
`;

export const RestaurantListItemHeaderTitleText = styled(SubTitleText)``;

export const RestaurantListItemHeaderSubTitleText = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: var(--primary-color);
`;

export const RestaurantListItemBodyText = styled(BodyText)`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
