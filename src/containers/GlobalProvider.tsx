import React from "react";

export interface GlobalState {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}


export const GlobalContext = React.createContext<GlobalState>({
  modalOpen: false,
  setModalOpen: () => { },
});


interface GlobalProviderProps {
  children: React.ReactNode;
}


class GlobalProvider extends React.Component<GlobalProviderProps, GlobalState> {
  state: GlobalState = {
    modalOpen: false,
    setModalOpen: (newValue) => this.setState({ modalOpen: newValue }),
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
