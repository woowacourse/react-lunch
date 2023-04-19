import { render, screen } from '@testing-library/react';
import RestaurantItem from '../components/RestaurantItem/RestaurantItem';
import RestaurantList from '../components/RestaurantList/RestaurantList';
import mockData from '../data/mockRestaurantData';

describe('음식점 리스트 렌더링 테스트', () => {
  const restaurant = {
    category: '중식',
    name: '찐친',
    distance: 5,
    description: '찐친들이랑 가는 중국집',
    link: '',
    id: 1,
  };

  test('음식점 아이템이 렌더링된다', () => {
    render(<RestaurantItem restaurant={restaurant} />);

    expect(screen.getByText('캠퍼스부터 5분 내')).toBeInTheDocument();
  });

  test('음식점 아이템은 카테고리 이미지, 음식점 이름, 거리, 정보 내용을 담고 있다', () => {
    render(<RestaurantItem restaurant={restaurant} />);

    expect(screen.getByAltText('중식')).toBeInTheDocument();
    expect(screen.getByText('찐친')).toBeInTheDocument();
    expect(screen.getByText('캠퍼스부터 5분 내')).toBeInTheDocument();
    expect(screen.getByText('찐친들이랑 가는 중국집')).toBeInTheDocument();
  });

  test('초기 데이터 8개의 음식이 목록에 있다', () => {
    const restaurantList = mockData.restaurantList;

    render(<RestaurantList restaurantList={restaurantList} />);

    restaurantList.forEach(restaurant => {
      expect(screen.getAllByAltText(restaurant.category)).toBeTruthy();
      expect(screen.getAllByText(`캠퍼스부터 ${restaurant.distance}분 내`)).toBeTruthy();
      expect(screen.getByText(restaurant.name)).toBeInTheDocument();
      expect(screen.getByText(restaurant.description)).toBeInTheDocument();
    });
  });
});
