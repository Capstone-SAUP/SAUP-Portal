import { useEffect, useState } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { TfiPrinter } from "react-icons/tfi";
import { SlUser } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineFileAdd, AiOutlineFileDone } from "react-icons/ai";
import { RiLogoutBoxRLine, RiSuitcaseLine } from "react-icons/ri";
import { useGetUsersQuery } from "../features/users/usersApiSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import useAuth from "../hooks/useAuth";
import PulseLoader from "react-spinners/PulseLoader";

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/outreach(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

const DashSidebar = ({ ids }) => {
  const [open, setOpen] = useState(true);
  
  const { roles, user_id, isAdmin } = useAuth();

  
  const { user_ids, firstname, lastname } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      // user: data?.entities[ids].firstname,
      user_ids: data?.ids.map((id) => data?.entities[id].user_id),
      firstname: data?.ids.map((id) => data?.entities[id].firstname),
      lastname: data?.ids.map((id) => data?.entities[id].lastname),
    }),
  });
  
  const currentUser = user_ids.indexOf(user_id);
  const user_fullname = firstname[currentUser] + " " +lastname[currentUser];
  // console.log(user_fullname);
  // console.log(user_ids);
  
  // let current_user;
  // if (user_id === user_ids){
  //   console.log(current_user);
  // }

  // const tableContent =
  //   ids?.length && ids.map((userId) => key={userId},userId={userId});
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  // const onNewOutreachClicked = () => navigate("/dash/outreach/new");
  // const onNewUserClicked = () => navigate("/dash/users/new");
  const onEmployeeOutreachClicked = () => navigate("/dash/employee");
  const onStudentOutreachClicked = () => navigate("/dash/student");
  const onReportsOutreachClicked = () => navigate("/dash/reports");
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

  let employeeOutreachButton = null;
  if (roles == "Employee" || isAdmin) {
  if (pathname.includes("/dash")) {
    employeeOutreachButton = (
      <button
        className="mb-3 w-full text-left"
        title="Outreach"
        onClick={onEmployeeOutreachClicked}
      >
        <div
          className={`text-white text-base flex items-center gap-x-4 cursor-pointer  p-1 hover:bg-red-500 rounded-md ${
            pathname.includes("/dash/employee") && "bg-red-500"
          }`}
        >
          <span className="text-2xl block float-left pt-1">
            <RiSuitcaseLine className="text-3xl block float-left" />
          </span>
          <span
            className={`truncate text-base font-medium flex-1 duration-200 hover:bg-red-500 rounded-md${
              !open && "hidden"
            }`}
          >
            Employee Outreach
          </span>
        </div>
      </button>
    );
  }
  }


  let studentOutreachButton = null;
  if (roles == "Student"  || isAdmin) {
    if (pathname.includes("/dash")) {
      studentOutreachButton = (
        <button
          className="mb-3 w-full text-left"
          title="Outreach"
          onClick={onStudentOutreachClicked}
        >
          <div
            className={`text-white text-base flex items-center gap-x-4 cursor-pointer  p-1 hover:bg-red-500 rounded-md ${
              pathname.includes("/dash/student") && "bg-red-500"
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
              Student Outreach
            </span>
          </div>
        </button>
      );
    }
  }

    let reportsButton = null;
    if (roles == "Employee" || isAdmin) {
      if (pathname.includes("/dash")) {
        reportsButton = (
          <button
            className="mb-3 w-full text-left"
            title="Outreach"
            onClick={onReportsOutreachClicked}
          >
            <div
              className={`text-white text-base flex items-center gap-x-4 cursor-pointer  p-1 hover:bg-red-500 rounded-md ${
                pathname.includes("/dash/reports") && "bg-red-500"
              }`}
            >
              <span className="text-2xl block float-left pt-1">
                <AiOutlineFileDone className="text-3xl block float-left" />
              </span>
              <span
                className={`truncate text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                Implementation Reports
              </span>
            </div>
          </button>
        );
      }
    }


  let certificateButton = null;
if (roles == "Employee" || roles == "Admin"){
    if (pathname.match("/dash")) {
      certificateButton = (
        <button
          className="mb-20 w-full text-left"
          title="Generate Certificate"
          onClick={onGenerateClicked}
        >
          <div
            className={`text-white text-base flex items-center gap-x-4 cursor-pointer p-1 hover:bg-red-500 rounded-md ${
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
        {userButton}
        {employeeOutreachButton}
        {studentOutreachButton}
        {reportsButton}
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
                  className={` w-full text-base font-medium duration-200 ${
                    !open && "opacity-0"
                  }`}
                >
                  <div className="flex text-2xl mt-3 mb-3 text-center justify-center">
                    <div>{user_fullname}</div>
                  </div>
                  <div className="flex truncate justify-between">
                    <div>User ID:</div>
                    <span>{user_id}</span>
                  </div>
                  <div className="flex truncate justify-between">
                    <div>Access Type:</div>
                    <span>{roles}</span>
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
              <div
                className={`text-white w-full text-base flex items-center gap-x-4 cursor-pointer p-1 hover:bg-red-500 rounded-md${
                  pathname.match("/dash") && "bg-red-500"
                }`}
              >
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
