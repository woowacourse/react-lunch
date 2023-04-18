import React from 'react';
import * as styled from './Header.styles';

const Header = () => {
  return (
    <styled.Header>
      <styled.Title>점심 뭐 먹지</styled.Title>
      <styled.AddRestaurantButton>
        <img src="./img/add-button.png" alt="add-restaurant-button" />
      </styled.AddRestaurantButton>
    </styled.Header>
  );
};

export default Header;
