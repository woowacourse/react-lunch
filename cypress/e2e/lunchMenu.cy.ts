import { CATEGORY, SORTING } from '../../src/constants';
import { db } from '../../src/db/restaurants';
import { filterBySort, originData } from '../../src/hooks/useRestaurants';

describe('캠퍼스 주변의 점심 식사 스팟 목록을 관리하는 앱(점심뭐먹지)을 E2E 테스트한다.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        win.localStorage.clear();
      },
    });
    cy.viewport('iphone-xr');
  });

  it('음식점 목록을 카테고리별로 필터링해서 확인할 수 있다.', () => {
    cy.get('select').first().select(CATEGORY.CHINESE);
    cy.get('ul').children().should('have.length', 3);

    cy.get('select').first().select(CATEGORY.KOREAN);
    cy.get('ul').children().should('have.length', 4);
  });

  it('음식점 목록을 이름순/거리순으로 정렬해서 확인할 수 있다.', () => {
    cy.get('select').last().select(SORTING.NAME);
    cy.get('ul').children().first().find('h3').should('have.text', '2222기타');
    cy.get('ul')
      .children()
      .last()
      .find('h3')
      .should('have.text', '피양콩할머니');

    cy.get('select').last().select(SORTING.DISTANCE);
    cy.get('ul')
      .children()
      .first()
      .find('span')
      .should('have.text', '캠퍼스로부터 5분 내');
    cy.get('ul')
      .children()
      .last()
      .find('span')
      .should('have.text', '캠퍼스로부터 30분 내');
  });

  it('모달 창을 열어 음식점 상세 정보를 확인할 수 있고, 모달 창을 닫을 수 있다.', () => {
    const firstItem = db.getOriginRestaurantData().pop();
    cy.get('ul').children().first().click();

    cy.get('img').last().should('have.attr', 'alt', firstItem?.category);
    cy.get('p').last().should('have.text', firstItem?.description);

    cy.get('button').last().should('have.text', '닫기').click();

    cy.get('button')
      .last()
      .get('img')
      .should('have.attr', 'alt', '음식점 추가');
  });

  it('새로고침해도 추가한 음식점 정보들이 유지되어야 한다.', () => {
    cy.reload();

    cy.get('ul')
      .children()
      .should('have.length', db.getOriginRestaurantData().length);
  });
});
