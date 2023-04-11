import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { RestaurantItem } from './RestaurantItem';
import { Restaurant } from '../type';

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
}

export class RestaurantList extends Component<RestaurantListProps> {
  render(): ReactNode {
    return (
      <Style.Wrapper>
        <ul>
          {this.props.list.map((restaurant, index) => (
            <RestaurantItem key={index} info={restaurant} />
          ))}
        </ul>
      </Style.Wrapper>
    );
  }
}
