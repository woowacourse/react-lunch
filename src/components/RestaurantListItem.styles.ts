import styled from 'styled-components';
import { Body, Subtitle } from '../styles/Text';

export const RestaurantListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
  row-gap: 8px;

  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.grey['100']};
  }

  & > :first-child {
    grid-row: span 2;
  }
`;

export const RestaurantListItemCategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  border-radius: 50%;
  background: ${(props) => props.theme.primaryLighten};

  & > img {
    width: 36px;
    height: 36px;
  }
`;

export const RestaurantListItemHeaderTitle = styled(Subtitle)``;

export const RestaurantListItemHeaderSubtitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.primary};
`;

export const RestaurantListItemBody = styled(Body)`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
