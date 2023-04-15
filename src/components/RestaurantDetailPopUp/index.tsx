import React, { Component, ReactNode } from "react";
import { Restaurant } from "../../types/restaurants";
import CategoryImg from "../CategoryImg";
import St from "./styled";

interface RestaurantDetailPopUpProps {
  restaurant: Restaurant;
  close: VoidFunction;
}

class RestaurantDetailPopUp extends Component<RestaurantDetailPopUpProps> {
  escHandler(e: KeyboardEvent) {
    if (e.key === "Escape") this.props.close();
  }

  componentDidMount(): void {
    window.addEventListener("keyup", this.escHandler.bind(this));
  }

  componentWillUnmount(): void {
    window.removeEventListener("keyup", this.escHandler.bind(this));
  }

  render(): ReactNode {
    const {
      restaurant: { title, distance, detail, link, category },
      close,
    } = this.props;
    return (
      <>
        <St.Backdrop onClick={close} />
        <St.PopUp>
          <CategoryImg category={category} />
          <St.Detail>
            <St.Title>{title}</St.Title>
            <St.Distance>캠퍼스부터 {distance}분 이내</St.Distance>
            <St.Description>{detail}</St.Description>
            <St.Link href={link}>{link}</St.Link>
            <St.Button onClick={close}>닫기</St.Button>
          </St.Detail>
        </St.PopUp>
      </>
    );
  }
}

export default RestaurantDetailPopUp;
