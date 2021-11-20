import "./components/Entrega/NavBar.css";
import NavBar from "./components/Entrega/NavBar";
import ItemsListContainer from "./container/ItemsListContainer";

function App() {
  return (
    <>
      <div className="App-background">
        <NavBar />
        <ItemsListContainer />
      </div>
    </>
  );
}

export default App;
