import { Restaurant } from '../src/types';

import {
  getFilteredRestaurantsByCategory,
  getSortedRestaurantsByDistance,
  getSortedRestaurantsByName,
  getSortedRestaurants,
  getRestaurantById,
} from '../src/RestaurantUtils';

describe('getFilteredRestaurantsByCategory', () => {
  test('선택된 카테고리와 일치하는 음식점의 배열을 반환한다.', () => {
    const dummyRestaurants: Restaurant[] = [
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
    ];

    const filterdRestaurants = getFilteredRestaurantsByCategory(dummyRestaurants, '한식');
    const expected: Restaurant[] = [
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
    ];

    expect(expected).toEqual(filterdRestaurants);
  });

  test(`선택된 카테고리가 '전체'라면 모든 음식점의 목록을 반환한다.`, () => {
    const dummyRestaurants: Restaurant[] = [
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
    ];

    const filterdRestaurants = getFilteredRestaurantsByCategory(dummyRestaurants, '전체');

    expect(filterdRestaurants).toEqual(dummyRestaurants);
  });
});

describe('getSortedRestaurantsByName', () => {
  test('음식점 리스트를 받아, 이름순으로 정렬된 리스트를 반환한다.', () => {
    const dummyRestaurants: Restaurant[] = [
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
    ];

    const sortedRestaurants = getSortedRestaurantsByName(dummyRestaurants);
    const expected: Restaurant[] = [
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
    ];

    expect(expected).toEqual(sortedRestaurants);
  });
});

describe('getSortedRestaurantsByDistance', () => {
  test('음식점 리스트를 받아, 거리순으로 정렬된 리스트를 반환한다.', () => {
    const dummyRestaurants: Restaurant[] = [
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
    ];

    const sortedRestaurants = getSortedRestaurantsByDistance(dummyRestaurants);
    const expected: Restaurant[] = [
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
    ];

    expect(expected).toEqual(sortedRestaurants);
  });
});

describe('getSortedRestaurants', () => {
  test('음식점 리스트와 거리순 정렬 옵션을 받으면, 거리순으로 정렬된 리스트를 반환한다.', () => {
    const dummyRestaurants: Restaurant[] = [
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
    ];

    const sortedRestaurants = getSortedRestaurants(dummyRestaurants, 'distance');
    const expected: Restaurant[] = [
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
    ];

    expect(expected).toEqual(sortedRestaurants);
  });

  test('음식점 리스트와 이름순 정렬 옵션을 받으면, 이름순으로 정렬된 리스트를 반환한다.', () => {
    const dummyRestaurants: Restaurant[] = [
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '30',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
    ];

    const sortedRestaurants = getSortedRestaurants(dummyRestaurants, 'name');
    const expected: Restaurant[] = [
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '30',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
    ];

    expect(expected).toEqual(sortedRestaurants);
  });
});

describe('getRestaurantById', () => {
  test('음식점 리스트와 ID를 받아, ID에 해당하는 음식점의 객체를 반환한다.', () => {
    const dummyRestaurants: Restaurant[] = [
      {
        id: 1,
        category: '한식',
        name: '맛이쪙 돈까스',
        distance: '10',
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점',
        link: 'www.naver.com',
      },
      {
        id: 2,
        category: '한식',
        name: '김치찌개 장인',
        distance: '5',
        description: '',
        link: 'https://dobab.co.kr/',
      },
      {
        id: 3,
        category: '일식',
        name: '돈카라',
        distance: '5',
        description: '',
        link: 'https://dobab1.co.kr/',
      },
    ];

    const targetRestaurant = getRestaurantById(dummyRestaurants, 2);
    const expected: Restaurant = {
      id: 2,
      category: '한식',
      name: '김치찌개 장인',
      distance: '5',
      description: '',
      link: 'https://dobab.co.kr/',
    };

    expect(expected).toEqual(targetRestaurant);
  });
});
