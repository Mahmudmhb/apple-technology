import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { handleSignUp } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { email, password };
    handleSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        alert("register done");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(newUser);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center "></div>
          <h1 className="text-5xl font-bold">Register Now</h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register Now</button>
              </div>
              <Link to="/login">
                Do you have acount? Please{" "}
                <span className="text-xl text-blue">Login</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
