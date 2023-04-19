import styled from 'styled-components';

import { textBody, textSubTitle } from '../../../style/globalStyle';

export const RestaurantItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid var(--divide-color);
  cursor: pointer;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;

export const RestaurantTitle = styled.h3`
  ${textSubTitle}
`;

export const RestaurantDistance = styled.span`
  color: var(--primary-color);
  ${textBody}
`;

export const RestaurantDescription = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${textBody}
`;
