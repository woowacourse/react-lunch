import { TOGGLE_MODAL, CHANGE_CATEGORY, CHANGE_SORT_STATE, CHANGE_MODAL_ID } from './action';

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

export type Action =
	| { type: typeof TOGGLE_MODAL }
	| { type: typeof CHANGE_CATEGORY; payload: { category: Category } }
	| { type: typeof CHANGE_SORT_STATE; payload: { sort: Sort } }
	| { type: typeof CHANGE_MODAL_ID; payload: { modalId: string } };

export interface State {
	category: Category;
	sort: Sort;
	restaurantList: Restaurant[];
	isModalOpen: boolean;
	modalId: string;
}
