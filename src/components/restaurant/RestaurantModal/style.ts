import styled from 'styled-components';

import { textBody, textTitle } from '../../../style/globalStyle';

export const ModalContentContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 80vh;
  overflow: auto;
  padding: 32px 16px;
  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

export const RestaurantTitle = styled.h2`
  padding: 16px 0;
  ${textTitle}
`;

export const RestaurantDistance = styled.span`
  color: var(--primary-color);
  ${textBody}
`;

export const RestaurantDescription = styled.p`
  margin: 16px 0;
  ${textBody}
`;

export const RestaurantReferenceURL = styled.a`
  color: var(--grey-500);
  word-break: break-all;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const ModalButton = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--grey-100);
`;
