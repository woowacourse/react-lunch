export const IMAGE_PATH = {
  전체: '',
  한식: `${process.env.PUBLIC_URL}/assets/category-korean.png`,
  양식: `${process.env.PUBLIC_URL}/assets/category-western.png`,
  중식: `${process.env.PUBLIC_URL}/assets/category-chinese.png`,
  일식: `${process.env.PUBLIC_URL}/assets/category-japanese.png`,
  아시안: `${process.env.PUBLIC_URL}/assets/category-asian.png`,
  기타: `${process.env.PUBLIC_URL}/assets/category-etc.png`,
};

export const CATEGORY = {
  total: '전체',
  korean: '한식',
  japanese: '일식',
  western: '양식',
  chinese: '중식',
  asian: '아시안',
  etc: '기타',
};

export const CRITERION = {
  name: '이름순',
  distance: '거리순',
};

export const LOCAL_STORAGE_KEY = 'restaurants';
