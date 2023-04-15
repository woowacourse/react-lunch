import { Category } from '../../types/restaurant';

import React from 'react';
import * as styled from './CategoryImage.styles';

import { CATEGORY_IMAGE_MAP } from '../../constants';

interface Props {
  category: Category;
}

class CategoryImage extends React.Component<Props> {
  render() {
    return (
      <styled.CategoryImageWrapper>
        <img src={`./img/${CATEGORY_IMAGE_MAP[this.props.category]}`} alt={this.props.category} />
      </styled.CategoryImageWrapper>
    );
  }
}

export default CategoryImage;
