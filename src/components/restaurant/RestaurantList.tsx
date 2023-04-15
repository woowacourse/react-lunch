import { useState } from 'react';
import styled from 'styled-components';
import SelectBox from '../common/SelectBox';
import RestaurantItem from './RestaurantItem';
import restaurant from '../../domain/restaurant';
import { CATEGORIES, DEFAULT_CATEGORY_OPTION, DEFAULT_SORT_OPTION, SORT_OPTIONS } from '../../constants';
import { Restaurant, SetModalRestaurantId } from '../../@types/type';

type Props = SetModalRestaurantId & {
  restaurantList: Restaurant[];
};

const RestaurantList = ({ restaurantList, setModalRestaurantId }: Props) => {
  const [filterOption, setFilterOption] = useState(DEFAULT_CATEGORY_OPTION);
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION);

  const filterAndSort = () => {
    return restaurant.sort(restaurant.filter(restaurantList, filterOption), sortOption);
  };

  return (
    <RestaurantListLayout>
      <SelectBoxContainer>
        <SelectBox options={Object.values(CATEGORIES)} setOption={setFilterOption} />
        <SelectBox options={Object.values(SORT_OPTIONS)} setOption={setSortOption} />
      </SelectBoxContainer>
      <Restaurants>
        {filterAndSort().map((restaurant, index) => (
          <RestaurantItem key={index} restaurant={restaurant} setModalRestaurantId={setModalRestaurantId} />
        ))}
      </Restaurants>
    </RestaurantListLayout>
  );
};

const RestaurantListLayout = styled.main`
  padding: 16px;
`;

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Restaurants = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

export default RestaurantList;
