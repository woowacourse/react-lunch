import { ChangeEvent, Component } from "react";
import styled from "styled-components";
import { RestaurantSelect } from "../types";

class SelectBoxes extends Component<RestaurantSelect> {
  handleCategorySelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    this.props.onChangeCategory(target.value);
  };

  handleSortingSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    this.props.onChangeSorting(target.value);
  };

  render() {
    const categorySelect = [
      "전체",
      "한식",
      "중식",
      "일식",
      "양식",
      "아시안",
      "기타",
    ];
    const sortingSelect = ["이름순", "거리순"];

    return (
      <SelectBoxContainer>
        <SelectBox
          name="category"
          id="category-filter"
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
          id="sorting-filter"
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

const SelectBoxContainer = styled.section`
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
