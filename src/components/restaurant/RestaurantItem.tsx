import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';
import { Restaurant, SetModalRestaurantId } from '../../@types/type';

type Props = { restaurant: Restaurant } & SetModalRestaurantId;

const RestaurantItem = ({ restaurant, setModalRestaurantId }: Props) => {
  const { category, name, distanceByMinutes, description } = restaurant;

  const onClickRestaurant = () => {
    setModalRestaurantId(restaurant.id);
  };

  return (
    <RestaurantItemLayout onClick={onClickRestaurant}>
      <CategoryIcon category={category} />
      <Information>
        <h3 className="text-subtitle">{name}</h3>
        <Distance className="text-body">캠퍼스부터 {distanceByMinutes}분 내</Distance>
        <Description className="text-body">{description}</Description>
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

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;

const Distance = styled.span`
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

export default RestaurantItem;
