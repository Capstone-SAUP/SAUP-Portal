import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";
import "../../index.css";

const Login = () => {
    useTitle("Employee Login");

    const userRef = useRef();
    const errRef = useRef();
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [persist, setPersist] = usePersist();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { accessToken } = await login({ email, password }).unwrap();
            dispatch(setCredentials({ accessToken }));
            setemail("");
            setPassword("");
            navigate("/dash");
        } catch (err) {
            if (!err.status) {
                setErrMsg("No Server Response");
            } else if (err.status === 400) {
                setErrMsg("Missing email or Password");
            } else if (err.status === 401) {
                setErrMsg(
                    "The email or password you entered is invalid. Please double check and try again."
                );
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    };

    const handleUserInput = (e) => setemail(e.target.value);
    const handlePwdInput = (e) => setPassword(e.target.value);
    const handleToggle = () => setPersist((prev) => !prev);

    const errClass = errMsg ? "errmsg" : "offscreen";

    if (isLoading) return <PulseLoader color={"#FFF"} />;

    const content = (
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
              Sign <span className="text-rose-900">In</span>
            </h1>
            <p
              ref={errRef}
              className={`text-xs shrink w-64 text-center ${errClass}`}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <label className="mb-1" htmlFor="email">
              Email:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 bloc w-64 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="email"
              ref={userRef}
              value={email}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />
            <br></br>
            <label className="mb-1" htmlFor="password">
              Password:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 bloc w-64 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              id="password"
              onChange={handlePwdInput}
              value={password}
              required
            />
            <br/>

            <button className="form__submit-button bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline justify-center">
              Sign In
            </button>
            <br/>
            <label
              htmlFor="persist"
              className="flex items-center w-full gap-2 text-sm mb-3"
            >
              <input
                type="checkbox"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                id="persist"
                onChange={handleToggle}
                checked={persist}
              />
              Trust This Device
            </label>
            <label className="flex items-center justify-center w-full gap-2 text-base mb-3">
              <a href="/forgotPass" className="text-red-900">
                Forgot Password?
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

        {/* <footer> 
     
                <Link className='text-gray-900' to="/">Back to Home</Link>
            </footer> */}
      </section>
    );

    return content;
};
export default Login;
