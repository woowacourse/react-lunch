import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle id="header_title">점심 뭐먹지</HeaderTitle>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;

  width: 100%;

  display: flex;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background: var(--primary-color);
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: var(--grey-100);

  cursor: pointer;
  :active {
    transform: scale(1.02);
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default Header;
