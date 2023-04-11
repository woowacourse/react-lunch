import React from "react";
import styled from "styled-components";
import { Select } from "./select";

const CATEGORIES = ["전체", "일식", "양식", "한식", "아시안", "중식", "기타"];
const SORTS = ["이름순", "거리순"];

export class SelectSection extends React.Component<any> {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <Container>
        <Select
          type="category"
          options={CATEGORIES}
          handleSelect={this.props.handleSelect}
        />
        <Select
          type="sorting"
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
