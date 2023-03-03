import { useEffect, useState } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { TfiPrinter } from "react-icons/tfi";
import { SlUser } from "react-icons/sl";
import { BiUserCircle } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineFileAdd } from "react-icons/ai";
import { RiLogoutBoxRLine, RiSearchLine } from "react-icons/ri";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import useAuth from "../hooks/useAuth";
import PulseLoader from "react-spinners/PulseLoader";

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/outreach(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

const DashSidebar = () => {
  const [open, setOpen] = useState(true);

  const { status, user_id, isAdmin } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  // const onNewOutreachClicked = () => navigate("/dash/outreach/new");
  // const onNewUserClicked = () => navigate("/dash/users/new");
  const onOutreachClicked = () => navigate("/dash/outreach");
  const onUsersClicked = () => navigate("/dash/users");
  const onGenerateClicked = () => navigate("/dash/generate-certificate");
  const onSubmitApplication = () => navigate("/dash/application-forms");

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
  //       className="mb-3 w-11 h-11 text-3xl bg-transparent text-white grid place-content-center mt-5"
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
  //       className="mb-3 w-11 h-11 text-3xl bg-transparent text-white grid place-content-center mt-5"
  //       title="New User"
  //       onClick={onNewUserClicked}
  //     >
  //       <FontAwesomeIcon icon={faUserPlus} />
  //     </button>
  //   );
  // }

  let userButton = null;
  if (isAdmin) {
    if (pathname.includes("/dash")) {
      userButton = (
        <button
          className="mb-3 w-full text-left"
          title="Users"
          onClick={onUsersClicked}
        >
          <div
            className={`text-white text-base flex items-center gap-x-4 cursor-pointer  p-1 hover:bg-red-500 rounded-md ${
              pathname.includes("/dash/users") && "bg-red-500"
            }`}
          >
            <span>
              <SlUser className="text-3xl block float-left" />
            </span>

            <span
              className={`truncate text-base font-medium flex-1 duration-200 ${
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
  if (pathname.includes("/dash")) {
    outreachButton = (
      <button
        className="mb-3 w-full text-left"
        title="Outreach"
        onClick={onOutreachClicked}
      >
        <div
          className={`text-white text-base flex items-center gap-x-4 cursor-pointer  p-1 hover:bg-red-500 rounded-md ${
            pathname.includes("/dash/outreach") && "bg-red-500"
          }`}
        >
          <span className="text-2xl block float-left pt-1">
            <FaRegHandshake className="text-3xl block float-left" />
          </span>
          <span
            className={`truncate text-base font-medium flex-1 duration-200 ${
              !open && "hidden"
            }`}
          >
            Outreach
          </span>
        </div>
      </button>
    );
  }

  let certificateButton = null;
  if (pathname.includes("/dash")) {
    certificateButton = (
      <button
        className="mb-3 w-full text-left"
        title="Generate Certificate"
        onClick={onGenerateClicked}
      >
        <div
          className={`text-white text-base flex items-center gap-x-4 cursor-pointer  p-1 hover:bg-red-500 rounded-md ${
            pathname.includes("/dash/generate-certificate") && "bg-red-500"
          }`}
        >
          <span className="text-2xl block float-left pt-1">
            <TfiPrinter className="text-3xl block float-left" />
          </span>
          <span
            className={`truncate text-base font-medium flex-1 duration-200 ${
              !open && "hidden"
            }`}
          >
            Certificate
          </span>
        </div>
      </button>
    );
  }

  let applicationButton = null;
    if (pathname.includes("/dash")) {
      applicationButton = (
        <button
          className="mb-3 w-full text-left"
          title="Submit Application"
          onClick={onSubmitApplication}
        >
          <div
            className={`text-white text-base flex items-center gap-x-4 cursor-pointer  p-1 hover:bg-red-500 rounded-md ${
              pathname.includes("/dash/application-forms") && "bg-red-500"
            }`}
          >
            <span>
              <AiOutlineFileAdd className="text-3xl block float-left" />
            </span>

            <span
              className={`truncate text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Submit Application
            </span>
          </div>
        </button>
      );
  }

  const logoutButton = (
    <button
      className="mb-3 w-full bottom-0 right-0 absolute text-left "
      title="Logout"
      onClick={sendLogout}
    >
      <div
        className={`mb-5 text-white text-base flex items-center gap-x-4 cursor-pointer p-1 hover:bg-red-500 rounded-md${
          !open && "flex justify-center"
        }`}
      >
        <span className="text-2xl block float-left pt-1">
          <RiLogoutBoxRLine className="text-3xl block float-left" />
        </span>
        <span
          className={`truncate text-base font-medium flex-1 duration-200 ${
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
        {applicationButton}
        {certificateButton}
        {logoutButton}
      </>
    );
  }

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <header className="flex justify-start">
        <div
          className={`bg-red-900 h-full p-5 pt-8 ${
            open ? "w-60" : "w-20"
          } duration-300 relative`}
        >
          <IoChevronBack
            className={`bg-white text-red-900 text-3xl rounded-full absolute -right-3 top-9 border-2 border-red-900 cursor-pointer ${
              !open && "rotate-180"
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
              className={`truncate text-white font-medium text-lg mt-1.5 duration-200 ${
                !open && "opacity-0 scale-0 -mb-20"
              }`}
            >
              SAUP HAU Portal
            </h1>
          </div>
          <Link>
            <div className={`mb-3 mt-5 ${dashClass}`}>
              <div
                className={`"w-full text-white grid text-base gap-x-4 cursor-pointer p-1 rounded-md ${
                  !open && "flex justify-center"
                }`}
              >
                <div className="pt-1 justify-self-center">
                  <BiUserCircle className="text-6xl" />
                </div>
                <div
                  className={`truncate w-full text-base font-medium duration-200 ${
                    !open && "opacity-0"
                  }`}
                >
                  <div className="flex justify-between">
                    <div>User ID:</div>
                    <span>{user_id}</span>
                  </div>
                  <div className="flex justify-between">
                    <div>Access Type:</div>
                    <span>{status}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* <div
            className={`flex items-center rounded-md bg-red-300 mt-6 duration-200 ${
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
          </div> */}
          <Link to="/dash">
            <div className={`mb-3 mt-5 ${dashClass}`}>
              <div className="text-white w-full text-base flex items-center gap-x-4 cursor-pointer p-1 hover:bg-red-500 rounded-md">
                <span className="text-2xl block float-left pt-1">
                  <RxDashboard className="text-3xl block float-left" />
                </span>
                <span
                  className={`truncate text-base font-medium flex-1 duration-200 ${
                    !open && "opacity-0 scale-0 hidden"
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
  return content;
};
export default DashSidebar;
