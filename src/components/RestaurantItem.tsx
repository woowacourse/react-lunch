import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;

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

class RestaurantItem extends React.Component {
  render() {
    return (
      <StyledLi>
        <div className="restaurant__category">
          <img src="./category-etc.png" alt="기타" className="category-icon" />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">도스타코스 선릉점</h3>
          <span className="restaurant__distance text-body">
            캠퍼스부터 5분 내
          </span>
          <p className="restaurant__description text-body">
            멕시칸 캐주얼 그릴
          </p>
        </div>
      </StyledLi>
    );
  }
}

export default RestaurantItem;
