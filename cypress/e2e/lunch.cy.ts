const TEST_URL = 'http://localhost:3000/';

describe('점심 뭐먹지 e2e 테스트', () => {
  beforeEach(() => {
    cy.visit(TEST_URL);
    cy.viewport(390, 880);
  });

  it('카테고리 선택 박스를 클릭하고 "한식"을 선택하면, 한식을 카테고리로 한 음식점 리스트가 필터링 된다.', () => {
    cy.get("select[name='카테고리']").select('한식');
    cy.get('li').each((element: HTMLElement) => {
      cy.wrap(element).find('img').should('have.attr', 'alt', '한식');
    });
  });

  it('정렬 선택 박스를 클릭하고 "거리순"을 선택하면, 음식점이 거리순으로 정렬된다.', () => {
    cy.get("select[name='정렬']").select('거리순');

    cy.get('span')
      .then((res) => res.toArray().map((el: HTMLSpanElement) => Number(el.textContent?.match(/\d+/g)![0])))
      .then((res) => {
        cy.wrap(res).should(
          'have.ordered.members',
          res.sort((a: number, b: number) => a - b)
        );
      });
  });

  it('음식점을 클릭하면, 음식점 상세 바텀시트가 열린다.', () => {
    cy.get('li').first().click();

    cy.get('#bottom_sheet').should('be.visible');
  });

  it('음식점 상세모달의 닫기버튼을 클릭하면, 바텀시트가 닫힌다.', () => {
    cy.get('li').first().click();

    cy.get('button').click();

    cy.get('#bottom_sheet').should('not.be.visible');
  });

  it('음식점 상세모달 백드롭을 클릭하면, 바텀시트가 닫힌다.', () => {
    cy.get('li').first().click();

    cy.get('#backdrop').click();

    cy.get('#bottom_sheet').should('not.be.visible');
  });

  it('헤더의 "점심 뭐먹지"를 클릭하면, 선택 박스 옵션들이 "전체", "이름순"으로 초기화 된다.', () => {
    cy.get("select[name='카테고리']").select('한식');
    cy.get("select[name='정렬']").select('거리순');

    cy.get('#header_title').click();

    cy.get("select[name='카테고리']").should('be.visible', '전체');
    cy.get("select[name='정렬']").should('be.visible', '이름순');
  });
});
