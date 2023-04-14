import React, { useContext } from "react";
import styled from "styled-components";
import { RestaurantContext } from "../App";

const SelectBox = (props) => {
  const { name, options } = props;
  const { state, setState } = useContext(RestaurantContext);

  return (
    <Select name="" onChange={(value) => setState({ ...state, [name]: value })}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;

const Select = styled.select`
  height: 44px;
  min-width: 125px;
  padding-left: 8px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
`;
