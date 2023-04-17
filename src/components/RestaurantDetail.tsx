import React from 'react';
import styled from 'styled-components';
import { CATEGORY_IMG } from '../constants';
import { RestaurantItemType } from '../types';
import Button from './common/Button';

const RestaurantDetail = (props: RestaurantItemType & { onClose: () => void }) => {
  return (
    <RestaurantDetailWrapper>
      <CategoryWrapper>
        <CategoryIcon src={CATEGORY_IMG[props.category]} alt={props.category} />
      </CategoryWrapper>
      <RestaurantInfo>
        <h3>{props.name}</h3>
        <span>캠퍼스부터 {props.distance}분 이내</span>
        <p>{props.description}</p>
        <a href={props.link}>{props.link}</a>
      </RestaurantInfo>
      <Button type="button" text="닫기" onClick={props.onClose} />
    </RestaurantDetailWrapper>
  );
};

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

    margin-bottom: 16px;
  }

  & > span {
    font-size: 16px;
    line-height: 24px;
    color: var(--primary-color);

    margin-bottom: 16px;
  }

  & > p {
    height: auto;
    max-height: 30vh;

    font-size: 16px;
    line-height: 24px;
    color: var(----grey-500);

    overflow-y: scroll;
    margin-bottom: 16px;
  }

  & > a {
    text-decoration-line: underline;
    color: var(----grey-500);
  }
`;

export default RestaurantDetail;
