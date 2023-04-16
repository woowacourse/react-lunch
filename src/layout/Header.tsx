import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const Style = {
  Wrapper: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 16px;
    background-color: ${theme.color.primary};
  `,
  Title: styled.h1`
    font: ${theme.font.title};
    color: ${theme.color.grey100};
    cursor: pointer;
  `,
};

export class Header extends Component {
  render(): ReactNode {
    return (
      <Style.Wrapper>
        <Style.Title onClick={() => window.location.reload()}>
          점심 뭐 먹지
        </Style.Title>
      </Style.Wrapper>
    );
  }
}
