import { Link } from "react-router";
import Swal from "sweetalert2";

const Coffee = ({ coffee, setCoffees, coffees }) => {
  // console.log(coffee);

  const { _id, name, quantity, supplier, taste, category, details, photo_url } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:50001/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              console.log("deleted successfully.");

              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className=" shadow-xl w-full  rounded flex flex-col md:flex-row bg-gradient-to-r from-teal-400 to-yellow-200 text-blue-950 [box-shadow:_-6px_5px_18px_rgba(131,131,131,0.94)]">
      <div className="min-h-24 md:h-auto p-4 min-w-20 max-w-60  mx-auto md:mx-0">
        <img className=" h-full w-full" src={photo_url} alt="" />
      </div>

      <section className="flex pl-5 flex-col sm:flex-row mx-auto ">
        <div className="flex flex-col justify-center pr-10">
          <h2 className=" xl:text-2xl font-semibold ">Coffee Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier Name: {supplier}</p>
          <p> Taste: {taste}</p>
          <p> Category: {category}</p>
          <p> Details: {details}</p>
        </div>
        <div className=" justify-center gap-3 md:gap-8 items-center flex sm:flex-col py-5 pr-5 ">
          <Link>
            <button className="btn btn-primary border-none w-22">view </button>
          </Link>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn bg-green-700 border-none w-22">
              Update
            </button>
          </Link>
          <Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-700 border-none w-22"
            >
              X
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Coffee;
