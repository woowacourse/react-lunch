import { Category } from '../types/restaurant';

import React from 'react';
import styled from 'styled-components';

import { CATEGORY_IMAGE_MAP } from '../constants';

interface Props {
  category: Category;
}

class CategoryImage extends React.Component<Props> {
  render() {
    return (
      <CategoryImageWrapper>
        <img src={`./img/${CATEGORY_IMAGE_MAP[this.props.category]}`} alt={this.props.category} />
      </CategoryImageWrapper>
    );
  }
}

const CategoryImageWrapper = styled.div`
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

export default CategoryImage;
