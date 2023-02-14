import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FaRegHandshake } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { RxDashboard } from "react-icons/rx"
import { IoChevronBack } from "react-icons/io5";
import { RiLogoutBoxRLine, RiSearchLine } from "react-icons/ri";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import useAuth from "../hooks/useAuth";
import PulseLoader from "react-spinners/PulseLoader";

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/outreach(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

const DashHeader = () => {
  const [open, setOpen] = useState(true);

  const { isAdmin } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const onNewOutreachClicked = () => navigate("/dash/outreach/new");
  const onNewUserClicked = () => navigate("/dash/users/new");
  const onOutreachClicked = () => navigate("/dash/outreach");
  const onUsersClicked = () => navigate("/dash/users");

  let dashClass = null;
  if (
    !DASH_REGEX.test(pathname) &&
    !NOTES_REGEX.test(pathname) &&
    !USERS_REGEX.test(pathname)
  ) {
    dashClass = "max-w-xs";
  }

  // let newOutreachButton = null;
  // if (NOTES_REGEX.test(pathname)) {
  //   newOutreachButton = (
  //     <button
  //       className="w-11 h-11 text-3xl bg-transparent text-white grid place-content-center mt-5"
  //       title="New Outreach"
  //       onClick={onNewOutreachClicked}
  //     >
  //       <FaRegHandshake />
  //     </button>
  //   );
  // }

  // let newUserButton = null;
  // if (USERS_REGEX.test(pathname)) {
  //   newUserButton = (
  //     <button
  //       className="w-11 h-11 text-3xl bg-transparent text-white grid place-content-center mt-5"
  //       title="New User"
  //       onClick={onNewUserClicked}
  //     >
  //       <FontAwesomeIcon icon={faUserPlus} />
  //     </button>
  //   );
  // }

  let userButton = null;
  if (isAdmin) {
    if (!USERS_REGEX.test(pathname) && pathname.includes("/dash")) {
      userButton = (
        <button
          className="w-full pt-2 text-left"
          title="Users"
          onClick={onUsersClicked}
        >
          <div className="text-white text-base flex items-center gap-x-4 cursor-pointer p-1 hover:bg-red-500 rounded-md mt-2">
            <span>
              <SlUser className="text-3xl block float-left" />
            </span>

            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Users
            </span>
          </div>
        </button>
      );
    }
  }

  let outreachButton = null;
  if (!NOTES_REGEX.test(pathname) && pathname.includes("/dash")) {
    outreachButton = (
      <button
        className="w-full pt-2 text-left"
        onClick={onOutreachClicked}
      >
        <div className="text-white text-base flex items-center gap-x-4 cursor-pointer p-1 hover:bg-red-500 rounded-md mt-2">
            <span className="text-2xl block float-left pt-1">
              <FaRegHandshake className="text-3xl block float-left" />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Outreach
            </span>
        </div>
      </button>
    );
  }

  const logoutButton = (
    <button
      className="w-full pt-2 text-left"
      title="Logout"
      onClick={sendLogout}
    >
      <div className="text-white text-base flex items-center gap-x-4 cursor-pointer p-1 hover:bg-red-500 rounded-md mt-2">
        <span className="text-2xl block float-left pt-1">
          <RiLogoutBoxRLine className="text-3xl block float-left" />
        </span>
        <span
          className={`text-base font-medium flex-1 duration-200 ${
            !open && "hidden"
          }`}
        >
          Logout
        </span>
      </div>
    </button>
  );

  const errClass = isError ? "errmsg" : "offscreen";

  let buttonContent;
  if (isLoading) {
    buttonContent = <PulseLoader color={"#FFF"} />;
  } else {
    buttonContent = (
      <>
        {/* {newOutreachButton}
        {newUserButton} */}
        {outreachButton}
        {userButton}
        {logoutButton}
      </>
    );
  }

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <header className="flex">
        <div
          className={`bg-red-900 h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <IoChevronBack
            className={`bg-white text-red-900 text-3xl rounded-full absolute -right-3 top-9 border-2 border-red-900 cursor-pointer ${
              open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <img
              className="h-10 w-10 cursor-pointer block float-left mr-2"
              src={require("../../src/img/ICFSI Logo.png")}
              alt="logo"
            ></img>
            <h1
              className={`text-white origin-left font-medium text-lg mt-1.5 duration-300 ${
                !open && "opacity-0 scale-0 -mb-20"
              }`}
            >
              SAUP HAU Portal
            </h1>
          </div>
          <div
            className={`flex items-center rounded-md bg-red-300 mt-6 ${
              !open ? "px-2.5 py-2" : "px-4"
            }`}
          >
            <RiSearchLine
              className={`text-white text-lg block float-left cursor-pointer ${
                open && "mr-2"
              }`}
              onClick={() => setOpen(!open)}
            />

            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent w-full text-white focus:outline-none border-none ${
                !open && "hidden"
              }`}
            />
          </div>
          <Link to="/dash">
            <div className={`pt-2 ${dashClass}`}>
              <div className="text-white w-full text-base flex items-center gap-x-4 cursor-pointer p-1 hover:bg-red-500 rounded-md mt-2">
                <span className="text-2xl block float-left pt-1">
                  <RxDashboard className="text-3xl block float-left" />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  Dashboard
                </span>
              </div>
            </div>
          </Link>
          <nav className="">{buttonContent}</nav>
        </div>
      </header>
    </>
  );
  console.log(open);
  return content;
};
export default DashHeader;
