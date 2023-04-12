import React from "react";
import styled from "styled-components";
import { SelectedValue } from "../types/select";
import { Select } from "./select";

const CATEGORIES = ["전체", "일식", "양식", "한식", "아시안", "중식", "기타"];
const SORTS = ["이름순", "거리순"];

interface PropsType {
  handleSelect: (select: SelectedValue) => void;
}

export class SelectSection extends React.Component<PropsType> {
  render() {
    return (
      <Container>
        <Select
          name="category"
          options={CATEGORIES}
          handleSelect={this.props.handleSelect}
        />
        <Select
          name="sorting"
          options={SORTS}
          handleSelect={this.props.handleSelect}
        />
      </Container>
    );
  }
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;
