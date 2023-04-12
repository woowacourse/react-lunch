import React from 'react';
import styled from 'styled-components';
import { CATEGORY_IMG } from '../constants';
import { RestaurantItemType } from '../types';
import Button from './Button';

class RestaurantDetail extends React.Component<RestaurantItemType & { onClose: () => void }> {
  constructor(props: RestaurantItemType & { onClose: () => void }) {
    super(props);
  }

  render() {
    return (
      <RestaurantDetailWrapper>
        <CategoryWrapper>
          <CategoryIcon src={CATEGORY_IMG[this.props.category]} alt={this.props.category} />
        </CategoryWrapper>
        <RestaurantInfo>
          <h3>{this.props.name}</h3>
          <span>캠퍼스부터 {this.props.distance}분 이내</span>
          <p>{this.props.description}</p>
          <a href={this.props.link}>{this.props.link}</a>
        </RestaurantInfo>
        <Button text="닫기" onClick={this.props.onClose} />
      </RestaurantDetailWrapper>
    );
  }
}

const RestaurantDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: var(--lighten-color);
`;

const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 16px 0 32px 0;

  & > h3 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    color: var(----grey-500);
    margin-bottom: 16px;
  }

  & > span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: var(--primary-color);
    margin-bottom: 16px;
  }

  & > p {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: var(----grey-500);
  }

  & > a {
    text-decoration-line: underline;
    color: var(----grey-500);
  }
`;

export default RestaurantDetail;
