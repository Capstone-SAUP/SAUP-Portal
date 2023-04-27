import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { useGetAnexAQuery } from "./anexA_ApiSlice";
import { Link } from "react-router-dom";
import OutreachStud from "./OutreachStud";

const OutreachStudList = () => {
  useTitle("SAUP Portal: Outreach List");

  const navigate = useNavigate();

  const { user_id, isAdmin, roles } = useAuth();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [department, setDepartment] = useState("All");

  const {
    data: anexA,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAnexAQuery("outreachList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <PulseLoader color={"#FFF"} />;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const handleOutreach = () => navigate(`/dash/outreach/new`);

    const { ids, entities } = anexA;
    let ids_A = ids;
    let entities_A = entities;

    // let user_role = entities_A.user_role
    // console.log(roles);
    let filteredIds;
    if (isAdmin) {
      filteredIds = [...ids_A];
    }
    if (isAdmin && search !== "") {
      filteredIds = ids_A.filter(
        (outreachId) =>
          entities_A[outreachId].fullname.toLowerCase().includes(search)
      );
    }
    if (isAdmin && status !== "All") {
      filteredIds = ids_A.filter((outreachId) =>
        entities_A[outreachId].status.includes(status)
      );
    }
    if (isAdmin && department !== "All") {
      filteredIds = ids_A.filter((outreachId) =>
        entities_A[outreachId].department.includes(department)
      );
    }
    if (!isAdmin) {
      filteredIds = ids_A.filter(
        (outreachId) => entities_A[outreachId].user === user_id
      );
          if (!isAdmin && search !== "") {
            filteredIds = ids_A.filter(
              (outreachId) =>
                entities_A[outreachId].fullname
                  .toLowerCase()
                  .includes(search) && entities_A[outreachId].user === user_id
            );
          }
          if (!isAdmin && status !== "All") {
            filteredIds = ids_A.filter(
              (outreachId) =>
                entities_A[outreachId].status.includes(status) &&
                entities_A[outreachId].user === user_id
            );
          }
          if (!isAdmin && department !== "All") {
            filteredIds = ids_A.filter(
              (outreachId) =>
                entities_A[outreachId].department.includes(department) &&
                entities_A[outreachId].user === user_id
            );
          }
    }

    let noOutreach = null;
    if (filteredIds.length == 0) {
      noOutreach = (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="text-center">
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, no Outreach was found.
              </p>
              <p className="mt-4 mb-8 dark:text-gray-400 italic">
                You first need to submit a Proposal for a Community Extension
                Project.
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
    const tableContent =
      ids_A?.length &&
      filteredIds.map((outreachId) => (
        <OutreachStud key={outreachId} outreachId={outreachId} />
      ));

    content = (
      <>
        <div className="text-2xl font-semibold">
          Student Outreach Projects
        </div>

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
                  <option value="N/A">N/A</option>
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
                  <option value="Approved">Approved</option>
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                </select>
              </li>
              <li>
                <label className="py-10 text-sm font-bold">Sort By</label>
                <select className="mr-20 w-full z-1 block bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="All">All</option>
                  <option value="Oldest">Oldest</option>
                  <option value="Latest">Latest</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
        <div className="w-full border rounded-lg shadow-md overflow-hidden shadow-gray-400">
          {/* <div className="">
                    <button className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                    onClick={handleOutreach}> 
                    Add New Project
                    </button>
                </div> */}
          <table className="w-full text-sm text-left table-fixed">
            <thead className="bg-gray-300">
              <tr>
                <th scope="col" className="text-sm font-bold py-2 px-1 ">
                  ID
                </th>
                <th scope="col" className="text-sm font-bold py-2 px-1 pr-14">
                  Full Name
                </th>
                <th scope="col" className="text-sm font-bold py-2 px-1 ">
                  Department
                </th>
                <th scope="col" className="text-sm font-bold py-2 px-1 w-40">
                  Status
                </th>
                <th scope="col" className="text-sm font-bold py-2 px-1 ">
                  Date Created
                </th>
                <th scope="col" className="text-sm font-bold  py-2 px-1 ">
                  Project Title
                </th>
                <th scope="col" className="text-sm font-bold  py-2 px-1 ">
                  Beneficiaries
                </th>
                <th scope="col" className="text-sm font-bold  py-2 px-1 ">
                  Venue
                </th>
                <th scope="col" className="text-center py-2 px-1 w-36">
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
export default OutreachStudList;
