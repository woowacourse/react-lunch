import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { CATEGORY, SORTING_SELECT } from '../constants';

interface RestaurantSelectProps {
  onChangeCategory: (event: string) => void;
  onChangeSorting: (event: string) => void;
  selectedCategory: string;
  selectedSorting: string;
}

const RestaurantSelect = ({
  onChangeCategory,
  onChangeSorting,
  selectedCategory,
  selectedSorting,
}: RestaurantSelectProps) => {
  const categorySelect = Object.values(CATEGORY);
  const sortingSelect = Object.values(SORTING_SELECT);

  const handleCategorySelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    onChangeCategory(target.value);
  };

  const handleSortingSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    onChangeSorting(target.value);
  };

  return (
    <SelectBoxContainer>
      <SelectBox
        name='category'
        onChange={handleCategorySelect}
        value={selectedCategory}
      >
        {categorySelect.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </SelectBox>
      <SelectBox
        name='sorting'
        onChange={handleSortingSelect}
        value={selectedSorting}
      >
        {sortingSelect.map((sorting, index) => (
          <option key={index} value={sorting}>
            {sorting}
          </option>
        ))}
      </SelectBox>
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 16px 8px;
`;

const SelectBox = styled.select`
  width: 125px;
  height: 44px;
  padding: 10px 14px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: #ffffff;
`;

export default RestaurantSelect;
