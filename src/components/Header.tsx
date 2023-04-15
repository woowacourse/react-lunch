import { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <HeaderSection>
        <Title>점심 뭐 먹지</Title>
      </HeaderSection>
    );
  }
}

const HeaderSection = styled.header`
  height: 64px;
  padding: 19px 16px;
  background-color: var(--primary-color);
`;

const Title = styled.h1`
  color: #fcfcfd;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

export default Header;
