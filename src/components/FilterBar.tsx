import styled from 'styled-components';

import {
  RESTAURANT_CATEGORY,
  SORTING_OPTION,
} from '../constants/filterOptions';

interface FilterBarProps {
  onChangeCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterBar = ({
  onChangeCategory,
  onChangeSort,
}: FilterBarProps) => {
  return (
    <FilterContainer>
      <FilterSelect
        onChange={onChangeCategory}
        name="category"
        id="category-filter"
        className="restaurant-filter"
      >
        {Object.values(RESTAURANT_CATEGORY).map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </FilterSelect>

      <FilterSelect
        onChange={onChangeSort}
        name="sorting"
        id="sorting-filter"
        className="restaurant-filter"
      >
        {Object.values(SORTING_OPTION).map((sortingName, index) => (
          <option value={sortingName} key={index}>
            {sortingName}
          </option>
        ))}
      </FilterSelect>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;

const FilterSelect = styled.select`
  height: 44px;
  min-width: 125px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
`;
