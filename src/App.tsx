import React from "react";
import "./App.css";
import Header from "./components/Header";
import RestaurantItem from "./components/RestaurantItem";
import Select from "./components/Select";
import Modal from "./components/Modal";
import { Restaurant } from "./types/Restaurant";

const dummy: Restaurant[] = [
  {
    category: "한식",
    storeName: "피양콩 할마니",
    distance: 10,
    detail: "string",
    link: "string",
    favorite: false,
  },
  {
    category: "중식",
    storeName: "친친",
    distance: 10,
    detail: "string",
    link: "string",
    favorite: false,
  },
  {
    category: "양식",
    storeName: "string3",
    distance: 10,
    detail: "string",
    link: "string",
    favorite: false,
  },
  {
    category: "아시안",
    storeName: "아시아",
    distance: 10,
    detail: "string",
    link: "string",
    favorite: false,
  },
];

class App extends React.Component<
  any,
  { restaurant: Restaurant[]; modalData: Restaurant; isModalOpen: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      restaurant: dummy,
      modalData: {
        category: "아시안",
        storeName: "아시아",
        distance: 10,
        detail: "string",
        link: "string",
        favorite: false,
      },
      isModalOpen: false,
    };
    // this.handleClickList = this.handleClickList.bind(this);
  }

  // handleClickList(event: MouseEvent) {
  //   const { isModalOpen } = this.state;

  //   this.setState({
  //     isModalOpen: !isModalOpen,
  //   });

  //   console.log(event.target);
  //   console.log(isModalOpen);
  // }

  render() {
    return (
      <>
        <Header />
        <Select />
        <ul>
          {dummy.map((restaurantData) => {
            return (
              <RestaurantItem
                key={restaurantData.storeName}
                // onClick={this.handleClickList}
                restaurant={restaurantData}
              />
            );
          })}
        </ul>
        {/* {this.state.isModalOpen && <Modal />} */}
      </>
    );
  }
}

export default App;
