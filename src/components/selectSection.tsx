import React from "react";
import styled from "styled-components";
import { CATEGORIES, SELECT_OPTION, SORTS } from "../constant/select";
import { SelectedValue } from "../types/select";
import Select from "./select";

interface PropsType {
  handleSelect: (select: SelectedValue) => void;
}

export default function SelectSection(props: PropsType) {
  const { handleSelect } = props;

  return (
    <Container>
      <Select
        name={SELECT_OPTION.CATEGORY}
        options={CATEGORIES}
        handleSelect={handleSelect}
      />
      <Select
        name={SELECT_OPTION.SORTING}
        options={SORTS}
        handleSelect={handleSelect}
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
