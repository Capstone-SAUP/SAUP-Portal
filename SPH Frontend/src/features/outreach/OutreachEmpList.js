import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { useGetAnexBQuery } from "./anexB_ApiSlice";
import { Link } from "react-router-dom";
import OutreachEmp from "./OutreachEmp";

const OutreachEmpList = () => {
  useTitle("SAUP Portal: Outreach List");

  const navigate = useNavigate();

  const { user_id, isAdmin, roles, } = useAuth();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [department, setDepartment] = useState("All");

  const {
    data: anexB,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAnexBQuery("outreachList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  }
  );

  const { test, name, outreach_status, user_dept,  } = useGetAnexBQuery("outreachList", {
    selectFromResult: ({ data }) => ({
      test: data?.ids.map((id) => data?.entities[id]).id,
      name: data?.ids.map((id) => data?.entities[id].fullname),
      outreach_status: data?.ids.map((id) => data?.entities[id].status),
      user_dept: data?.ids.map((id) => data?.entities[id].department),
    }),
  });

  let content;

  if (isLoading) content = <PulseLoader color={"#FFF"} />;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }
  if (isSuccess) {
    const handleOutreach = () => navigate(`/dash/outreach/new`);

    const { ids, entities } = anexB;
    let ids_B = ids;
    let entities_B = entities;
    let user_role = entities_B.user_role
    let filteredIds;
    // console.log(entities_B);
    if (isAdmin) {
      filteredIds = [...ids_B];
    } 
    if (roles == "Employee") {
      filteredIds = ids_B.filter(
        (outreachId) => entities_B[outreachId].user === user_id
      );
    }
    if (search != "") {
      filteredIds = ids_B.filter(
        (outreachId) =>
          entities_B[outreachId].fullname.toLowerCase().includes(search)
      );
    }
    if (status != "All") {
      filteredIds = ids_B.filter((outreachId) =>
        entities_B[outreachId].status.includes(status)
      );
    }
    if (department != "All") {
      filteredIds = ids_B.filter((outreachId) =>
      entities_B[outreachId].department.includes(department)
      );
    }
        let noOutreach = null;
        if (filteredIds.length == 0) {
          noOutreach = (
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
              <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                  <h2 className="mb-8 font-extrabold text-9xl text-red-900">
                    <span className="sr-only ">Error</span>404
                  </h2>
                  <p className="text-2xl font-semibold md:text-3xl">
                    Sorry, no Outreach was found.
                  </p>
                  <p className="mt-4 mb-8 dark:text-gray-400">
                    You first need to submit a Proposal for a Community Extension Project.
                  </p>
                  <Link
                    to="/dash/application-forms"
                    className="px-8 py-3 font-semibold rounded bg-red-900 text-white hover:bg-red-500 hover:text-white "
                  >
                    Submit a Proposal Form
                  </Link>
                </div>
              </div>
            </section>
          );
        }
    const tableContent = ids_B?.length &&
      filteredIds.map((outreachId) => (
        <OutreachEmp key={outreachId} outreachId={outreachId} />
      ));


    content = (
      <>
        <div className="text-2xl font-semibold">
          Outreach Projects
          <p className="text-sm font-bold float-right">
            <button className="pr-2">
              <FontAwesomeIcon icon={faNavicon} />
            </button>
            View
          </p>
        </div>

        <nav className="border shadow-md shadow-gray-400 mb-4 p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-wrap items-center justify-between mx-auto">
            <ul className="flex gap-x-20 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <div className=" px-4 text-sm font-bold">
                  What are you looking for?
                </div>
                <header>
                  <input
                    className="z-1 block ml-4 bg-gray-300 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900"
                    onChange={(e) => setSearch(e.target.value)}
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
                <label className=" px-4 py-10 text-sm font-bold">Status</label>
                <select
                  className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                </select>
              </li>
              <li>
                <label className=" px-4 py-10 text-sm font-bold">Sort By</label>
                <select className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Date</option>
                  <option value="US">SOC</option>
                  <option value="CA">SAS</option>
                  <option value="FR">SBA</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
        <div className="w-full border rounded-lg shadow-md  shadow-gray-400">
          {/* <div className="">
                    <button className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                    onClick={handleOutreach}> 
                    Add New Project
                    </button>
                </div> */}
          <table className="w-full text-sm text-left table-fixed">
            <thead className="bg-gray-300">
              <tr>
                <th scope="col" className="text-sm font-bold px-6 py-4 ">
                  ID
                </th>
                <th scope="col" className="text-sm font-bold py-4 ">
                  Full Name
                </th>
                <th scope="col" className="text-sm font-bold py-4 ">
                  Department
                </th>
                <th scope="col" className="text-sm font-bold py-4 ">
                  Status
                </th>
                <th scope="col" className="text-sm font-bold py-4 ">
                  Date Created
                </th>
                <th scope="col" className="text-sm font-bold py-4 ">
                  Project Title
                </th>
                <th scope="col" className="text-sm font-bold py-4 ">
                  Beneficiaries
                </th>
                <th scope="col" className="text-sm font-bold py-4 ">
                  Venue
                </th>
                <th scope="col" className="px-6 py-4 w-40">
                  Option
                </th>
              </tr>
            </thead>
            <tbody>{tableContent}</tbody>
          </table>
          {noOutreach}
        </div>
      </>
    );
  }

  return content;
};
export default OutreachEmpList;
