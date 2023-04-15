import React, { useState } from 'react';

import type { FilterOption } from './util/type.js';
import MainHeader from './MainHeader.tsx';
import RestaurantList from './RestaurantList.tsx';
import SelectContainer from './SelectContainer.tsx';
import RestaurantDetailDrawer from './RestaurantDetailDrawer.tsx';
import {
  DEFAULT_CATEGORY,
  DEFAULT_SORTING,
  NO_SELECT_ID,
} from './util/constant.ts';

const App: React.FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [drawerSelectId, setDrawerSelectId] = useState<number>(NO_SELECT_ID);
  const [filterOptions, setFilterOptions] = useState<FilterOption>({
    category: DEFAULT_CATEGORY,
    sorting: DEFAULT_SORTING,
  });

  const onChangeFilterOptions = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFilterOptions({
      ...filterOptions,
      [e.target.name]: e.target.value,
    });
  };

  const onToggleDrawer = (id: number = NO_SELECT_ID): void => {
    setDrawerSelectId(id);
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <div className="App">
      <MainHeader />
      <SelectContainer onChangeFilterOptions={onChangeFilterOptions} />
      <RestaurantList
        filterOptions={filterOptions}
        onToggleDrawer={onToggleDrawer}
      />
      <RestaurantDetailDrawer
        isOpenDrawer={isOpenDrawer}
        onToggleDrawer={onToggleDrawer}
        restaurantId={drawerSelectId}
      />
    </div>
  );
};

export default App;
