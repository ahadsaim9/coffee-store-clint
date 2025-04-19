import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleFormSubmit = (event) => {
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

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo_url,
    };
    // console.log(newCoffee);

    fetch("http://localhost:3000/add_coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add Coffee Success.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  /* ***************  *************** */

  return (
    <div className="max-w-[1200px] mx-auto py-10 pt-12 text-black bg-gray-50 px-3 sm:px-8">
      <h1
        className="  [text-shadow:_-6px_5px_18px_rgba(131,131,131,0.94)]
 md:text-3xl text-2xl text-center font-bold italic"
      >
        Add New Coffee
      </h1>
      <p className="py-5 md:px-20 text-gray-900 text-justify">
        Welcome to{" "}
        <span className="text-orange-600 font-semibold ">ASM Coffee Shop.</span>{" "}
        We are passionate about serving high-quality, ethically sourced coffee
        in a cozy, welcoming space. Every cup is crafted with care by our expert
        baristas, ensuring a rich and flavorful experience. Whether you’re here
        for a quick espresso, a relaxing latte, or a friendly chat, we’re
        dedicated to making every visit special. Join us and enjoy great coffee,
        warm vibes, and a community that feels like home! ☕✨
      </p>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-6 ">
        <div className="flex flex-col md:flex-row w-full gap-x-8 gap-y-4 md:gap-y-0 ">
          <div className="md:w-1/2">
            <label>
              <span className="block mb-2 font-semibold">Coffee Name</span>
            </label>
            <input
              className="pl-4 py-2 border w-full "
              type="text"
              name="name"
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
              placeholder="Enter Photo URL"
              required
            />
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Add Coffee"
            className="w-full  shadow p-2.5  hover:text-white font-semibold hover:bg-green-800 duration-300 lg:text-gray-700 bg-green-800  lg:bg-white text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
