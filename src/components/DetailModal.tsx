import styled from 'styled-components';

import RestaurantManager from '../domain/RestaurantManager';

import { useEffect, useState } from 'react';
import { IMAGE_PATH } from '../constants/images';
import { RestaurantDetail } from '../types/RestaurantDetail';
import { ModalBottom } from './ModalBottom';

type DetailModalProps = {
  setShow: (isShow: boolean) => void;
  restaurantID: number;
};

const useRestaurantDetail = (restaurantID: number) => {
  const [restaurantDetail, setRestaurantDetail] = useState(
    {} as RestaurantDetail
  );
  useEffect(() => {
    const detail = RestaurantManager.getRestaurantByID(restaurantID);
    if (!detail) return;

    setRestaurantDetail(detail);
  }, [restaurantID]);

  return restaurantDetail;
};

export const DetailModal = ({ setShow, restaurantID }: DetailModalProps) => {
  const restaurantDetail = useRestaurantDetail(restaurantID);

  const { category, description, distance, name, link } = restaurantDetail;

  return (
    <ModalBottom
      closeModal={() => {
        setShow(false);
      }}
    >
      <Category className="restaurant__category">
        <Icon
          src={IMAGE_PATH[category]}
          alt={category}
          className="category-icon"
        />
      </Category>
      <Header className="modal-header">
        <h3 className="modal-title text-title">{name}</h3>
      </Header>
      <Item>
        <Distance className="text-body">캠퍼스부터 {distance}분 내</Distance>
      </Item>
      <Item>
        <p>{description}</p>
      </Item>
      {link && (
        <Item>
          <a href={link} target="_blank">
            {link}
          </a>
        </Item>
      )}
      <Button
        id="cancel-modal-button"
        className="text-caption"
        onClick={() => {
          setShow(false);
        }}
      >
        닫기
      </Button>
    </ModalBottom>
  );
};

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

  margin-bottom: 12px;
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

const Header = styled.div`
  margin-bottom: 12px;
`;

const Item = styled.div`
  margin-bottom: 24px;
`;

const Button = styled.div`
  width: 100%;
  height: 44px;

  background: var(--primary-color);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--grey-100);

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;
`;

const Distance = styled.p`
  color: var(--primary-color);
`;
