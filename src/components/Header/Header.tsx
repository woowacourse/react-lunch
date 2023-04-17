import styled from 'styled-components';

export function Header () {
    return (
      <HeaderWrapper>
        <Title>점심 뭐 먹지</Title>
        <AddRestaurantButton type="button" aria-label="음식점 추가">
          <img src="/assets/add-button.png" alt="음식점 추가" />
        </AddRestaurantButton>
      </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);
  position: sticky;
  top: 0;
`;

const Title = styled.h1`
  color: #fcfcfd;
  font: var(--text-title);
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
