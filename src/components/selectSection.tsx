import React from "react";
import styled from "styled-components";
import { CATEGORIES, SELECT_OPTION, SORTS } from "../constant/select";
import {
  CategoryUnion,
  SelectedValue,
  SelectNameType,
  SortingUnion,
} from "../types/select";
import Select from "./select";

interface SelectSectionPropsType {
  handleSelect: (select: SelectedValue) => void;
}

export default function SelectSection(props: SelectSectionPropsType) {
  const { handleSelect } = props;

  function selectOption(
    e: React.ChangeEvent<HTMLSelectElement>,
    name: SelectNameType
  ) {
    const value = e.target.value as SortingUnion | CategoryUnion;
    handleSelect({ type: name, value: value });
  }

  return (
    <Container>
      <Select
        name={SELECT_OPTION.CATEGORY}
        options={CATEGORIES}
        selectOption={selectOption}
      />
      <Select
        name={SELECT_OPTION.SORTING}
        options={SORTS}
        selectOption={selectOption}
      />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;
