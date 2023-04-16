import { useState } from 'react';
import { RestaurantList } from './RestaurantList';
import { FilterBar } from './FilterBar';
import { Category } from '../types/RestaurantDetail';
import {
  RESTAURANT_CATEGORY,
  SORTING_OPTION,
} from '../constants/filterOptions';
import { DialogModal } from './DialogModal';
import { IMAGE_PATH } from '../constants/images';

export const RestaurantListContainer = () => {
  const [category, setCategory] = useState<Category>(RESTAURANT_CATEGORY.all);
  const [sortOption, setSortOption] = useState(SORTING_OPTION.name);
  const [restaurantID, setRestaurantID] = useState(0);
  const [show, setShow] = useState(false);

  const handleCategory: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setCategory(event.target.value as Category);
  };

  const handleSort: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSortOption(event.target.value);
  };

  const handleClickItem: React.MouseEventHandler<HTMLLIElement> = (event) => {
    // TODO: event target 의 타입을 지정하는 방법
    const eventTarget = event.target;
    if ('key' in eventTarget) {
      setRestaurantID(Number(eventTarget.key));
    }
  };

  return (
    <>
      <FilterBar
        onChangeCategory={handleCategory}
        onChangeSort={handleSort}
      ></FilterBar>
      <RestaurantList
        category={category}
        sort={sortOption}
        onClickItem={handleClickItem}
      ></RestaurantList>
      <DialogModal isOpen={show}>
        {show && (
          <div className="modal-container">
            <div className="restaurant__category">
              <img
                src={IMAGE_PATH[category]}
                alt={'category'}
                className="category-icon"
              />
            </div>
            <div className="modal-header">
              <h3 className="modal-title text-title">{'name'}</h3>
            </div>
            <div className="modal-item">
              <span className="restaurant__distance text-body">
                캠퍼스부터 {'distance'}분 내
              </span>
            </div>
            <div className="modal-item">
              <p>{'description'}</p>
            </div>
            {'link' && (
              <div className="modal-item">
                <a href="${link}" target="_blank">
                  {'link'}
                </a>
              </div>
            )}
            <form method="dialog">
              <button
                id="cancel-modal-button"
                className="button button--primary text-caption"
              >
                닫기
              </button>
            </form>
          </div>
        )}
      </DialogModal>
    </>
  );
};
