import Select from '../../common/Select';

const CATEGORIES = ['전체', '한식', '중식', '일식', '양식', '아시안', '기타'];

interface Props {
  onChangeCategory: (category: string) => void;
}

const CategoryFilter = ({ onChangeCategory }: Props) => {
  return (
    <Select name="category" onChange={onChangeCategory} options={CATEGORIES} />
  );
};

export default CategoryFilter;
