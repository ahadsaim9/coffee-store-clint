import { GoEye, GoEyeClosed } from "react-icons/go";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  /* ***************  *************** */
  const { createUser } = useContext(AuthContext);
  /* ***************  *************** */

  const handleSignUp = (event) => {
    setRegisterError("");
    event.preventDefault();
    // console.log(event.currentTarget);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("name", name, "email:", email, "password:", password);

    // console.log(form);

    /* *************** password check *************** */
    if (password.length < 6) {
      setRegisterError(" password should be at least  6 characters or longer");
      Swal(
        "Oops!",
        "password should be at least  6 characters or longer..!",
        "error"
      );
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at last one upper case letter."
      );

      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at last one lower case letter."
      );

      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("Your password should have at last one number(0-9).!");
      return;
    }
    /* *************** accepted terms and condition *************** */

    createUser(email, password)
      /* ***************  *************** */
      .then((result) => {
        // console.log("user created at fb", result.user);
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, createdAt };

        /* *************** save new user info to the Database of axios method *************** */

        axios
          .post("https://coffee-store-server-5f2v.onrender.com/users", newUser)
          .then((data) => {
            console.log("user created to DataBase", data);
            if (data?.data?.insertedId) {
              form.reset();
              // alert("user created successfully.");
              Swal.fire({
                title: "user created successfully",
                text: "You clicked the button!",
                icon: "success",
                timer: 500,
                showConfirmButton: false,
              });
              setTimeout(() => {
                navigate("/");
              }, 500);
            }
          });

        /* *************** save new user info to the Database of fetch method *************** */
        // fetch("https://coffee-store-server-5f2v.onrender.com/users", {
        //   method: "POST",
        //   headers: { "content-type": "application/json" },
        //   body: JSON.stringify(newUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("user created to DataBase", data);
        //     if (data.insertedId) {
        //       form.reset();
        //       // alert("user created successfully.");
        //       Swal.fire({
        //         title: "user created successfully",
        //         text: "You clicked the button!",
        //         icon: "success",
        //       });
        //     }
        //   });
      })
      /* ***************  *************** */

      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-blue-50 w-full">
      <section className=" flex justify-center h-screen items-center ">
        <div className=" bg-blue-50 mx-auto w-full md:w-2/4 px-5 sm:px-16 [box-shadow:_-6px_5px_18px_rgba(131,131,131,0.94)] rounded">
          <h3 className=" lg:text-2xl text-blue-900  my-6 text-center font-semibold">
            Create a New account
          </h3>
          <hr />
          <form
            className="flex mt-6 flex-col gap-5 z-10 text-blue-900 rounded "
            onSubmit={handleSignUp}
          >
            <div>
              <label className=" font-semibold " htmlFor="">
                Your Name
              </label>
              <input
                name="name"
                required
                placeholder="Please Enter Your Name"
                type="text"
                className="bg-[#F3F3F3] w-full py-2 mt-2 rounded-sm px-3 placeholder:text-[14px]"
              />
            </div>
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
              className="bg-blue-950  hover:bg-green-900 duration-500 hover:shadow-md  text-white w-full py-3 font-bold rounded-sm px-3"
            />
          </form>
          {/* *********** error and success message ************ */}

          {registerError && (
            <p className="text-red-600 text-center mt-4"> {registerError} </p>
          )}

          {/* *********** Already have an account...! Go to signIn page ************ */}
          <p className="text-center text-[14px] text-blue-950 font-semibold my-8">
            Already Have An Account ?
            <span className="text-orange-600">
              <Link to={"/signIn"}> Sign-In</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
