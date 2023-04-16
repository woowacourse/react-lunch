import React, { useState } from "react";
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


function GlobalProvider({ children }: GlobalProviderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [restaurant, setRestaurant] = useState(defaultRestaurant);
  const state = {
    modalOpen, setModalOpen,
    restaurant, setRestaurant,
  };

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  );
}


export default GlobalProvider;
