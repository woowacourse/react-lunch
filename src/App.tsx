import Header from "./components/Header";
import RestaurantFilterContainer from "./components/RestaurantFilterContainer";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <>
      <Header />
      <main>
        <RestaurantFilterContainer />
        <RestaurantList />
      </main>
    </>
  );
}

export default App;
