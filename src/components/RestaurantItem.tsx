import React, { useState } from 'react';
import styled from 'styled-components';
import { CATEGORY_IMG } from '../constants';
import { RestaurantItemType } from '../types';
import BottomSheet from './common/BottomSheet';
import RestaurantDetail from './RestaurantDetail';
import { $ } from '../utils/domSelector';

const RestaurantItem = (props: RestaurantItemType) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  const closeBottomSheet = () => {
    try {
      $<HTMLElement>('#bottom_sheet').classList.add('closed_bottom_sheet');
      $<HTMLElement>('#backdrop').classList.add('closed_background');
    } catch (e) {
      console.log(e);
    }

    setTimeout(() => {
      setIsBottomSheetOpen(false);
    }, 400);
  };

  return (
    <>
      <RestaurantItemWrapper onClick={() => setIsBottomSheetOpen(true)}>
        <CategoryWrapper>
          <CategoryIcon src={CATEGORY_IMG[props.category]} alt={props.category} />
        </CategoryWrapper>
        <RestaurantInfo>
          <h3>{props.name}</h3>
          <span>캠퍼스부터 {props.distance}분 이내</span>
          <p>{props.description}</p>
        </RestaurantInfo>
      </RestaurantItemWrapper>
      {isBottomSheetOpen && (
        <BottomSheet onClose={() => closeBottomSheet()}>
          <RestaurantDetail {...props} onClose={() => closeBottomSheet()} />
        </BottomSheet>
      )}
    </>
  );
};

const RestaurantItemWrapper = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  & > h3 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    color: var(----grey-500);
  }

  & > span {
    font-size: 16px;
    line-height: 24px;
    color: var(--primary-color);
  }

  & > p {
    font-size: 16px;
    line-height: 24px;
    color: var(----grey-500);

    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    margin-top: 6px;
  }
`;

export default RestaurantItem;
