import React from "react";
import styled from "styled-components";

export default function WarningModalContent() {
  return (
    <div>
      <Text>죄송합니다. 아직 지원하지 않는 기능입니다.</Text>
    </div>
  );
}

const Text = styled.div`
  ${({ theme }) => theme.fonts.body}
  text-align: center;
`;
