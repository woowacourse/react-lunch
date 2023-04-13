beforeEach(() => {
  cy.visitByMobile();
});

it('카테고리 별 필터를 선택하여 카테고리 별 음식점 목록을 볼 수 있다.', () => {
  const categories = ['한식', '중식', '일식', '아시안', '양식', '기타'];

  categories.forEach((category) => {
    cy.get('#category-filter').select(category);

    cy.get('.restaurant__category img').each(($img) => {
      expect($img.attr('alt')).to.equal(category);
    });
  });
});

describe('정렬 필터 기능', () => {
  it('이름순 필터를 선택하여 이름순 음식점 목록을 볼 수 있다.', () => {
    const names = [];

    cy.get('#sorting-filter').select('이름순');
    cy.get('.restaurant .restaurant__name')
      .each(($name) => names.push($name.text()))
      .then(() => {
        const sortedNames = [...names].sort((name1, name2) => {
          return name1.localeCompare(name2);
        });

        expect(names).to.deep.equal(sortedNames);
      });
  });

  it('거리순 필터를 선택하여 거리순 음식점 목록을 볼 수 있다.', () => {
    const distances = [];

    cy.get('#sorting-filter').select('거리순');
    cy.get('.restaurant .restaurant__distance')
      .each(($distance) => distances.push($distance.text().match(/(?<=캠퍼스부터 ).*(?=분 내)/)[0]))
      .then(() => {
        const sortedDistances = [...distances].sort((distance1, distance2) => {
          return Number(distance1) - Number(distance2);
        });

        expect(distances).to.deep.equal(sortedDistances);
      });
  });
});
