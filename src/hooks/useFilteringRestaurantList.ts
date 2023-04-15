import { useState } from 'react';

const useFilteringList = <T, U extends (arg: T) => T, K extends Record<keyof K, U>>(
  list: T,
  filteringFn: Record<keyof K, U>,
): [T, React.Dispatch<React.SetStateAction<Record<keyof K, U>>>] => {
  const [_filteringFn, setFilteringFn] = useState(filteringFn);

  const filteringPipe = () => {
    return (Object.values(_filteringFn) as U[]).reduce((_list, fn) => fn(_list), list);
  };

  return [filteringPipe(), setFilteringFn];
};

export default useFilteringList;
