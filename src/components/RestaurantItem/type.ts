export type category = '전체' | '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';

export type distance = '5' | '10' | '15' | '20' | '30';

export interface Restaurant {
	id: string;
	category: category;
	name: string;
	distance: distance;
	description: string;
	link?: string;
}
