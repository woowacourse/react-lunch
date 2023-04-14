import { CATEGORY, SORTING } from "../constants";
import { CategoryOption, SortOption } from '../types';

export function isCategoryOption(value: string): value is CategoryOption {
    return (Object.values(CATEGORY) as readonly string[]).includes(value);
}

export function isSortOption(value: string): value is SortOption {
    return (Object.values(SORTING) as readonly string[]).includes(value);
}