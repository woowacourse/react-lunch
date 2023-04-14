import categoryAsian from '../assets/category-asian.png';
import categoryChinese from '../assets/category-chinese.png';
import categoryEtc from '../assets/category-etc.png';
import categoryJapanese from '../assets/category-japanese.png';
import categoryKorean from '../assets/category-korean.png';
import categoryWestern from '../assets/category-western.png';
import type { Category } from '../components/RestaurantItem/type';

const pickIconByCategory = (category: Category) => {
	switch (category) {
		case '한식':
			return categoryKorean;
		case '일식':
			return categoryJapanese;
		case '중식':
			return categoryChinese;
		case '아시안':
			return categoryAsian;
		case '양식':
			return categoryWestern;
		default:
			return categoryEtc;
	}
};

export default pickIconByCategory;
