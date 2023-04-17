import mockData from '../data/mockRestaurantData.json';
import { filterAndSortRestaurantList } from '../hooks/useRestaurantList';

describe('도메인 테스트', () => {
  const restaurantList = filterAndSortRestaurantList(mockData.restaurantList);

  test('전체 카테고리, 이름순 정렬된 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '한식',
        name: '덮밥이맛있는집',
        distance: 15,
        description: '영동칼국수집 옆에 있는 연어덮밥, 스테이크덮밥 등을 파는 덮밥 집',
        link: 'https://naver.me/5y0uoKnK',
        id: 5,
      },
      {
        category: '일식',
        name: '돈카레',
        distance: 10,
        description: '도밥이 좋아하는 돈카레',
        link: 'https://naver.me/GAiBzjNH',
        id: 6,
      },
      {
        category: '중식',
        name: '딘타이펑',
        distance: 10,
        description: '크론이 한 번도 안 먹어 본 딘타이펑',
        link: 'http://www.dintaifung.co.kr/',
        id: 7,
      },
      {
        category: '한식',
        name: '삼원가든',
        distance: 5,
        description:
          '일상 속 만남이 모여 잔치가 됩니다. 만남이 잔치가 되는 곳, 이곳은 삼원가든입니다.',
        link: '',
        id: 9,
      },
      {
        category: '기타',
        name: '스타벅스 선릉역점',
        distance: 5,
        description: '면담하기 좋은 곳 스타벅스 시끌벅적함',
        link: 'https://naver.me/GqBsXItY',
        id: 3,
      },
      {
        category: '한식',
        name: '시골밥상머리',
        distance: 10,
        description: '시골에서 주는 밥처럼 나오는 상머리',
        link: 'https://naver.me/5FeYop1u',
        id: 8,
      },
      {
        category: '한식',
        name: '영동칼국수',
        distance: 15,
        description:
          '멀긴 한데 그래도 9,000원이라는 가격에 저렴하게 적게 먹을 수 있는 곳. 지갑 다이어트하기 좋은 곳',
        link: 'https://naver.me/xv06UHYh',
        id: 4,
      },
      {
        category: '한식',
        name: '정식당',
        distance: 15,
        description:
          '모던 한식 파인 다이닝을 개척한 장본인이라 평가받는 임정식 셰프는 자신의 이름을 내건 정식당 서울과 정식당 뉴욕을 통해 새롭고 창의적인 한식을 세계에 알리고 있다. 김밥, 비빔밥, 구절판, 보쌈 등 대중들이 친근하게 여기는 다양한 한식 요리에서 영감을 얻어 재해석한 독창적인 메뉴는 한국인에게 익숙한 맛을 기발하게 풀어내는 방식으로 한식의 맛과 멋을 동시에 만족시킨다. 독특한 디저트와 훌륭한 구성의 와인 리스트, 그리고 배려심 깊은 서비스 등 즐거운 식사를 위한 요소들이 두루 갖춰진 곳이다.',
        link: '',
        id: 10,
      },
      {
        category: '중식',
        name: '찐친',
        distance: 5,
        description: '찐친들이랑 가는 중국집',
        link: 'https://naver.me/535UmYXk',
        id: 1,
      },
      {
        category: '기타',
        name: '커피베네',
        distance: 5,
        description: '성담빌딩 건물에 있는 커피베네',
        link: 'https://naver.me/F9QzUCnU',
        id: 2,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList)).toEqual(expected);
  });

  test('전체 카테고리, 거리순 정렬된 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '한식',
        name: '삼원가든',
        distance: 5,
        description:
          '일상 속 만남이 모여 잔치가 됩니다. 만남이 잔치가 되는 곳, 이곳은 삼원가든입니다.',
        link: '',
        id: 9,
      },
      {
        category: '기타',
        name: '스타벅스 선릉역점',
        distance: 5,
        description: '면담하기 좋은 곳 스타벅스 시끌벅적함',
        link: 'https://naver.me/GqBsXItY',
        id: 3,
      },
      {
        category: '중식',
        name: '찐친',
        distance: 5,
        description: '찐친들이랑 가는 중국집',
        link: 'https://naver.me/535UmYXk',
        id: 1,
      },
      {
        category: '기타',
        name: '커피베네',
        distance: 5,
        description: '성담빌딩 건물에 있는 커피베네',
        link: 'https://naver.me/F9QzUCnU',
        id: 2,
      },
      {
        category: '일식',
        name: '돈카레',
        distance: 10,
        description: '도밥이 좋아하는 돈카레',
        link: 'https://naver.me/GAiBzjNH',
        id: 6,
      },
      {
        category: '중식',
        name: '딘타이펑',
        distance: 10,
        description: '크론이 한 번도 안 먹어 본 딘타이펑',
        link: 'http://www.dintaifung.co.kr/',
        id: 7,
      },
      {
        category: '한식',
        name: '시골밥상머리',
        distance: 10,
        description: '시골에서 주는 밥처럼 나오는 상머리',
        link: 'https://naver.me/5FeYop1u',
        id: 8,
      },
      {
        category: '한식',
        name: '덮밥이맛있는집',
        distance: 15,
        description: '영동칼국수집 옆에 있는 연어덮밥, 스테이크덮밥 등을 파는 덮밥 집',
        link: 'https://naver.me/5y0uoKnK',
        id: 5,
      },
      {
        category: '한식',
        name: '영동칼국수',
        distance: 15,
        description:
          '멀긴 한데 그래도 9,000원이라는 가격에 저렴하게 적게 먹을 수 있는 곳. 지갑 다이어트하기 좋은 곳',
        link: 'https://naver.me/xv06UHYh',
        id: 4,
      },
      {
        category: '한식',
        name: '정식당',
        distance: 15,
        description:
          '모던 한식 파인 다이닝을 개척한 장본인이라 평가받는 임정식 셰프는 자신의 이름을 내건 정식당 서울과 정식당 뉴욕을 통해 새롭고 창의적인 한식을 세계에 알리고 있다. 김밥, 비빔밥, 구절판, 보쌈 등 대중들이 친근하게 여기는 다양한 한식 요리에서 영감을 얻어 재해석한 독창적인 메뉴는 한국인에게 익숙한 맛을 기발하게 풀어내는 방식으로 한식의 맛과 멋을 동시에 만족시킨다. 독특한 디저트와 훌륭한 구성의 와인 리스트, 그리고 배려심 깊은 서비스 등 즐거운 식사를 위한 요소들이 두루 갖춰진 곳이다.',
        link: '',
        id: 10,
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
        link: 'https://naver.me/535UmYXk',
        id: 1,
      },
      {
        category: '중식',
        name: '딘타이펑',
        distance: 10,
        description: '크론이 한 번도 안 먹어 본 딘타이펑',
        link: 'http://www.dintaifung.co.kr/',
        id: 7,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList, '중식', '거리순')).toEqual(expected);
  });

  test('중식 카테고리, 이름순 정렬된 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '중식',
        name: '딘타이펑',
        distance: 10,
        description: '크론이 한 번도 안 먹어 본 딘타이펑',
        link: 'http://www.dintaifung.co.kr/',
        id: 7,
      },
      {
        category: '중식',
        name: '찐친',
        distance: 5,
        description: '찐친들이랑 가는 중국집',
        link: 'https://naver.me/535UmYXk',
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
        link: 'https://naver.me/5y0uoKnK',
        id: 5,
      },
      {
        category: '한식',
        name: '삼원가든',
        distance: 5,
        description:
          '일상 속 만남이 모여 잔치가 됩니다. 만남이 잔치가 되는 곳, 이곳은 삼원가든입니다.',
        link: '',
        id: 9,
      },
      {
        category: '한식',
        name: '시골밥상머리',
        distance: 10,
        description: '시골에서 주는 밥처럼 나오는 상머리',
        link: 'https://naver.me/5FeYop1u',
        id: 8,
      },
      {
        category: '한식',
        name: '영동칼국수',
        distance: 15,
        description:
          '멀긴 한데 그래도 9,000원이라는 가격에 저렴하게 적게 먹을 수 있는 곳. 지갑 다이어트하기 좋은 곳',
        link: 'https://naver.me/xv06UHYh',
        id: 4,
      },
      {
        category: '한식',
        name: '정식당',
        distance: 15,
        description:
          '모던 한식 파인 다이닝을 개척한 장본인이라 평가받는 임정식 셰프는 자신의 이름을 내건 정식당 서울과 정식당 뉴욕을 통해 새롭고 창의적인 한식을 세계에 알리고 있다. 김밥, 비빔밥, 구절판, 보쌈 등 대중들이 친근하게 여기는 다양한 한식 요리에서 영감을 얻어 재해석한 독창적인 메뉴는 한국인에게 익숙한 맛을 기발하게 풀어내는 방식으로 한식의 맛과 멋을 동시에 만족시킨다. 독특한 디저트와 훌륭한 구성의 와인 리스트, 그리고 배려심 깊은 서비스 등 즐거운 식사를 위한 요소들이 두루 갖춰진 곳이다.',
        link: '',
        id: 10,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList, '한식', '이름순')).toEqual(expected);
  });

  test('거리순 정렬 후 한식 카테고리인 음식점 목록을 반환한다.', () => {
    const expected = [
      {
        category: '한식',
        name: '삼원가든',
        distance: 5,
        description:
          '일상 속 만남이 모여 잔치가 됩니다. 만남이 잔치가 되는 곳, 이곳은 삼원가든입니다.',
        link: '',
        id: 9,
      },
      {
        category: '한식',
        name: '시골밥상머리',
        distance: 10,
        description: '시골에서 주는 밥처럼 나오는 상머리',
        link: 'https://naver.me/5FeYop1u',
        id: 8,
      },
      {
        category: '한식',
        name: '덮밥이맛있는집',
        distance: 15,
        description: '영동칼국수집 옆에 있는 연어덮밥, 스테이크덮밥 등을 파는 덮밥 집',
        link: 'https://naver.me/5y0uoKnK',
        id: 5,
      },
      {
        category: '한식',
        name: '영동칼국수',
        distance: 15,
        description:
          '멀긴 한데 그래도 9,000원이라는 가격에 저렴하게 적게 먹을 수 있는 곳. 지갑 다이어트하기 좋은 곳',
        link: 'https://naver.me/xv06UHYh',
        id: 4,
      },
      {
        category: '한식',
        name: '정식당',
        distance: 15,
        description:
          '모던 한식 파인 다이닝을 개척한 장본인이라 평가받는 임정식 셰프는 자신의 이름을 내건 정식당 서울과 정식당 뉴욕을 통해 새롭고 창의적인 한식을 세계에 알리고 있다. 김밥, 비빔밥, 구절판, 보쌈 등 대중들이 친근하게 여기는 다양한 한식 요리에서 영감을 얻어 재해석한 독창적인 메뉴는 한국인에게 익숙한 맛을 기발하게 풀어내는 방식으로 한식의 맛과 멋을 동시에 만족시킨다. 독특한 디저트와 훌륭한 구성의 와인 리스트, 그리고 배려심 깊은 서비스 등 즐거운 식사를 위한 요소들이 두루 갖춰진 곳이다.',
        link: '',
        id: 10,
      },
    ];

    expect(filterAndSortRestaurantList(restaurantList, '한식', '거리순')).toEqual(expected);
  });
});
