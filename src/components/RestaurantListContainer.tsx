import { useState } from 'react';
import RestaurantList from './RestaurantList';
import FilterBar from './FilterBar';
import { Category } from '../types/RestaurantDetail';
import Modal from './Modal';

const RestaurantListContainer = () => {
  const [category, setCategory] = useState<Category>('전체');
  const [sort, setSort] = useState<string>('이름순');
  const [restaurantId, setRestaurantId] = useState<number>(0);

  const isCategory = (category: string): category is Category => {
    const categoris = [
      '전체',
      '한식',
      '중식',
      '일식',
      '양식',
      '아시안',
      '기타',
    ];

    if (categoris.includes(category)) return true;
    return false;
  };

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;

    if (!isCategory(category)) return;

    setCategory(category);
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;

    setSort(sort);
  };

  const handleOpenModal = (event: React.MouseEvent<HTMLUListElement>) => {
    const li = (event.target as HTMLElement).closest('li');

    if (!li) return;

    const restaurantId = Number(li.id);

    setRestaurantId(restaurantId);
  };

  return (
    <>
      <FilterBar
        onChangeCategory={handleCategory}
        onChangeSort={handleSort}
      ></FilterBar>
      <RestaurantList
        category={category}
        sort={sort}
        onOpenModal={handleOpenModal}
      ></RestaurantList>
      <Modal
        category={category}
        sort={sort}
        restaurantID={restaurantId}
      ></Modal>
    </>
  );
};

export default RestaurantListContainer;
