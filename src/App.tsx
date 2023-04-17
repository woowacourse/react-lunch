import React, { useState, useCallback } from 'react';

import Header from './Header.tsx';
import RestaurantList from './RestaurantList.tsx';
import SelectContainer from './SelectContainer.tsx';
import RestaurantDetailDrawer from './RestaurantDetailDrawer.tsx';

import { DEFAULT_CATEGORY, DEFAULT_SORTING, NO_SELECT_ID } from './util/constant.ts';

const App = () => {
  const [filterOptions, setFilterOptions] = useState({
    category: DEFAULT_CATEGORY,
    sorting: DEFAULT_SORTING,
  });
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [drawerSelectId, setDrawerSelectId] = useState(NO_SELECT_ID);

  const onChangeFilterOptions = useCallback(
    (e) => {
      setFilterOptions((prevFilterOptions) => ({
        ...prevFilterOptions,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const onToggleDrawer = useCallback(
    (id = NO_SELECT_ID) => {
      setIsOpenDrawer((prevIsOpenDrawer) => !prevIsOpenDrawer);
      setDrawerSelectId(id);
    },
    []
  );

  return (
    <div className="App">
      <Header />
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
