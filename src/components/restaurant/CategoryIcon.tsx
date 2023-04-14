import { Component } from 'react';
import styled from 'styled-components';
import { Categories } from '../../@types/type';
import restaurant from '../../domain/restaurant';

const CategoryIconLayout = styled.div`
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
  img {
    width: 36px;
    height: 36px;
  }
`;

type Props = {
  category: Categories;
};

class CategoryIcon extends Component<Props> {
  render() {
    return (
      <CategoryIconLayout>
        <img src={restaurant.categoryIcon[this.props.category]} alt={this.props.category} />
      </CategoryIconLayout>
    );
  }
}

export default CategoryIcon;
