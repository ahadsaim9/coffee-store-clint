import { GoEye, GoEyeClosed } from "react-icons/go";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log("email:", email, "password:", password);
    console.log(form);

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        console.log("lastSignInTime: ", lastSignInTime);
        const loginInfo = { email, lastSignInTime };

        fetch(`http://localhost:50001/users`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.matchedCount > 0) {
              form.reset();
              console.log("User found and updated:", data);
            } else {
              console.log("No user found with that email.");
            }
          });

        Swal.fire({
          title: "Sign-In successfully",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[#f3f3f3] w-full">
      <section className=" flex justify-center h-screen items-center">
        <div className="bg-white mx-auto w-full md:w-2/4 px-5 sm:px-16">
          <h3 className=" lg:text-2xl text-blue-900  my-6 text-center font-semibold">
            Sign-In your account
          </h3>
          <hr />
          <form
            className="flex mt-6 flex-col gap-5 z-10 text-blue-900"
            onSubmit={handleLogin}
          >
            <div>
              <label className=" font-semibold " htmlFor="">
                Email Address
              </label>
              <input
                name="email"
                required
                placeholder="Please Enter Your Email"
                type="email"
                className="bg-[#F3F3F3] w-full py-2 mt-2 rounded-sm px-3 placeholder:text-[14px]"
              />
            </div>

            <div className="relative">
              <label className=" font-semibold " htmlFor="">
                Password
              </label>
              <input
                required
                name="password"
                placeholder="Please Enter Your Password"
                type={showPassword ? "text" : "password"}
                className="bg-[#F3F3F3] w-full py-2 mt-2 rounded-sm px-3 placeholder:text-[14px]"
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className=" text-2xl absolute right-2 top-10 z-10  text-gray-900 cursor-pointer "
              >
                {showPassword ? <GoEyeClosed /> : <GoEye />}
              </p>
            </div>
            <input
              type="submit"
              className="bg-blue-950  hover:bg-green-800 duration-500 hover:shadow-md  text-white w-full py-3 font-bold rounded-sm px-3"
            />
          </form>
          <p className="text-center text-[14px] text-blue-950 font-semibold my-8">
            Dont’t Have An Account ?
            <span className="text-orange-600">
              <Link to={"/signup"}> Sign-Up</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
