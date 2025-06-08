import React, { use } from "react";
import { AuthContext } from "../Context/AuthContex";

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // firebase sign in send
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        //update last sign in to the database.
        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl border border-red-600">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
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
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
