import React from "react";
import styled from "styled-components";
import { RestaurantItemPropsType } from "../types/restaurant";

export class RestaurantItem extends React.Component<RestaurantItemPropsType> {
  render() {
    return (
      <ItemContainer>
        <ImgWrapper>
          <CategoryImg src="" alt={this.props.category} />
        </ImgWrapper>
        <ItemInfo>
          <Name>{this.props.name}</Name>
          <TakingTime>{this.props.takingTime}</TakingTime>
          <Description>{this.props.description}</Description>
        </ItemInfo>
      </ItemContainer>
    );
  }
}

const ItemContainer = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;
`;

const ImgWrapper = styled.div`
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

const CategoryImg = styled.img`
  width: 36px;
  height: 36px;
`;

const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Name = styled.h3`
  margin: 0;
  ${({ theme }) => theme.font.subtitle};
`;

const TakingTime = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.font.body};
`;

const Description = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${({ theme }) => theme.font.body};
`;
