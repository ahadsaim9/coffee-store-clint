import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoffeeDetails = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  console.log(coffee);

  useEffect(() => {
    fetch(`https://coffee-store-server-5f2v.onrender.com/coffee/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, [id]);

  const { name, quantity, supplier, taste, category, details, photo_url } =
    coffee;
  return (
    <div className="w-full mx-auto bg-blue-50">
      <div className="p-5 w-[50%] mx-auto text-blue-950 bg-blue-50">
        <h2 className="text-2xl font-bold text-center">Coffee Name: {name}</h2>
        <img
          className="w-34 object-cover my-4 mx-auto "
          src={photo_url}
          alt={name}
        />
        <div className="flex w-full items-center justify-center">
          <section className="flex flex-col gap-2.5 ">
            <p>
              <strong>Supplier:</strong> {supplier}
            </p>
            <p>
              <strong>Quantity:</strong> {quantity}
            </p>
            <p>
              <strong>Taste:</strong> {taste}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Details:</strong> {details}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
