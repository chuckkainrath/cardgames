import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink} from "react-router-dom";
import { signUp } from "../../store/session";
import logo from "./bjkids.png"

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="sign-up-form-container">
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold text-center flex align-items-center flex-col ">
            <img src={logo} alt="logo" width="100px" height="100px" className="place-self-center " /> BLAK-JAK
            <p className="font-normal p-5 text-center ">
              <br></br> Welcome, please fill in your information
              to sign-up for the App.
            </p>
          </h1>
          <form className="mt-6" onSubmit={onSignUp}>
            <label
              for="firstname"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              User Name
            </label>
            <input
              id="firstname"
              value={username}
              onChange={updateUsername}
              type="text"
              name="username"
              placeholder="John88"
              autocomplete="given-name"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <label
              for="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              id="email"
              onChange={updateEmail}
              value={email}
              type="email"
              name="email"
              placeholder="john.doe@company.com"
              autocomplete="email"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              onChange={updatePassword}
              value={password}
              type="password"
              name="password"
              placeholder="********"
              autocomplete="new-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="password-confirm"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Confirm password
            </label>
            <input
              id="password-confirm"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              type="password"
              name="repeat_password"
              placeholder="********"
              autocomplete="new-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required={true}
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Sign up
            </button>
            <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
              <NavLink to="/login">Already registered?</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
