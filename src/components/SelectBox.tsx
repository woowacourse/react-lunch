import React, { useContext } from "react";
import styled from "styled-components";
import { RestaurantContext } from "../App";
import { Option } from "../types/Restaurant";

interface SelectBoxProps {
  name: Option;
  options: { label: string; value: string }[];
}

const SelectBox = (props: SelectBoxProps) => {
  const { name, options } = props;
  const { state, setState } = useContext(RestaurantContext);

  const updateRestaurants = (value: string) => {
    if (name === "sortBy")
      setState({
        ...state,
        sortBy: value,
        restaurants: state.restaurants
          .slice()
          .sort((a, b) => (a[value] > b[value] ? 1 : -1)),
      });

    if (name === "categorizeBy")
      setState({
        ...state,
        categorizeBy: value,
      });
  };

  return (
    <Select name="" onChange={(event) => updateRestaurants(event.target.value)}>
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
