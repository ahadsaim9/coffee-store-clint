import { useLoaderData } from "react-router";
import "./App.css";
import AddCoffee from "./components/AddCoffee/AddCoffee";
import Coffee from "./components/Coffee/Coffee";
import { useState } from "react";
function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  // console.log(coffees);

  return (
    <>
      <div className="">
        <div>
          <h1 className="text-2xl text-center py-10 text-gray-400 font-bold  [text-shadow:_-6px_5px_18px_rgba(131,131,131,0.94)]">
            Coffees: <span className="text-orange-600">{coffees.length}</span>
          </h1>
          <div>
            <div className="grid lg:grid-cols-2 gap-4 mb-10 px-2  sm:px-5 max-w-[1520px] mx-auto">
              {coffees.map((coffee) => (
                <Coffee
                  key={coffee._id}
                  coffee={coffee}
                  coffees={coffees}
                  setCoffees={setCoffees}
                ></Coffee>
              ))}
            </div>
          </div>
        </div>
        <AddCoffee></AddCoffee>
      </div>
    </>
  );
}

export default App;
