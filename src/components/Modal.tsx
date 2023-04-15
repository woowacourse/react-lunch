import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { CATEGORY_ICONS } from "../constants/constants";
import type { Restaurant } from "../types/Restaurant";

type RestaurantItemProps = {
  restaurant: Restaurant;
  closeModal: () => void;
};

const Modal = (props: RestaurantItemProps) => {
  const closeModalByBackdrop = useCallback(() => {
    props.closeModal();
  }, [props]);

  const closeModalByESC = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") props.closeModal();
    },
    [props]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeModalByESC);
    return () => {
      document.removeEventListener("keydown", closeModalByESC);
    };
  }, [closeModalByESC]);

  return createPortal(
    <>
      <div className="modal-backdrop" onClick={closeModalByBackdrop}></div>
      <div className="modal-container">
        <div className="information-modal-favorite">
          <div className="restaurant__category">
            <img
              src={CATEGORY_ICONS[props.restaurant.category]}
              alt={props.restaurant.category}
              className="category-icon"
            />
          </div>
        </div>
        <div className="restaurant__name text-subtitle" id="storeName">
          {props.restaurant.storeName}
        </div>
        <div className="restaurant__distance text-body">
          캠퍼스부터 {props.restaurant.distance}분 내
        </div>
        <div className="restaurant__description text-body">
          {props.restaurant.detail}
        </div>
        <a href={props.restaurant.link} className="restaurant-link">
          {props.restaurant.link}
        </a>
        <div className="button-container">
          <button
            onClick={props.closeModal}
            className="button button--primary text-caption"
          >
            닫기
          </button>
        </div>
      </div>
    </>,
    document.body
  );
};

// class Modal extends React.Component<RestaurantItemProps> {
//   constructor(props: RestaurantItemProps) {
//     super(props);
//     this.closeModalByESC = this.closeModalByESC.bind(this);
//     this.closeModalByBackdrop = this.closeModalByBackdrop.bind(this);
//   }

//   closeModalByBackdrop() {
//     this.props.closeModal();
//   }

//   closeModalByESC(event: KeyboardEvent) {
//     if (event.key === "Escape") this.props.closeModal();
//   }

//   componentDidMount() {
//     document.addEventListener("keydown", this.closeModalByESC);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.closeModalByESC);
//   }

//   render() {
//     return createPortal(
//       <>
//         <div
//           className="modal-backdrop"
//           onClick={this.closeModalByBackdrop}
//         ></div>
//         <div className="modal-container">
//           <div className="information-modal-favorite">
//             <div className="restaurant__category">
//               <img
//                 src={CATEGORY_ICONS[this.props.restaurant.category]}
//                 alt={this.props.restaurant.category}
//                 className="category-icon"
//               />
//             </div>
//           </div>
//           <div className="restaurant__name text-subtitle" id="storeName">
//             {this.props.restaurant.storeName}
//           </div>
//           <div className="restaurant__distance text-body">
//             캠퍼스부터 {this.props.restaurant.distance}분 내
//           </div>
//           <div className="restaurant__description text-body">
//             {this.props.restaurant.detail}
//           </div>
//           <a href={this.props.restaurant.link} className="restaurant-link">
//             {this.props.restaurant.link}
//           </a>
//           <div className="button-container">
//             <button
//               onClick={this.props.closeModal}
//               className="button button--primary text-caption"
//             >
//               닫기
//             </button>
//           </div>
//         </div>
//       </>,
//       document.body
//     );
//   }
// }

export default Modal;
