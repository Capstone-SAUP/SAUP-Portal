import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../app/api/apiSlice";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";
import "../../index.css";

const ResetPass = () => {
    useTitle("Reset Password");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const passwordRef = useRef();

    const { token } = useParams();
    const navigate = useNavigate();

    const [resetPassword, { isLoading, isSuccess, isError, error: resetError }] = useResetPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (newPassword !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }

        try {
          const reset = await resetPassword({ token, newPassword });
          if (reset) {
            navigate("/login");
          }
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
      passwordRef.current.focus();
    }, []);

    if (isLoading) return <PulseLoader color={"#FFF"} />;

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
              Reset <span className="text-rose-900">Password</span>
            </h1>
            <label className="mb-1" htmlFor="newPassword">
              New Password:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 bloc w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              id="newPassword"
              ref={passwordRef}
              value={newPassword}
              onChange={(e)=> setNewPassword(e.target.value)}
              autoComplete="off"
              required
            />
            <br/>
            <label className="mb-1" htmlFor="newPassword">
              Confirm Password:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 bloc w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)}
              autoComplete="off"
              required
            />
            <br/>
            {error && <p className="text-red-500">{error}</p>}
            {isError && resetError && <p className="text-red-500">{resetError.message}</p>}
            <button className="form__submit-button bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline justify-center">
              Reset
            </button>
            <br/>
          </form>
        </main>
      </section>
    );
};

export default ResetPass;
