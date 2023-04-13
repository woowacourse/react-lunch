import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { RestaurantItem } from './RestaurantItem';
import { Restaurant } from '../../type';

const Style = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;

    padding: 0 16px;
    margin: 16px 0;
  `,
};

interface RestaurantListProps {
  list: Restaurant[];
  clickRestaurantItem: React.MouseEventHandler<HTMLUListElement>;
}

export class RestaurantList extends Component<RestaurantListProps> {
  render(): ReactNode {
    return (
      <Style.Wrapper>
        <ul onClick={this.props.clickRestaurantItem}>
          {this.props.list.map((restaurant) => (
            <RestaurantItem key={restaurant.id} info={restaurant} />
          ))}
        </ul>
      </Style.Wrapper>
    );
  }
}
