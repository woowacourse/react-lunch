import React from "react";
import mockData from "../__mocks__/mockData.json";

interface Restaurant {
  "category": string;
  "name": string;
  "distance": number;
  "description": string;
  "favorite": boolean
}

interface RestaurantListState {
  restaurants: Restaurant[];
}

class RestaurantList extends React.Component<{}, RestaurantListState> {

  constructor(props: Readonly<{}> | {}) {
    super(props);
    this.state = { restaurants: mockData };
  }

  render() {
    return (
      <>
        {
          this.state.restaurants.map((r) => <div>{r.name}</div>)
        }
      </>
    );
  }
}

export default RestaurantList;
