import React from "react";
import { Restaurant } from "../types/Restaurant";

export interface GlobalState {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  restaurant: Restaurant;
  setRestaurant: (value: Restaurant) => void;
}

const defaultRestaurant: Restaurant = {
  category: "",
  name: "",
  distance: 0,
  description: "",
  favorite: false
}

export const GlobalContext = React.createContext<GlobalState>({
  modalOpen: false,
  setModalOpen: () => { },
  restaurant: defaultRestaurant,
  setRestaurant: () => { }
});

interface GlobalProviderProps {
  children: React.ReactNode;
}


class GlobalProvider extends React.Component<GlobalProviderProps, GlobalState> {
  state: GlobalState = {
    modalOpen: false,
    setModalOpen: (newValue) => this.setState({ modalOpen: newValue }),
    restaurant: defaultRestaurant,
    setRestaurant: (newValue) => this.setState({ restaurant: newValue }),
  };

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalProvider;
