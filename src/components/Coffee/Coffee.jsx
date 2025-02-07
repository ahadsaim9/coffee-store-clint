import { useLoaderData } from "react-router";

const Coffee = () => {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div>
      <h1>Total Coffee: </h1>
    </div>
  );
};

export default Coffee;
