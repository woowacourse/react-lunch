describe("점심 뭐먹지 미션 e2e 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");

    cy.fixture("mockData.json").then((mockData) => {
      localStorage.setItem("menu", JSON.stringify(mockData.restaurants));
    });
  });

  it("리스트에서 음식점을 클릭할 경우 상세정보 모달을 오픈해야 한다.", () => {
    cy.get(".restaurant-list > :nth-child(1)").click();

    cy.get(".modal").should("have.class", "modal--open");
  });

  it("한식 카테고리로 필터링 하면 한식 음식점(농민백암순대, 순대국집, 쌀밥집, 피양콩할머니)만 표시되야 한다.", () => {
    cy.get("#category-filter").select("korean");

    cy.contains("농민백암순대").should("be.visible");
    cy.contains("순대국집").should("be.visible");
    cy.contains("쌀밥집").should("be.visible");
    cy.contains("피양콩할마니").should("be.visible");
  });

  it("한식 카테고리 설정 후, 거리순으로 정렬하면 sortedNames 배열의 값 순서대로 정렬이 되야 한다.", () => {
    cy.get("#category-filter").select("korean");
    cy.get("#sorting-filter").select("distance");

    const sortedNames = ["순대국집", "농민백암순대", "쌀밥집", "피양콩할마니"];

    cy.get(".restaurant").should("have.length", 4);
    cy.get(".restaurant-list > :nth-child(1)").contains(sortedNames[0]);
    cy.get(".restaurant-list > :nth-child(2)").contains(sortedNames[1]);
    cy.get(".restaurant-list > :nth-child(3)").contains(sortedNames[2]);
    cy.get(".restaurant-list > :nth-child(4)").contains(sortedNames[3]);
  });
});
