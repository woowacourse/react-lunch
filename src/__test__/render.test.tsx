import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantList from '../components/RestaurantList';
import App from '../App';
test('전체 음식점 리스트를 렌더링 했는지 검사한다', () => {
  const restaurants = [
    '우육면가',
    '찐친',
    '춘리 마라탕',
    '용용선생',
    '마담밍',
    '명정루',
    '반포식스',
    '포메인',
    '딘타이펑',
    '커피베네',
    '스타벅스 선릉역점',
    '컴포즈커피 선릉역점',
    '더휴 런치 뷔페',
    '영동칼국수',
    '덮밥이맛있는집',
    '시골밥상머리',
    '김돈이',
    '정식당',
    '마초갈비',
    '스노우폭스 선릉역점',
    '은행골 선릉점',
    '돈카레',
    '헤키',
    '카와카츠',
    '정돈',
    '파스타에 반하다',
    '파스타 어때',
    '베어스타코 본점',
    '파스타입니다',
    '파스토보이',
    '라이브볼',
  ];
  render(<RestaurantList />);
  setTimeout(() => {
    restaurants.forEach((restaurant) => {
      const linkElement = screen.getByText(restaurant);
      expect(linkElement).toBeInTheDocument();
    });
  }, 1000);
});

test('이름순으로 정렬할 수 있다.', () => {
  const answers = [
    '김돈이',
    '더휴 런치 뷔페',
    '덮밥이맛있는집',
    '돈카레',
    '딘타이펑',
    '라이브볼',
    '마담밍',
    '마초갈비',
    '명정루',
    '반포식스',
    '베어스타코 본점',
    '스노우폭스 선릉역점',
    '스타벅스 선릉역점',
    '시골밥상머리',
    '영동칼국수',
    '용용선생',
    '우육면가',
    '은행골 선릉점',
    '정돈',
    '정식당',
    '찐친',
    '춘리 마라탕',
    '카와카츠',
    '커피베네',
    '컴포즈커피 선릉역점',
    '파스타 어때',
    '파스타에 반하다',
    '파스타입니다',
    '파스토보이',
    '포메인',
    '헤키',
  ];
  render(<App />);
  const selectElement = screen.getAllByRole('combobox');
  fireEvent.change(selectElement[1], { target: { value: 'name' } });
  setTimeout(() => {
    answers.forEach((restaurant) => {
      const linkElement = screen.getByText(restaurant);
      expect(linkElement).toBeInTheDocument();
    });
  }, 1000);
});

test('한식 카테고리로 필터링 할 수 있다.', () => {
  const answers = [
    '영동칼국수',
    '덮밥이맛있는집',
    '시골밥상머리',
    '김돈이',
    '정식당',
    '마초갈비',
  ];
  render(<App />);
  const selectElement = screen.getAllByRole('combobox');
  fireEvent.change(selectElement[0], { target: { value: 'korean' } });
  setTimeout(() => {
    answers.forEach((restaurant) => {
      const linkElement = screen.getByText(restaurant);
      expect(linkElement).toBeInTheDocument();
    });
  }, 1000);
});
