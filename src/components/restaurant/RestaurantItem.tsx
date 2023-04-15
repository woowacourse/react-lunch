import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';
import { Restaurant, SetModalRestaurantId } from '../../@types/type';
import { BodyText, SubTitleText } from '../../style/typography';

type RestaurantItemProps = { restaurant: Restaurant } & SetModalRestaurantId;

const RestaurantItem = ({ restaurant, setModalRestaurantId }: RestaurantItemProps) => {
  const { category, name, distanceByMinutes, description } = restaurant;

  const onClickRestaurant = () => {
    setModalRestaurantId(restaurant.id);
  };

  return (
    <RestaurantItemLayout onClick={onClickRestaurant}>
      <CategoryIcon category={category} />
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
