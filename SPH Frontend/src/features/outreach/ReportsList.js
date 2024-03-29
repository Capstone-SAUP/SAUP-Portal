import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { useGetAnexCQuery } from "./anexC_ApiSlice";
import { Link } from "react-router-dom";
import Reports from "./Reports";

const ReportsList = () => {
  useTitle("SAUP Portal: Outreach List");

  const navigate = useNavigate();

  const { user_id, isAdmin, roles } = useAuth();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [department, setDepartment] = useState("");

  const {
    data: anexC,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAnexCQuery("outreachList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  const { test, name, outreach_status, user_dept } = useGetAnexCQuery(
    "outreachList",
    {
      selectFromResult: ({ data }) => ({
        test: data?.ids.map((id) => data?.entities[id]).id,
        name: data?.ids.map((id) => data?.entities[id].fullname),
        outreach_status: data?.ids.map((id) => data?.entities[id].status),
        // user_dept: data?.ids.map((id) => data?.entities[id].department),
      }),
    }
  );

  let content;

  if (isLoading) content = <PulseLoader color={"#FFF"} />;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const handleOutreach = () => navigate(`/dash/outreach/new`);

    const { ids, entities } = anexC;
    let ids_C = ids;
    let entities_C = entities;

    let user_role = entities_C.user_role;
    let filteredIds;
    if (isAdmin) {
      filteredIds = [...ids_C];
    }
    if (isAdmin && search !== "") {
      filteredIds = ids_C.filter((outreachId) =>
        entities_C[outreachId].fullname.toLowerCase().includes(search)
      );
    }
    // if (isAdmin && status !== "All") {
    //   filteredIds = ids_C.filter((outreachId) =>
    //     entities_C[outreachId].status.includes(status)
    //   );
    // }
    // if (isAdmin && department !== "All") {
    //   filteredIds = ids_C.filter((outreachId) =>
    //     entities_C[outreachId].department.includes(department)
    //   );
    // }
    if (!isAdmin) {
      filteredIds = ids_C.filter(
        (outreachId) => entities_C[outreachId].user === user_id
      );
      if (!isAdmin && search !== "") {
        filteredIds = ids_C.filter(
          (outreachId) =>
            entities_C[outreachId].fullname.toLowerCase().includes(search) &&
            entities_C[outreachId].user === user_id
        );
      }
      // if (!isAdmin && status !== "All") {
      //   filteredIds = ids_C.filter(
      //     (outreachId) =>
      //       entities_C[outreachId].status.includes(status) &&
      //       entities_C[outreachId].user === user_id
      //   );
      // }
      // if (!isAdmin && department !== "All") {
      //   filteredIds = ids_C.filter(
      //     (outreachId) =>
      //       entities_C[outreachId].department.includes(department) &&
      //       entities_C[outreachId].user === user_id
      //   );
      // }
    }

    let noOutreachReport = null;
    if (filteredIds.length == 0) {
      noOutreachReport = (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, no Implementation Report was found.
              </p>
              <p className="mt-4 mb-8 dark:text-gray-400">
                You first need to submit an Outreach Proposal and get it
                Approved.
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
      ids_C?.length &&
      filteredIds.map((reportId) => (
        <Reports key={reportId} reportId={reportId} />
      ));

    content = (
      <>
        <div className="text-2xl font-semibold">
          Implementation Reports
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
                  // onChange={(e) => setDepartment(e.target.value)}
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
                  <option value="All">All</option>
                  <option value="All">Oldest</option>
                  <option value="All">Latest</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
        <div className="w-full border rounded-lg shadow-md overflow-hidden shadow-gray-400">
          <table className="w-full text-sm text-left table-fixed">
            <thead className="bg-gray-300">
              <tr>
                <th scope="col" className="text-sm font-bold py-1 px-3 ">
                  ID
                </th>
                <th scope="col" className="text-sm font-bold py-1 px-3 pr-14">
                  Full Name
                </th>
                <th scope="col" className="text-sm font-bold py-1 px-3 ">
                  Department
                </th>
                <th scope="col" className="text-sm font-bold py-1 px-3 ">
                  Date Implemented
                </th>
                <th scope="col" className="text-sm font-bold py-1 px-3 ">
                  Report Created
                </th>
                <th scope="col" className="text-sm font-bold py-1 px-3 ">
                  Project Title
                </th>
                <th scope="col" className="text-sm font-bold py-1 px-3 ">
                  Beneficiaries
                </th>
                <th scope="col" className="text-sm font-bold py-1 px-3 ">
                  Venue
                </th>
                <th scope="col" className="py-1 px-3 w-40">
                  Option
                </th>
              </tr>
            </thead>
            <tbody>{tableContent}</tbody>
          </table>
          {noOutreachReport}
        </div>
      </>
    );
  }

  return content;
};
export default ReportsList;
