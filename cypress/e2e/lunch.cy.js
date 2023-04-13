const TEST_URL = 'http://localhost:3000/';

describe('점심 뭐 먹지 e2e 테스트', () => {
  beforeEach(() => {
    cy.visit(TEST_URL);
  });

  it('헤더를 클릭하면 시작 페이지로 이동한다.', () => {
    cy.scrollTo('bottom');
    cy.get('.gnb__title').click();

    cy.window().its('scrollY').should('equal', 0);
  });

  it('로컬스토리지에 데이터가 없을 경우에도 음식점 목록을 볼 수 있다.', () => {
    cy.get('.restaurant').should('have.length', 10);
  });

  it('페이지에 처음 방문하면 전체 카테고리 이름순으로 정렬된 음식점 목록을 볼 수 있다. ', () => {
    cy.get('#category-filter').should('have.value', '전체');
    cy.get('#sortBy-filter').should('have.value', '이름순');

    cy.get('.restaurant').should('have.length', 10);
    cy.get('.restaurant').first().should('contain.text', '덮밥이맛있는집');
    cy.get('.restaurant').last().should('contain.text', '커피베네');
  });

  it('한식 카테고리를 클릭하면 한식 카테고리에 해당되는 음식점만 볼 수 있다.', () => {
    cy.get('#category-filter').select('한식');

    cy.get('#category-filter').should('have.value', '한식');
    cy.get('#sortBy-filter').should('have.value', '이름순');

    cy.get('.restaurant').should('have.length', 5);
    cy.get('.restaurant').first().should('contain.text', '덮밥이맛있는집');
    cy.get('.restaurant').last().should('contain.text', '정식당');
  });

  it('한식 카테고리 클릭 후 거리순으로 정렬하면 거리순으로 정렬된 음식점 목록을 볼 수 있다.', () => {
    cy.get('#category-filter').select('한식');
    cy.get('#sortBy-filter').select('거리순');

    cy.get('#category-filter').should('have.value', '한식');
    cy.get('#sortBy-filter').should('have.value', '거리순');

    cy.get('.restaurant').should('have.length', 5);
    cy.get('.restaurant').first().should('contain.text', '삼원가든');
    cy.get('.restaurant').last().should('contain.text', '정식당');
  });

  it('한식 카테고리 클릭 후 전체 카테고리를 클릭하면 음식점 전체 목록을 볼 수 있다.', () => {
    cy.get('#category-filter').select('한식');
    cy.get('#category-filter').select('전체');

    cy.get('#category-filter').should('have.value', '전체');
    cy.get('#sortBy-filter').should('have.value', '이름순');

    cy.get('.restaurant').should('have.length', 10);
    cy.get('.restaurant').first().should('contain.text', '덮밥이맛있는집');
    cy.get('.restaurant').last().should('contain.text', '커피베네');
  });

  it('음식점을 클릭하면 음식점 상세 정보 모달을 볼 수 있다.', () => {
    cy.get('.modal').should('not.exist');

    cy.get('.restaurant[data-id="7"]').click();

    cy.get('.modal').should('be.visible');
  });

  it('음식점 상세 정보 모달에서 웹사이트 방문하기를 누르면 음식점 웹사이트가 열린다.', () => {
    cy.get('.restaurant[data-id="7"]').click();
    cy.get('.restaurant__link').invoke('removeAttr', 'target').click({ force: true });

    cy.origin('http://www.dintaifung.co.kr', () => {
      cy.get('body').should('contain.text', '2013 DINTAIFUNG KOREA.co. LTD.');
    });
  });

  it('음식점 상세 정보 모달에서 닫기 버튼을 클릭하면 모달을 닫을 수 있다.', () => {
    cy.get('.restaurant[data-id="7"]').click();

    cy.get('.modal').should('be.visible');
    cy.get('.modal-close-button').click();

    cy.get('.modal').should('not.exist');
  });

  it('음식점 상세 정보 모달에서 백드롭을 클릭하면 모달을 닫을 수 있다.', () => {
    cy.get('.restaurant[data-id="7"]').click();

    cy.get('.modal').should('be.visible');
    cy.get('.modal-backdrop').click();

    cy.get('.modal').should('not.exist');
  });

  it('처음 페이지에 들어갔을 때, 로컬스토리지는 비어있다.', () => {
    cy.clearLocalStorage();
    cy.getAllLocalStorage().then((result) => expect(result).to.deep.equal({}));
  });

  it('웹사이트 처음 방문 후, 새로고침을 하면 로컬스토리지에 음식점 데이터가 저장된다.', () => {
    cy.clearLocalStorage();
    cy.getAllLocalStorage().then((result) => expect(result).to.deep.equal({}));

    cy.get('.gnb__title').click();

    cy.getAllLocalStorage().then((result) => {
      expect(result['http://localhost:3000']).to.have.keys('restaurantList');
    });
  });
});
