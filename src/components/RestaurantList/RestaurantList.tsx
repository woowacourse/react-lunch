import { Component } from 'react';
import styled from 'styled-components';
import { Restaurant } from '../../types';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';

type Props = {
  items: Restaurant[];
};

export class RestaurantList extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    return (
      <RestaurantListWrapper>
        {items.map((item) => (
          <RestaurantItem
            name={item.name}
            category={item.category}
            distance={item.distance}
            description={item.description}
          ></RestaurantItem>
        ))}
      </RestaurantListWrapper>
    );
  }
}

const RestaurantListWrapper = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
