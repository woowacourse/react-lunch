import styled from 'styled-components';

import { RestaurantDetail } from '../types/RestaurantDetail';
import { IMAGE_PATH } from '../constants/images';

interface RestaurantItemProps {
  itemDetail: RestaurantDetail;
  onClickItem: React.MouseEventHandler<HTMLLIElement>;
}

export const RestaurantItem = ({
  itemDetail,
  onClickItem,
}: RestaurantItemProps) => {
  const { id, category, name, distance, description } = itemDetail;

  return (
    <>
      <Restaurant id={String(id)} onClick={onClickItem}>
        <Category>
          <Icon src={IMAGE_PATH[category]} alt={category} />
        </Category>
        <Info>
          <Name className="text-subtitle">{name}</Name>
          <Distance className="text-body">캠퍼스부터 {distance}분 내</Distance>
          <Description className="text-body">{description}</Description>
        </Info>
      </Restaurant>
    </>
  );
};

const Restaurant = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;
`;

const Category = styled.div`
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

const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Name = styled.h3`
  margin: 0;
`;

const Distance = styled.p`
  color: var(--primary-color);
`;

const Description = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
