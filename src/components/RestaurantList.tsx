import React from "react";
import styled from "styled-components";

const StyledRestaurantList = styled.main`
  .restaurant-filter-container {
    display: flex;
    justify-content: space-between;

    padding: 0 16px;
    margin-top: 24px;
  }

  .restaurant-filter-container select {
    height: 44px;
    min-width: 125px;

    border: 1px solid #d0d5dd;
    border-radius: 8px;
    background: transparent;

    font-size: 16px;
  }

  .restaurant-filter {
    padding: 8px;
  }

  /* 음식점 목록 */
  .restaurant-list-container {
    display: flex;
    flex-direction: column;

    padding: 0 16px;
    margin: 16px 0;
  }

  .restaurant {
    display: flex;
    align-items: flex-start;

    padding: 16px 8px;

    border-bottom: 1px solid #e9eaed;
  }

  .restaurant__category {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;

    margin-right: 16px;

    border-radius: 50%;
    background: var(--lighten-color);
  }

  .category-icon {
    width: 36px;
    height: 36px;
  }

  .restaurant__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .restaurant__name {
    margin: 0;
  }

  .restaurant__distance {
    color: var(--primary-color);
  }

  .restaurant__description {
    display: -webkit-box;

    padding-top: 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

class RestaurantList extends React.Component {
  render() {
    return (
      <StyledRestaurantList>
        <section className="restaurant-filter-container">
          <select
            name="category"
            id="category-filter"
            className="restaurant-filter"
          >
            <option value="전체">전체</option>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="아시안">아시안</option>
            <option value="기타">기타</option>
          </select>

          <select
            name="sorting"
            id="sorting-filter"
            className="restaurant-filter"
          >
            <option value="name">이름순</option>
            <option value="distance">거리순</option>
          </select>
        </section>

        <section className="restaurant-list-container">
          <ul className="restaurant-list">
            <li className="restaurant">
              <div className="restaurant__category">
                <img
                  src="./category-korean.png"
                  alt="한식"
                  className="category-icon"
                />
              </div>
              <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">피양콩할마니</h3>
                <span className="restaurant__distance text-body">
                  캠퍼스부터 10분 내
                </span>
                <p className="restaurant__description text-body">
                  평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩
                  할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로,
                  ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는
                  이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지
                  않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표
                  메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골
                  또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은
                  손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.
                </p>
              </div>
            </li>

            <li className="restaurant">
              <div className="restaurant__category">
                <img
                  src="./category-chinese.png"
                  alt="중식"
                  className="category-icon"
                />
              </div>
              <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">친친</h3>
                <span className="restaurant__distance text-body">
                  캠퍼스부터 5분 내
                </span>
                <p className="restaurant__description text-body">
                  Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과
                  정성으로 정통 중식의 세계를 펼쳐갑니다
                </p>
              </div>
            </li>

            <li className="restaurant">
              <div className="restaurant__category">
                <img
                  src="./category-japanese.png"
                  alt="일식"
                  className="category-icon"
                />
              </div>
              <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">잇쇼우</h3>
                <span className="restaurant__distance text-body">
                  캠퍼스부터 10분 내
                </span>
                <p className="restaurant__description text-body">
                  잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은
                  정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는
                  잇쇼우는 고객 한분 한분께 최선을 다하겠습니다
                </p>
              </div>
            </li>

            <li className="restaurant">
              <div className="restaurant__category">
                <img
                  src="./category-western.png"
                  alt="양식"
                  className="category-icon"
                />
              </div>
              <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">이태리키친</h3>
                <span className="restaurant__distance text-body">
                  캠퍼스부터 20분 내
                </span>
                <p className="restaurant__description text-body">
                  늘 변화를 추구하는 이태리키친입니다.
                </p>
              </div>
            </li>

            <li className="restaurant">
              <div className="restaurant__category">
                <img
                  src="./category-asian.png"
                  alt="아시안"
                  className="category-icon"
                />
              </div>
              <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">
                  호아빈 삼성점
                </h3>
                <span className="restaurant__distance text-body">
                  캠퍼스부터 15분 내
                </span>
                <p className="restaurant__description text-body">
                  푸짐한 양에 국물이 일품인 쌀국수
                </p>
              </div>
            </li>

            <li className="restaurant">
              <div className="restaurant__category">
                <img
                  src="./category-etc.png"
                  alt="기타"
                  className="category-icon"
                />
              </div>
              <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">
                  도스타코스 선릉점
                </h3>
                <span className="restaurant__distance text-body">
                  캠퍼스부터 5분 내
                </span>
                <p className="restaurant__description text-body">
                  멕시칸 캐주얼 그릴
                </p>
              </div>
            </li>
          </ul>
        </section>
      </StyledRestaurantList>
    );
  }
}

export default RestaurantList;
