import { ChangeEvent, Component } from "react";
import styled from "styled-components";
import { RestaurantSelect } from "../types";
import { CATEGORY, SORTING_SELECT } from "../constants";

class SelectBoxes extends Component<RestaurantSelect> {
  handleCategorySelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    this.props.onChangeCategory(target.value);
  };

  handleSortingSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    this.props.onChangeSorting(target.value);
  };

  render() {
    const categorySelect = Object.values(CATEGORY);
    const sortingSelect = Object.values(SORTING_SELECT);

    return (
      <SelectBoxContainer>
        <SelectBox
          name="category"
          onChange={this.handleCategorySelect}
          value={this.props.selectedCategory}
        >
          {categorySelect.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </SelectBox>

        <SelectBox
          name="sorting"
          onChange={this.handleSortingSelect}
          value={this.props.selectedSorting}
        >
          {sortingSelect.map((sorting, index) => (
            <option key={index} value={sorting}>
              {sorting}
            </option>
          ))}
        </SelectBox>
      </SelectBoxContainer>
    );
  }
}

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

export default SelectBoxes;
