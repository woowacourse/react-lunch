import { Component } from 'react';

export class Modal extends Component {
  render() {
    return (
      <div className="detail-modal">
        <div className="modal-backdrop"></div>
        <div className="modal-container">
          <div id="category_icon-container">
            <div className="restaurant__category">
              <img src="{src}" alt="{category}" className="category-icon" />
            </div>
            아이콘
          </div>
          <div className="restaurant__info">
            <h3 className="restaurant__name text-subtitle">음식점 이름</h3>
            <span className="restaurant__distance text-body">캠퍼스로부터 10분 내</span>
            <p className="text-body">음식점 설명</p>
            <a href="{link}" target="_blank">
              음식점 링크
            </a>
          </div>
          <div className="button-container">
            <button
              type="button"
              className="button button--secondary text-caption"
              id="remove-button"
            >
              삭제하기
            </button>
            <button className="button button--primary text-caption" id="close-button">
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
