import { render, screen } from '@testing-library/react';
import RestaurantItem from '../components/RestaurantItem';

describe('음식점 리스트 렌더링 테스트', () => {
  test('음식점 아이템이 렌더링된다', () => {
    render(<RestaurantItem />);

    expect(screen.getByText('캠퍼스부터')).toBeInTheDocument();
  });

  // 카테고리 이미지, 음식점 이름, 거리, 정보 내용을 담고 있다
  // test('음식점 목록이 렌더링 된다.', () => {
  //   render(<App />);
  // });
  // 초기 데이터 10개의 음식이 목록에 있다
  // 처음 방문시 전체 카테고리, 이름순으로 정렬되어 있다
});
