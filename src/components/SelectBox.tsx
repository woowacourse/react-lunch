import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { RestaurantContext } from '../containers/GlobalProvider';
import { Option } from '../types/Restaurant';

interface SelectBoxProps {
  name: Option;
  options: { label: string; value: string }[];
}

const SelectBox = (props: SelectBoxProps) => {
  const { name, options } = props;
  const { restaurants, setSortBy, setRestaurants, setCategorizeBy } =
    useContext(RestaurantContext);

  const updateRestaurants = useMemo(
    () => (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      if (name === 'sortBy') {
        setSortBy(value);
        setRestaurants(
          restaurants.slice().sort((a, b) => (a[value] > b[value] ? 1 : -1))
        );
      }

      if (name === 'categorizeBy') setCategorizeBy(value);
    },
    [name, restaurants, setSortBy, setRestaurants, setCategorizeBy]
  );

  return (
    <Select onChange={updateRestaurants}>
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
