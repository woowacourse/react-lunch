const CATEGORIES = ['한식', '일식', '중식', '양식', '아시안', '기타'] as const;

export type Category = (typeof CATEGORIES)[number];

export default CATEGORIES;
