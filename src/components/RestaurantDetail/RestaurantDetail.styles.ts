import styled from 'styled-components';
import { textBody, textSubtitle } from '../../style/mixin';

import Button from '../Button';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

export const Detail = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 508px;
`;

export const RestaurantName = styled.h2`
  ${textSubtitle}
  font-weight: 600;
  font-size: 20px;
`;

export const Distance = styled.p`
  ${textBody}
  color: #ec4a0a;
`;

export const Description = styled.p`
  height: 240px;

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

export const Link = styled.a`
  height: 24px;
  color: #000000;
`;

export const ButtonContainer = styled.div`
  display: flex;

  button + button {
    margin-left: 16px;
  }
`;

export const RemoveButton = styled(Button)`
  border: 1px solid var(--grey-300);

  background: transparent;
  color: var(--grey-300);
`;

export const CloseButton = styled(Button)``;
