import "./App.css";
import AddCoffee from "./components/AddCoffee/AddCoffee";
import Coffee from "./components/Coffee/Coffee";
function App() {
  return (
    <>
      <div className="">
        <Coffee></Coffee>
        <AddCoffee></AddCoffee>
      </div>
    </>
  );
}

export default App;
