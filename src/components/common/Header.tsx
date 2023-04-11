import { Component } from 'react';
import styled from 'styled-components';

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: #ec4a0a;
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: #fcfcfd;
`;

class Header extends Component {
  render() {
    return (
      <HeaderLayout>
        <Title>점심 뭐 먹지</Title>
      </HeaderLayout>
    );
  }
}

export default Header;
