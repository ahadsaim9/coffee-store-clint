import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  /* *************** HandleUsers *************** */
  const handleUserDeleted = (id) => {
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
        fetch(`http://localhost:50001/users/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log("delete is done", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your User has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-svh w-full bg-white text-black">
      <h1 className="text-2xl text-center py-10">
        Total Users:
        <span className="text-orange-600 font-semibold">{users.length}</span>
      </h1>
      <div className="grid md:grid-cols-2 px-10 gap-x-4 gap-y-5 mx-auto w-full ">
        {users.map((user) => (
          <div key={user._id} className="">
            <h1>User Name: {user.name}</h1>
            <p>User Email: {user.email}</p>
            <p>User CreatedAt: {user.createdAt}</p>
            <p>
              {user?.metadata?.lastSignInTime
                ? `Last login: ${lastSignInTime}`
                : ""}
            </p>
            <div className="flex gap-10 mt-3">
              <button className="px-4 py-1.5 text-white bg-blue-950 rounded">
                Edit
              </button>
              <button
                onClick={() => handleUserDeleted(user._id)}
                className="px-4 py-1.5 bg-red-700 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
