import { Component } from "react";
import styled from "styled-components";

class SelectBoxes extends Component {
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
        <SelectBox name="category" id="category-filter">
          {categorySelect.map((category) => (
            <option>{category}</option>
          ))}
        </SelectBox>

        <SelectBox name="sorting" id="sorting-filter">
          {sortingSelect.map((select) => (
            <option>{select}</option>
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
