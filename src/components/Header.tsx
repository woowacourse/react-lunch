import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderTitle>점심 뭐먹지</HeaderTitle>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: var(--grey-100);
`;

export default Header;
