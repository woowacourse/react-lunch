import React from 'react';
import styled from 'styled-components';

import { textTitle } from '../style/mixin';

const Header = () => (
  <HeaderWrapper>
    <h1>점심 뭐 먹지</h1>
    <AddRestaurantButton>
      <img src="./img/add-button.png" alt="add-restaurant-button" />
    </AddRestaurantButton>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);

  h1 {
    ${textTitle}
    color: #fcfcfd;
  }
`;

const AddRestaurantButton = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;
