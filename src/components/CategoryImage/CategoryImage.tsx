import { Category } from '../../types/restaurant';

import React from 'react';
import * as styled from './CategoryImage.styles';

import { CATEGORY_IMAGE_MAP } from '../../constants';

interface Props {
  category: Category;
}

const CategoryImage = (props: Props) => {
  return (
    <styled.CategoryImageWrapper>
      <img src={`./img/${CATEGORY_IMAGE_MAP[props.category]}`} alt={props.category} />
    </styled.CategoryImageWrapper>
  );
};

export default CategoryImage;
