import { useState } from 'react';

const useFilteringList = <T, U extends (arg: T) => T, K extends Record<keyof K, U>>(
  list: T,
  filteringFn: Record<keyof K, U>,
): [T, (subject: keyof K, filteringFn: (arg: T) => T) => void] => {
  const [_filteringFn, setFilteringFn] = useState(filteringFn);

  const filteringPipe = () => {
    return (Object.values(_filteringFn) as U[]).reduce((_list, fn) => fn(_list), list);
  };

  const changeFilteringFn = (subject: keyof K, filteringFn: (arg: T) => T) => {
    setFilteringFn((prev) => {
      return {
        ...prev,
        [subject]: filteringFn,
      };
    });
  };

  return [filteringPipe(), changeFilteringFn];
};

export default useFilteringList;
