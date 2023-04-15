import Select from '../../common/Select';

import { CATEGORIES } from '../../../domain/constants';

interface Props {
  onChangeCategory: (category: string) => void;
}

const CategoryFilter = ({ onChangeCategory }: Props) => {
  return (
    <Select name="category" onChange={onChangeCategory} options={CATEGORIES} />
  );
};

export default CategoryFilter;
