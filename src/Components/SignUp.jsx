import React, { use } from "react";
import { AuthContext } from "../Context/AuthContex";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // it works well
    // const newUser = Object.fromEntries(formData.entries());
    // console.log(newUser);

    // trying in another way.
    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    // const email = formData.get("email");
    // const password = formData.get("password");
    console.log(email, password, userProfile);

    // create user in firebase,
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        //save profile info in the db.
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "your account created",
                showCancelButton: false,
                timer: 2000,
              });
            }
            console.log("after profile save ", data);
          });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl border border-red-600">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          <label className="label">Address</label>
          <input
            name="address"
            type="text"
            className="input"
            placeholder="Address"
          />
          <label className="label">Phone</label>
          <input
            name="phone"
            type="number"
            className="input"
            placeholder="Phone"
          />

          <label className="label">Photo</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo"
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <div></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
