import mockData from '../data/mockRestaurantData.json';
import { filterAndSortRestaurantList } from '../domains/restaurantUtil';

describe('도메인 테스트', () => {
  const restaurantList = filterAndSortRestaurantList(mockData.restaurantList);

  test('전체 카테고리, 이름순 정렬된 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '한식',
        name: '덮밥이맛있는집',
        distance: 15,
        description: '영동칼국수집 옆에 있는 연어덮밥, 스테이크덮밥 등을 파는 덮밥 집',
        link: '',
        id: 5,
      },
      {
        category: '일식',
        name: '돈카레',
        distance: 10,
        description: '도밥이 좋아하는 돈카레',
        link: '',
        id: 6,
      },
      {
        category: '기타',
        name: '스타벅스 선릉역점',
        distance: 5,
        description: '면담하기 좋은 곳 스타벅스 시끌벅적함',
        link: '',
        id: 3,
      },
      {
        category: '한식',
        name: '시골밥상머리',
        distance: 10,
        description: '시골에서 주는 밥처럼 나오는 상머리',
        link: '',
        id: 8,
      },
      {
        category: '한식',
        name: '영동칼국수',
        distance: 15,
        description:
          '멀긴 한데 그래도 9,000원이라는 가격에 저렴하게 적게 먹을 수 있는 곳. 지갑 다이어트하기 좋은 곳',
        link: '',
        id: 4,
      },
      {
        category: '중식',
        name: '우육면가',
        distance: 10,
        description: '크론이 한 번도 안 먹어 본 우육면가',
        link: '',
        id: 7,
      },
      {
        category: '중식',
        name: '찐친',
        distance: 5,
        description: '찐친들이랑 가는 중국집',
        link: '',
        id: 1,
      },
      {
        category: '기타',
        name: '커피베네',
        distance: 5,
        description: '성담빌딩 건물에 있는 커피베네',
        link: '',
        id: 2,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList)).toEqual(expected);
  });

  test('전체 카테고리, 거리순 정렬된 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '기타',
        name: '스타벅스 선릉역점',
        distance: 5,
        description: '면담하기 좋은 곳 스타벅스 시끌벅적함',
        link: '',
        id: 3,
      },
      {
        category: '중식',
        name: '찐친',
        distance: 5,
        description: '찐친들이랑 가는 중국집',
        link: '',
        id: 1,
      },
      {
        category: '기타',
        name: '커피베네',
        distance: 5,
        description: '성담빌딩 건물에 있는 커피베네',
        link: '',
        id: 2,
      },
      {
        category: '일식',
        name: '돈카레',
        distance: 10,
        description: '도밥이 좋아하는 돈카레',
        link: '',
        id: 6,
      },
      {
        category: '한식',
        name: '시골밥상머리',
        distance: 10,
        description: '시골에서 주는 밥처럼 나오는 상머리',
        link: '',
        id: 8,
      },
      {
        category: '중식',
        name: '우육면가',
        distance: 10,
        description: '크론이 한 번도 안 먹어 본 우육면가',
        link: '',
        id: 7,
      },
      {
        category: '한식',
        name: '덮밥이맛있는집',
        distance: 15,
        description: '영동칼국수집 옆에 있는 연어덮밥, 스테이크덮밥 등을 파는 덮밥 집',
        link: '',
        id: 5,
      },
      {
        category: '한식',
        name: '영동칼국수',
        distance: 15,
        description:
          '멀긴 한데 그래도 9,000원이라는 가격에 저렴하게 적게 먹을 수 있는 곳. 지갑 다이어트하기 좋은 곳',
        link: '',
        id: 4,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList, '전체', '거리순')).toEqual(expected);
  });

  test('중식 카테고리, 거리순 정렬된 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '중식',
        name: '찐친',
        distance: 5,
        description: '찐친들이랑 가는 중국집',
        link: '',
        id: 1,
      },
      {
        category: '중식',
        name: '우육면가',
        distance: 10,
        description: '크론이 한 번도 안 먹어 본 우육면가',
        link: '',
        id: 7,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList, '중식', '거리순')).toEqual(expected);
  });

  test('중식 카테고리, 이름순 정렬된 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '중식',
        name: '우육면가',
        distance: 10,
        description: '크론이 한 번도 안 먹어 본 우육면가',
        link: '',
        id: 7,
      },
      {
        category: '중식',
        name: '찐친',
        distance: 5,
        description: '찐친들이랑 가는 중국집',
        link: '',
        id: 1,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList, '중식', '이름순')).toEqual(expected);
  });

  test('이름순 정렬 후 한식 카테고리인 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '한식',
        name: '덮밥이맛있는집',
        distance: 15,
        description: '영동칼국수집 옆에 있는 연어덮밥, 스테이크덮밥 등을 파는 덮밥 집',
        link: '',
        id: 5,
      },
      {
        category: '한식',
        name: '시골밥상머리',
        distance: 10,
        description: '시골에서 주는 밥처럼 나오는 상머리',
        link: '',
        id: 8,
      },
      {
        category: '한식',
        name: '영동칼국수',
        distance: 15,
        description:
          '멀긴 한데 그래도 9,000원이라는 가격에 저렴하게 적게 먹을 수 있는 곳. 지갑 다이어트하기 좋은 곳',
        link: '',
        id: 4,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList, '한식', '이름순')).toEqual(expected);
  });

  test('거리순 정렬 후 한식 카테고리인 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '한식',
        name: '시골밥상머리',
        distance: 10,
        description: '시골에서 주는 밥처럼 나오는 상머리',
        link: '',
        id: 8,
      },
      {
        category: '한식',
        name: '덮밥이맛있는집',
        distance: 15,
        description: '영동칼국수집 옆에 있는 연어덮밥, 스테이크덮밥 등을 파는 덮밥 집',
        link: '',
        id: 5,
      },
      {
        category: '한식',
        name: '영동칼국수',
        distance: 15,
        description:
          '멀긴 한데 그래도 9,000원이라는 가격에 저렴하게 적게 먹을 수 있는 곳. 지갑 다이어트하기 좋은 곳',
        link: '',
        id: 4,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList, '한식', '거리순')).toEqual(expected);
  });
});
