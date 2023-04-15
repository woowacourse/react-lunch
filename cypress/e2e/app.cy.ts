describe('점심 뭐 먹지 앱 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/react-lunch');
  });

  it('첫 페이지 접속 시 음식점 데이터 18개를 보여준다.', () => {
    cy.get('.restaurant-list').children().should('have.length', 18);
  });

  describe('카테고리별 필터링 기능', () => {
    context('한식 카테고리를 선택하면', () => {
      it('한식 카테고리의 음식점만 보여야 한다.', () => {
        cy.get('select[name="category"]').select('한식');

        cy.get('.restaurant-list').children().should('have.length', 3);
        cy.get('.restaurant').contains('피양콩할마니').should('exist');
        cy.get('.restaurant').contains('김돈이').should('exist');
        cy.get('.restaurant').contains('얌샘김밥').should('exist');
      });
    });
  });

  describe('카테고리별 필터링 및 정렬 기능', () => {
    context('거리순으로 정렬하고 한식을 선택히면', () => {
      it('한식 카테고리의 음식점이 거리순으로 정렬된다.', () => {
        cy.get('select[name="sorting"]').select('거리순');
        cy.get('select[name="category"]').select('한식');

        cy.get('.restaurant-list').children().should('have.length', 3);
        cy.get('.restaurant').eq(0).contains('얌샘김밥');
        cy.get('.restaurant').eq(1).contains('피양콩할마니');
        cy.get('.restaurant').eq(2).contains('김돈이');
      });
    });

    context('한식을 선택하고 거리순으로 정렬하면', () => {
      it('한식 카테고리의 음식점이 거리순으로 정렬된다.', () => {
        cy.get('select[name="category"]').select('한식');
        cy.get('select[name="sorting"]').select('거리순');

        cy.get('.restaurant-list').children().should('have.length', 3);
        cy.get('.restaurant').eq(0).contains('얌샘김밥');
        cy.get('.restaurant').eq(1).contains('피양콩할마니');
        cy.get('.restaurant').eq(2).contains('김돈이');
      });
    });
  });

  describe('음식점 상세 정보 모달 기능 테스트', () => {
    context('김돈이 음식점을 클릭하면', () => {
      it('김돈이 음식점 상세 정보가 담긴 모달이 열린다.', () => {
        cy.get('.restaurant').contains('김돈이').click();

        cy.get('.modal-title').contains('김돈이').should('exist');
      });

      it('닫기 버튼을 클릭하면 모달이 닫힌다.', () => {
        cy.get('.restaurant').contains('김돈이').click();
        cy.get('.button').contains('닫기').click();

        cy.get('.modal-container').should('not.exist');
      });

      it('뒷 영역을 클릭하면 모달이 닫힌다.', () => {
        cy.get('.restaurant').contains('김돈이').click();
        cy.get('.modal-backdrop').click();

        cy.get('.modal-container').should('not.exist');
      });

      it('ESC 키를 누르면 모달이 닫힌다', () => {
        cy.get('.restaurant').contains('김돈이').click();
        cy.get('body').type('{esc}');

        cy.get('.modal-container').should('not.exist');
      });
    });
  });
});
