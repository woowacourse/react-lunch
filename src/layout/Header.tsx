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

export function Header() {
  return (
    <Style.Wrapper>
      <Style.Title>점심 뭐 먹지</Style.Title>
    </Style.Wrapper>
  );
}
