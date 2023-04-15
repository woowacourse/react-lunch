import React from 'react';

import * as S from './style';
import { Categories } from '../../../@types/type';
import restaurant from '../../../domain/restaurant';

type Props = {
  category: Categories;
};

const CategoryIcon = ({ category }: Props) => {
  return (
    <S.CategoryIconWrapper>
      <img src={restaurant.categoryIcon[category]} alt={category} />
    </S.CategoryIconWrapper>
  );
};

export default CategoryIcon;
