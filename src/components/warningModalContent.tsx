import styled from "styled-components";

export const WarningModalContent = () => {
  return <Text>죄송합니다. 아직 지원하지 않는 기능입니다.</Text>;
};

const Text = styled.div`
  ${({ theme }) => theme.fonts.body}
  text-align: center;
`;
