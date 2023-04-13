/// <reference types="cypress" />

describe('필터링 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('카테고리로 필터링이 가능하다', () => {
    cy.get('[data-cy=category-select').select('중식');
    cy.get('[data-cy-category=한식-restaurant').should('not.exist');
    cy.get('[data-cy-category=중식-restaurant').should('exist');
  });

  it('거리순으로 필터링이 가능하다', () => {
    cy.get('[data-cy=align-select').select('거리순');

    cy.get('[data-cy=restaurant-list]')
      .children()
      .first()
      .should('include.text', '나베나베');

    cy.get('[data-cy=restaurant-list]')
      .children()
      .last()
      .should('include.text', '작은동경');
  });

  it('이름순으로 필터링이 가능하다', () => {
    cy.get('[data-cy=align-select').select('이름순');

    cy.get('[data-cy=restaurant-list]')
      .children()
      .first()
      .should('include.text', '가리비집');

    cy.get('[data-cy=restaurant-list]')
      .children()
      .last()
      .should('include.text', '홍콩반점');
  });
});
