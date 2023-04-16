import { Category, Restaurant, Sort } from '../type';

export const filterRestaurantList = (restaurantList: Restaurant[], category: Category, sort: Sort) => {
	const filteredList =
		category === '전체' ? restaurantList : restaurantList.filter((restaurant) => restaurant.category === category);

	if (sort === '거리순') {
		return [...filteredList.sort((x, y) => Number(x.distance) - Number(y.distance))];
	}

	return [...filteredList.sort((x, y) => x.name.localeCompare(y.name))];
};

export const sortRestaurantList = (restaurantList: Restaurant[], sort: Sort) =>
	sort === '거리순'
		? restaurantList.sort((x, y) => Number(x.distance) - Number(y.distance))
		: restaurantList.sort((x, y) => x.name.localeCompare(y.name));
