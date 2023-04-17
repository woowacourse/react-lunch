import styled from 'styled-components';
import RestaurantCategoryIcon from './RestaurantCategoryIcon';
import { Restaurant } from '../../@types/type';
import { BodyText, SubTitleText } from '../../style/typography';
import { useContext } from 'react';
import { RestaurantDetailModalContext } from './RestaurantFinder';

type RestaurantItemProps = { restaurant: Restaurant };

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const { setModalRestaurantInfo, setIsModalOpen } = useContext(RestaurantDetailModalContext);

  const { category, name, distanceByMinutes, description } = restaurant;

  const onClickRestaurant = () => {
    setIsModalOpen(true);
    setModalRestaurantInfo(restaurant);
  };

  return (
    <RestaurantItemLayout onClick={onClickRestaurant}>
      <RestaurantCategoryIcon category={category} />
      <Information>
        <Title>{name}</Title>
        <Distance>캠퍼스부터 {distanceByMinutes}분 내</Distance>
        <Description>{description}</Description>
      </Information>
    </RestaurantItemLayout>
  );
};

const RestaurantItemLayout = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid var(--divide-color);
  cursor: pointer;
`;

const Title = styled(SubTitleText)``;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;

const Distance = styled(BodyText)`
  color: var(--primary-color);
`;

const Description = styled(BodyText)`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default RestaurantItem;
