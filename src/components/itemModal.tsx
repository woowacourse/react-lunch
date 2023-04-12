import React from "react";
import styled from "styled-components";
import { RestaurantItemPropsType } from "../types/restaurant";
import { convertImage } from "../utils/imageConverter";
import { ModalButton } from "./modalButton";

export class ItemModal extends React.Component<RestaurantItemPropsType> {
  render() {
    return (
      <>
        <BackDrop />
        <ModalContainer>
          <ModalIcon>
            <img
              src={convertImage(this.props.category)}
              alt={this.props.category}
            />
          </ModalIcon>
          <Information>
            <Name>{this.props.name}</Name>
            <TakingTime>캠퍼스부터 {this.props.takingTime}분 내</TakingTime>
            <Description>{this.props.description}</Description>

            <Link target="_blank" href={this.props.link}>
              {this.props.link}
            </Link>
          </Information>
          <ButtonContainer>
            <ModalButton text="삭제하기" />
            <ModalButton text="닫기" />
          </ButtonContainer>
        </ModalContainer>
      </>
    );
  }
}

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;
const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 70%;

  padding: 32px 16px 0;

  background-color: ${({ theme }) => theme.colors.grey100};
`;

const ModalIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lighten};
`;

const Information = styled.div`
  height: 70%;
`;

const Name = styled.h3`
  margin: 20px 0 16px 0;
  ${({ theme }) => theme.fonts.subtitle}
`;

const TakingTime = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin: 16px 0;
  ${({ theme }) => theme.fonts.body};
`;

const Description = styled.p`
  margin-bottom: 16px;

  overflow: scroll;
  ${({ theme }) => theme.fonts.body};
`;

const Link = styled.a`
  color: inherit;

  ${({ theme }) => theme.fonts.body}
  text-decoration: underline;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;
