import { useState } from "react";
import { useLoaderData } from "react-router";
import Coffee from "../Coffee/Coffee";

const Coffees = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  // console.log(coffees);

  return (
    <div className="bg-blue-50">
      <div>
        <h1 className="text-2xl pt-4 text-center pb-10 text-gray-800 font-bold  [text-shadow:_-6px_5px_18px_rgba(131,131,131,0.94)]">
          Our Coffee's:{" "}
          <span className="text-orange-600">{coffees.length}</span>
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
    </div>
  );
};

export default Coffees;
