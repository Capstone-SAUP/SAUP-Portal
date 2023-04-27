import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from '../../app/api/apiSlice';
import useTitle from "../../hooks/useTitle";
import "../../index.css";

const ForgotPass = () => {
    useTitle("Forgot Password");

    const navigate = useNavigate();

    const userRef = useRef();
    const [email, setemail] = useState("");

    const [forgotPassword, { isLoading, isSuccess, isError, error }] = useForgotPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email) {
            await forgotPassword(email);
        }
    };

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
      if (isSuccess) {
          console.log('Email Sent: ', isSuccess)
          // add toaster if successful
          navigate("/login")
      }
      if (isError) {
          console.log(error)
      }
  }, [isSuccess, isError, error]);

    const handleUserInput = (e) => setemail(e.target.value);

    return (
      <section className="">
        <main className="">
          <img
            className="w-1/2 h-screen hidden md:block float-left object-cover"
            src={require("../../img/background.jpg")}
            alt="background"
          ></img>
          <form
            className="h-screen grid place-content-center"
            onSubmit={handleSubmit}
          >
            <br></br>
            <h1 className="text-5xl font-bold pb-2 mb-4 font-sans">
              Forgot <span className="text-rose-900">Password</span>
            </h1>
            <label className="mb-1" htmlFor="email">
              Email:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 bloc w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="email"
              ref={userRef}
              value={email}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />
            <br/>

            <button className="form__submit-button bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline justify-center">
              Request
            </button>
            <br/>
            <label className="flex items-center justify-center w-full gap-2 text-base">
              <p>Already have an account?</p>
              <a href="/login" className="text-red-900">
                Log in
              </a>
            </label>
            <label className="flex items-center justify-center w-full gap-2 text-base">
              <p>No Account?</p>
              <a href="/signup" className="text-red-900">
                Sign Up
              </a>
            </label>
          </form>
        </main>
      </section>
    );
};
export default ForgotPass;
