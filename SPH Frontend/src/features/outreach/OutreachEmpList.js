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
    if (isAdmin && search !== "") {
      filteredIds = ids_B.filter((outreachId) =>
        entities_B[outreachId].fullname.toLowerCase().includes(search)
      );
    }
    if (isAdmin && status !== "All") {
      filteredIds = ids_B.filter((outreachId) =>
        entities_B[outreachId].status.includes(status)
      );
    }
    if (isAdmin && department !== "All") {
      filteredIds = ids_B.filter((outreachId) =>
        entities_B[outreachId].department.includes(department)
      );
    }
    if (!isAdmin) {
      filteredIds = ids_B.filter(
        (outreachId) => entities_B[outreachId].user === user_id
      );
      if (!isAdmin && search !== "") {
        filteredIds = ids_B.filter(
          (outreachId) =>
            entities_B[outreachId].fullname.toLowerCase().includes(search) &&
            entities_B[outreachId].user === user_id
        );
      }
      if (!isAdmin && status !== "All") {
        filteredIds = ids_B.filter(
          (outreachId) =>
            entities_B[outreachId].status.includes(status) &&
            entities_B[outreachId].user === user_id
        );
      }
      if (!isAdmin && department !== "All") {
        filteredIds = ids_B.filter(
          (outreachId) =>
            entities_B[outreachId].department.includes(department) &&
            entities_B[outreachId].user === user_id
        );
      }
    }

    let noOutreach = null;
    if (filteredIds.length == 0) {
      noOutreach = (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, no Outreach was found.
              </p>
              <p className="mt-4 mb-8 dark:text-gray-400 italic">
                Please contact your Facilitator to submit a Proposal for a
                Community Extension project.
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
          Employee Outreach Projects
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
                  <option value="Approved">Approved</option>
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                </select>
              </li>
              <li>
                <label className="py-10 text-sm font-bold">Sort By</label>
                <select className="mr-20 w-full z-1 block bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Date</option>
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
        <div className="w-full border rounded-lg shadow-md overflow-hidden shadow-gray-400">
          <table className="w-full text-sm text-left table-fixed">
            <thead className="bg-gray-300">
              <tr>
                <th scope="col" className="text-sm font-bold px-2 py-3 ">
                  ID
                </th>
                <th scope="col" className="text-sm font-bold px-2 py-3 pr-14">
                  Full Name
                </th>
                <th scope="col" className="text-sm font-bold px-2 py-3 ">
                  Department
                </th>
                <th scope="col" className="text-sm font-bold px-2 py-3 w-40">
                  Status
                </th>
                <th scope="col" className="text-sm font-bold px-2 py-3 ">
                  Date Created
                </th>
                <th scope="col" className="text-sm font-bold px-2 py-3 ">
                  Project Title
                </th>
                <th scope="col" className="text-sm font-bold px-2 py-3 ">
                  Beneficiaries
                </th>
                <th scope="col" className="text-sm font-bold px-2 py-3 ">
                  Venue
                </th>
                <th scope="col" className="text-center px-2 py-3 w-36">
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
