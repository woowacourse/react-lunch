import styled from "styled-components";
import { CATEGORIES, SELECT_OPTION, SORTS } from "../constant/select";
import { Select } from "./select";

interface SelectSectionProps {
  handleSelect: (name: string, value: string) => void;
}

export const SelectSection = ({ handleSelect }: SelectSectionProps) => {
  return (
    <Container>
      <Select
        type={SELECT_OPTION.CATEGORY}
        options={CATEGORIES}
        handleSelect={handleSelect}
      />
      <Select
        type={SELECT_OPTION.SORTING}
        options={SORTS}
        handleSelect={handleSelect}
      />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;
