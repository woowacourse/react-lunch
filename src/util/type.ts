export type Restaurant = {
  id: number;
  title: string;
  category: string;
  estimateTime: number;
  description: string;
  link?: string;
};

export type Category =
  | '전체'
  | '한식'
  | '중식'
  | '일식'
  | '양식'
  | '아시안'
  | '기타';

export type Sorting = 'name' | 'estimateTime';

export type SelectOption<T> = {
  value: T;
  textContent: string;
};

export type FilterOption = {
  category: Category;
  sorting: Sorting;
};

export type DrawerProps = {
  isOpenDrawer: boolean;
  children: React.ReactNode;
};

export type HeaderProps = {
  children: React.ReactNode;
};

export type SelectProps = {
  name: string;
  options: SelectOption<Category | Sorting>[];
  onChangeFilterOptions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type RestaurantDetailDrawerProps = {
  isOpenDrawer: boolean;
  restaurantId: number;
  onToggleDrawer: (id?: number) => void;
};

export type RestaurantProps = {
  restaurant: Omit<Restaurant, 'link'>;
  onToggleDrawer: (id?: number) => void;
};

export type RestaurantListProps = {
  filterOptions: FilterOption;
  onToggleDrawer: (id?: number) => void;
};

export type SelectContainerProps = Pick<SelectProps, 'onChangeFilterOptions'>;
