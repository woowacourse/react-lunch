import styled from "styled-components";
import { CATEGORY, SORTING_SELECT } from "../constants";

interface Props {
  onChangeCategory: (event: string) => void;
  onChangeSorting: (event: string) => void;
  selectedCategory: string;
  selectedSorting: string;
}

const SelectBoxes = (props: Props) => {
  const categorySelect = Object.values(CATEGORY);
  const sortingSelect = Object.values(SORTING_SELECT);

  return (
    <SelectBoxContainer>
      <SelectBox
        name="category"
        onChange={({ target }) => props.onChangeCategory(target.value)}
        value={props.selectedCategory}
      >
        {categorySelect.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </SelectBox>

      <SelectBox
        name="sorting"
        onChange={({ target }) => props.onChangeSorting(target.value)}
        value={props.selectedSorting}
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
  flex: 0.2;
  height: 44px;
  padding: 10px 14px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  background: var(--grey-100);
`;

export default SelectBoxes;
