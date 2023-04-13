import React, { Component, ReactNode } from 'react';
import { Restaurant } from '../../types/restaurants';
import CategoryImg from '../CategoryImg';
import St from './styled';

interface RestaurantDetailBottomSheetProps {
  restaurant: Restaurant;
}

class RestaurantDetailBottomSheet extends Component<RestaurantDetailBottomSheetProps> {
  render(): ReactNode {
    return (
      <>
        <St.Backdrop />
        <St.BottomSheet>
          <CategoryImg category="양식" />
          <St.Detail>
            <St.Title>name</St.Title>
            <St.Distance>캠퍼스부터 10분 이내</St.Distance>
            <St.Description>description</St.Description>
            <St.Link>lunk</St.Link>
            <St.Button></St.Button>
          </St.Detail>
        </St.BottomSheet>
      </>
    );
  }
}

export default RestaurantDetailBottomSheet;
