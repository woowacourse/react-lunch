import { Component } from 'react';
import styled from 'styled-components';

import { CATEGORIES } from '../restaurant/RestaurantList';

import asian from '../../asset/category-asian.png';
import chinese from '../../asset/category-chinese.png';
import korean from '../../asset/category-korean.png';
import japanese from '../../asset/category-japanese.png';
import western from '../../asset/category-western.png';
import etc from '../../asset/category-etc.png';

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

const categoryIcon: Record<(typeof CATEGORIES)[keyof typeof CATEGORIES], string> = {
  한식: korean,
  중식: chinese,
  일식: japanese,
  양식: western,
  아시안: asian,
  기타: etc,
};

type Props = {
  category: (typeof CATEGORIES)[keyof typeof CATEGORIES];
};

class CategoryIcon extends Component<Props> {
  render() {
    return (
      <CategoryIconLayout>
        <img src={categoryIcon[this.props.category]} alt={this.props.category} />
      </CategoryIconLayout>
    );
  }
}

export default CategoryIcon;
