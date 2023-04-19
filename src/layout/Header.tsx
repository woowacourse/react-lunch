import styled from 'styled-components';

const Style = {
  Wrapper: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;

    padding: 0 16px;

    background-color: var(--primary-color);
  `,
  Title: styled.h1`
    font: var(--lunch-title);
    color: var(--grey-100);

    cursor: pointer;
  `,
};

export function Header() {
  return (
    <Style.Wrapper>
      <Style.Title onClick={() => window.location.reload()}>
        점심 뭐 먹지
      </Style.Title>
    </Style.Wrapper>
  );
}
