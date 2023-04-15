import styled from 'styled-components';

export const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 24px;
  padding: 0 16px;

  select {
    height: 44px;
    min-width: 125px;

    border: 1px solid #d0d5dd;
    border-radius: 8px;
    padding: 8px;

    background: transparent;
    font-size: 16px;
  }
`;

export const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 16px 0;
  padding: 0 16px;
`;
