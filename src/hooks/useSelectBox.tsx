import { CATEGORY_OPTIONS, SORTING_OPTIONS } from "../constants/options";
import { isCategory } from "../assets/images/category";

interface Data {
  category: string;
  name: string;
  distance: number;
}

const useSelectBox = <T extends Data>(datas: T[]) => {
  const filterList = (category: string) => {
    if (category === CATEGORY_OPTIONS.TOTAL) {
      return datas;
    }

    if (category === CATEGORY_OPTIONS.ETC) {
      return datas.filter((data) => !isCategory(data.category));
    }

    return datas.filter((data) => data.category === category);
  };

  const sortList = (datas: T[], sorting: string) => {
    if (sorting === SORTING_OPTIONS.NAME) {
      return [...datas].sort((first, second) => first.name.localeCompare(second.name));
    }

    return [...datas].sort((first, second) => first.distance - second.distance);
  };

  return { filterList, sortList };
};

export default useSelectBox;
