import { useGetUsersQuery } from "./usersApiSlice";
import User from "./User";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";

const UsersList = () => {
    useTitle("SAUP Portal: Users List");

    const navigate = useNavigate();

    const { user_id, isAdmin } = useAuth();
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [tenure, setTenure] = useState("All");
    const [roles, setRoles] = useState("All");

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUsersQuery("usersList", {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });


    let content;

    if (isLoading) content = <PulseLoader color={"#FFF"} />;

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>;
    }

    if (isSuccess) {
        const handleUser = () => navigate(`/dash/users/new`);


        const { ids, entities } = users;
        let user_ids = ids;
        let user_entities = entities;
    
        let filteredIds;
        if (isAdmin) {
          filteredIds = [...user_ids];
        } 

        if (roles == "Employee") {
            filteredIds = user_ids.filter(
              (userId) => user_entities[userId].user === user_id
            );
          }
          
        if (department != "All") {
            filteredIds = user_ids.filter((userId) =>
              user_entities[userId].department.includes(department)
            );
          }
          if (tenure != "All") {
            filteredIds = user_ids.filter((userId) =>
              user_entities[userId].tenure.includes(tenure)
            );
          }
          if (roles != "All") {
            filteredIds = user_ids.filter((userId) =>
              user_entities[userId].roles.includes(roles)
            );
          }
          if (search != "") {
            filteredIds = user_ids.filter(
              (userId) =>
                user_entities[userId].firstname.toLowerCase().includes(search) || user_entities[userId].lastname.toLowerCase().includes(search)
            );
          }

          // console.log(department);


    const tableContent = user_ids?.length &&
      filteredIds.map((userId) => (
        <User key={userId} userId={userId} /> ));
            // console.log(User)

            let noUser = null;
            if (filteredIds.length == 0) {
              noUser = (
                <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                  <div className="container flex flex-col items-center justify-center px-5 mx-auto">
                    <div className="text-center">
                      <p className="text-xl font-semibold md:text-3xl">
                        Sorry, no user with the selected criteria was found.
                      </p>
                    </div>
                  </div>
                </section>
              );
            }
        content = (
          <>
            <p className="text-2xl font-semibold">Users List</p>
            <nav className="border shadow-md shadow-gray-400 mb-4 p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-wrap items-center justify-between mx-auto">
            <ul className="flex gap-x-20 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <div className=" px-4 text-sm font-bold">Name of User</div>
                <header>
                  <input
                    className="z-1 block ml-4 pl-2 bg-gray-300 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900"
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search"
                  ></input>
                </header>
              </li>
              <li>
                <label className=" px-4 py-10 text-sm font-bold">
                  Department
                </label>
                <select
                  type="text"
                  placeholder="Search"
                  className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="NA">N/A</option>
                  <option value="SOC">SOC</option>
                  <option value="SAS">SAS</option>
                  <option value="SEA">SEA</option>
                  <option value="SED">SED</option>
                  <option value="SBA">SBA</option>
                  <option value="SNAMS">SNAMS</option>
                  <option value="CCJEF">CCJEF</option>
                  <option value="SHTM">SHTM</option>
                </select>
              </li>
              <li>
                    <label className=" px-4 py-30 text-sm font-bold">
                      Tenure
                    </label>
                    <select
                      type="text"
                      placeholder="Search"
                      className="w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setTenure(e.target.value)}
                    >
                      <option value="All">All</option>
                      <option value="Non">Non</option>
                      <option value="Regular">Regular</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Probationary">Probationary</option>
                      <option value="Fixed-Term">Fixed-Term</option>
                      <option value="Contractual">Contractual</option>
                      <option value="Guestlecturer">Guest-Lecturer</option>
                    </select>
                  </li>
                  <li>
                    <label className="py-30 text-sm font-bold">
                      Role
                    </label>
                    <select
                      type="text"
                      placeholder="Search"
                      className="w-full z-1 block bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setRoles(e.target.value)}
                    >
                      <option value="All">All</option>
                      <option value="Student">Student</option>
                      <option value="Employee">Employee</option>
                      <option value="Facilitator">Facilitator</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </li>
            </ul>
          </div>
        </nav>
            <div className="w-full rounded-lg shadow-md border shadow-gray-400">
              <div className="">
                <div className="px-5 font-bold mt-2"></div>
                <button
                  className="text-white  bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                  onClick={handleUser}
                >
                  Add New User
                </button>
              </div>
              <table className="w-full text-left">
                <thead className="">
                  <tr className="text-base bg-gray-200 ">
                    <th scope="col" className="text-sm font-bold px-4 py-3 ">
                      User ID
                    </th>
                    <th scope="col" className="text-sm font-bold px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="text-sm font-bold px-4 py-3">
                      Hau Email
                    </th>
                    <th scope="col" className="text-sm font-bold px-4 py-3">
                      Roles
                    </th>
                    <th scope="col" className="text-sm font-bold px-4 py-3">
                      Department
                    </th>
                    <th scope="col" className="text-sm font-bold px-4 py-3">
                      Tenure
                    </th>
                    <th scope="col" className="text-center w-32 px-4 py-3"> 
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base">{tableContent}</tbody>
              </table>
              {noUser}
            </div>
          </>
        );
    }

    return content;
};
export default UsersList;
