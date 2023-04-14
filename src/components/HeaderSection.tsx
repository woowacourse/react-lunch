import { Component } from "react";
import styled from "styled-components";

class HeaderSection extends Component {
  render() {
    return (
      <Header>
        <Title className="text-title">점심 뭐 먹지</Title>
      </Header>
    );
  }
}

const Header = styled.header`
  height: 64px;
  padding: 19px 16px;
  background-color: var(--primary-color);
`;

const Title = styled.h1`
  color: #fcfcfd;
`;

export default HeaderSection;
