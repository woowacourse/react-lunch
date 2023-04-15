import styled from 'styled-components';
import { textBody, textSubtitle } from '../../style/mixin';

export const ItemWrapper = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;

  cursor: pointer;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RestaurantName = styled.h3`
  margin: 0;
  ${textSubtitle}
`;

export const Distance = styled.span`
  color: var(--primary-color);
  ${textBody}
`;

export const Description = styled.span`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${textBody}
`;
