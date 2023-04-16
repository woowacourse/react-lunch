export const CATEGORIES = ['한식', '일식', '중식', '양식', '아시안', '기타'] as const;

export type Category = (typeof CATEGORIES)[number];

export const DISTANCES_BY_MINUTES = [5, 10, 15, 20, 30] as const;

export type DistancesByMinutes = (typeof DISTANCES_BY_MINUTES)[number];
