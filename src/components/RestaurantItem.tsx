import React from 'react';
import styled from 'styled-components';
import { CATEGORY_IMG } from '../constants';
import { RestaurantItemType } from '../types';
import BottomSheet from './BottomSheet';
import RestaurantDetail from './RestaurantDetail';

class RestaurantItem extends React.Component<RestaurantItemType, { isBottomSheetOpen: boolean }> {
  constructor(props: RestaurantItemType) {
    super(props);
    this.state = {
      isBottomSheetOpen: false,
    };
  }

  render() {
    return (
      <>
        <RestaurantItemWrapper onClick={() => this.setState({ isBottomSheetOpen: true })}>
          <CategoryWrapper>
            <CategoryIcon src={CATEGORY_IMG[this.props.category]} alt={this.props.category} />
          </CategoryWrapper>
          <RestaurantInfo>
            <h3>{this.props.name}</h3>
            <span>캠퍼스부터 {this.props.distance}분 이내</span>
            <p>{this.props.description}</p>
          </RestaurantInfo>
        </RestaurantItemWrapper>
        {this.state.isBottomSheetOpen && (
          <BottomSheet onClose={() => this.setState({ isBottomSheetOpen: false })}>
            <RestaurantDetail
              category={this.props.category}
              name={this.props.name}
              distance={this.props.distance}
              description={this.props.description}
              link={this.props.link}
              onClose={() => this.setState({ isBottomSheetOpen: false })}
            />
          </BottomSheet>
        )}
      </>
    );
  }
}

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
