/// <reference types="cypress" />

describe('E2E 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('처음에 레스토랑 목록에 레스토랑 18개가 잘 표시되어야 한다.', () => {
    cy.get('[data-cy="restaurant-list-item"]').should('be.visible').should('have.length', 18);
  });

  it('레스토랑 목록에서 "한식"으로 필터링 했을 때 "한식" 레스토랑만 나타나야 한다.', () => {
    cy.get('[data-cy="dropdown-filter"]').filter(':has(:contains("전체"))').select('한식');
    cy.get('[data-cy="restaurant-list-item"]').should('have.length', 3).find('img[alt="한식"]');
  });

  it('레스토랑 목록에서 "이름순"을 선택했을 때 이름순으로 정렬되어야 한다.', () => {
    cy.get('[data-cy="dropdown-filter"]').filter(':has(:contains("이름순"))').select('이름순');
    cy.get('[data-cy="restaurant-list-item"]').then(($items) => {
      const names = $items
        .toArray()
        .map(($item) => $item.querySelector('[data-cy="TitleText"]')!.textContent!.trim());
      expect(names).to.deep.equal(names.slice().sort((a, b) => a.localeCompare(b)));
    });
  });

  it('"쉐프의식탁" 레스토랑을 선택했을 때 Bottom Sheet 창이 나타나야 한다.', () => {
    cy.get('[data-cy="restaurant-list-item"]').contains('쉐프의식탁').click();

    cy.get('[data-cy="bottom-sheet"]').within(() => {
      cy.root().should('be.visible');
      cy.get('[data-cy="close-button"]').click();
      cy.root().should('not.exist');
    });
  });
});
