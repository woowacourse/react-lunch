describe('점심 뭐 먹지 E2E 테스트', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'));

  it('헤더 타이틀이 보이는 지 테스트', () => {
    cy.get('header').should('contain', '점심 뭐 먹지');
  });

  it('로컬스토리지가 비어 있는 상태에서 접속 시 mock data로 대체', () => {
    window.localStorage.clear();
    cy.visit('localhost:3000');

    cy.get('ul').children().should('have.length', 22);
  });

  it('음식점 요약정보 클릭 시 세부정보 모달이 열림', () => {
    cy.get('li').contains('공백이없는긴문장을테스트하는음식점이름입니다').click();

    cy.get('button').contains('삭제하기').should('be.visible');
  });

  it('모달 닫기버튼으로 닫기 테스트', () => {
    cy.get('li').contains('공백이없는긴문장을테스트하는음식점이름입니다').click();

    cy.get('button').contains('닫기').click();

    cy.get('.app').should('not.contain', '삭제하기');
  });

  it('모달 ESC 키로 닫기 테스트', () => {
    cy.get('li').contains('공백이없는긴문장을테스트하는음식점이름입니다').click();

    cy.window().trigger('keydown', { key: 'Escape' });

    cy.get('.app').should('not.contain', '삭제하기');
  });

  it('모달 배경 눌러서 닫기 테스트', () => {
    cy.get('li').contains('공백이없는긴문장을테스트하는음식점이름입니다').click();

    cy.get('.app').click(0, 0);

    cy.get('.app').should('not.contain', '삭제하기');
  });

  it('음식점 스크롤을 내린 후 헤더의 제목을 누르면 맨 위로 이동', () => {
    cy.scrollTo(0, 2000);

    cy.get('header').contains('점심 뭐 먹지').click();

    cy.window().its('scrollY').should('equal', 0);
  });

  it('음식점 목록을 삭제하고 그 값이 삭제되었는 지 확인하는 테스트', () => {
    cy.get('li').contains('공백이없는긴문장을테스트하는음식점이름입니다').click();

    cy.get('button').contains('삭제하기').click();

    cy.get('li').should('not.contain', '공백이없는긴문장을테스트하는음식점이름입니다');
  });

  it('중식 카테고리를 골랐을 경우 중식 음식점만 있는 지 확인하는 테스트', () => {
    cy.get('select').contains('전체').parent().select('중식');

    cy.get('ul').children().should('have.length', 3);
  });

  it('이름순 중식 카테고리를 거리순으로 변경했을 때 올바르게 나오는 지 테스트', () => {
    cy.get('select').contains('전체').parent().select('중식');
    cy.get('select').contains('이름순').parent().select('거리순');

    cy.get('li').first().should('contain', '마담밍');
  });

  it('다른 카테고리에서 전체 카테고리로 변경 시 올바른지 테스트', () => {
    cy.get('select').contains('전체').parent().select('한식');
    cy.get('select').contains('한식').parent().select('전체');

    cy.get('ul').children().should('have.length', 22);
  });
});
