import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo_url } =
    coffee;
  /* *************** Update Coffee *************** */
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    /* *************** Form all field *************** */
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo_url = form.photo_url.value;

    const UpdatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo_url,
    };
    // console.log(UpdatedCoffee);

    fetch(`https://coffee-store-server-5f2v.onrender.com/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        navigate("/");
      });
  };

  return (
    <div className="w-full min-h-svh mx-auto bg-blue-50 pb-5 ">
      <div className="max-w-[1180px]  mx-auto py-8 rounded-b-2xl [box-shadow:_-6px_5px_18px_rgba(131,131,131,0.94)] text-black bg-blue-50 px-3 sm:px-8 ">
        <h1
          className=" mb-5 [text-shadow:_-6px_5px_18px_rgba(131,131,131,0.94)]
 md:text-3xl text-2xl text-center font-bold italic"
        >
          Update Coffee : {name}
        </h1>

        <form onSubmit={handleUpdateCoffee} className="flex flex-col gap-y-6 ">
          <div className="flex flex-col md:flex-row w-full gap-x-8 gap-y-4 md:gap-y-0 ">
            <div className="md:w-1/2">
              <label>
                <span className="block mb-2 font-semibold">Coffee Name</span>
              </label>
              <input
                className="pl-4 py-2 border w-full"
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter Coffee Name"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label>
                <span className="block mb-2 font-semibold">
                  Available Quantity
                </span>
              </label>
              <input
                className="pl-4 py-2 border w-full"
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Enter Coffee Quantity"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-x-8 gap-y-4 md:gap-y-0">
            <div className="md:w-1/2">
              <label>
                <span className="block mb-2 font-semibold">Supplier Name</span>
              </label>
              <input
                className="pl-4 py-2 border w-full"
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter Coffee Supplier Name"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label>
                <span className="block mb-2 font-semibold">Taste</span>
              </label>
              <input
                className="pl-4 py-2 border w-full "
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter Coffee Taste"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-x-8 gap-y-4 md:gap-y-0">
            <div className="md:w-1/2">
              <label>
                <span className="block mb-2 font-semibold">Category</span>
              </label>
              <input
                className="pl-4 py-2 border w-full"
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter Coffee Category"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label>
                <span className="block mb-2 font-semibold">Details</span>
              </label>
              <input
                className="pl-4 py-2 border w-full"
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter Coffee Details"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-x-8 gap-y-4 md:gap-y-0">
            <div className="md:w-full">
              <label>
                <span className="block mb-2 font-semibold">Photo URL</span>
              </label>
              <input
                className="pl-4 py-2 border w-full"
                type="text"
                name="photo_url"
                defaultValue={photo_url}
                placeholder="Enter Photo URL"
                required
              />
            </div>
          </div>

          <div>
            <input
              type="submit"
              value="Update Coffee"
              className="w-full  shadow p-2.5  hover:text-white font-semibold hover:bg-green-800 duration-300 lg:text-gray-700 bg-green-800  lg:bg-white text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
