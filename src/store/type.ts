export type Category = '전체' | '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';

export type Distance = '5' | '10' | '15' | '20' | '30';

export interface Restaurant {
	id: string;
	category: Category;
	name: string;
	distance: Distance;
	description: string;
	link?: string;
}

export type Sort = '이름순' | '거리순';

export interface State {
	category: Category;
	sort: Sort;
	restaurantList: Restaurant[];
	isModalOpen: boolean;
	modalId: string;
	setModalId: (id: string) => void;
	toggleModal: () => void;
	setCategory: (category: Category) => void;
	setSortState: (sort: Sort) => void;
}
