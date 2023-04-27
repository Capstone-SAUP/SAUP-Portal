import { useEffect, useState } from "react";
import { useGetAnexBQuery, useUpdateAnexBMutation } from "./anexB_ApiSlice";
import { IoSend } from "react-icons/io5"
import { STATUS } from "../../config/status";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import useAuth from "../../hooks/useAuth";

const OutreachEmp = ({ outreachId }) => {

  const { anexB } = useGetAnexBQuery("outreachList", {
    selectFromResult: ({ data }) => ({
      anexB: data?.entities[outreachId],
    }),
  });

  const { roles } = useAuth();
  const navigate = useNavigate();

  const allOutreach = { ...anexB };

  const handleView = () => navigate(`/dash/employee/view/${allOutreach.id}`);
  const handleReport = () => navigate(`/dash/employee/reports/${allOutreach.id}`);

  const [updateOutreach, { isLoading, isSuccess }] = useUpdateAnexBMutation();

  const onCompletedChanged = (e) => setCompleted(e.target.value);

  const [status, setCompleted] = useState(allOutreach.status);
  const [originalStatus] = useState(allOutreach.status);
  const [outreach_id, setOutreach_id] = useState(allOutreach.id);
  const currentStatusIndex = Object.values(STATUS).indexOf(allOutreach.status);
  // console.log(outreach_id);
  useEffect(() => {
    if (isSuccess) {
      setCompleted("");
    }
  }, [isSuccess]);

  const canSave = !isLoading;
  const onSaveOutreachClicked = async (e) => {
    if (canSave) {
      await updateOutreach({
        id: outreach_id,
        status,
      });
      window.location.reload(true);
    } else {
      await updateOutreach({ id: outreach_id, status });
    }
  };

  const list = Object.values(STATUS)
    .slice(currentStatusIndex)
    .map((status) => {
      return (
        <option key={status} value={status}>
          {" "}
          {status}
        </option>
      );
    });
  let ReportButton = null;
  if (allOutreach.status == "Completed") {
    ReportButton = (
      <button
        className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-2.5 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        onClick={handleReport}
      >
        Report
      </button>
    );
  }

  let StatusButton = null;
  if (roles == "Admin" && originalStatus != "Completed") {
    StatusButton = (
      <select
        id="roles"
        name="roles"
        className={`w-3/4 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg`}
        value={status}
        onChange={onCompletedChanged}
      >
        {list}
      </select>
    );
  } else {
    StatusButton = status;
  }
  
  if (allOutreach) {
    const created = new Date(allOutreach.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const updated = new Date(allOutreach.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    return (
      <tr className="text-left border px-8 max-w-screen-lg">
        <td className="text-sm font-medium text-gray-900 px-2 py-1">
          {allOutreach.user}
        </td>
        <td className="text-sm font-medium text-gray-900 px-2 py-1">
          {allOutreach.fullname}
        </td>
        <td className="text-sm font-medium text-gray-900 px-2 py-1">
          {allOutreach.department}
        </td>
        <td className="whitespace-nowrap text-sm font-medium text-gray-900 px-2 py-1 pr-4">
          {StatusButton}
          <button
            className={`inline-flex text-2xl text-red-900 align-middle ml-2
          ${status == originalStatus && "hidden"}`}
            title="Save"
            onClick={onSaveOutreachClicked}
          >
            <IoSend/>
          </button>
        </td>
        <td className="text-sm font-medium text-gray-900 px-2 py-1">
          {created}</td>
        <td className="text-sm font-medium text-gray-900 px-2 py-1">
          {allOutreach.project_title}
        </td>
        <td className="text-sm font-medium text-gray-900 px-2 py-1">
          {allOutreach.target_beneficiary}
        </td>
        <td className="text-sm font-medium  text-gray-900 px-2 py-1">
          {allOutreach.venue}
        </td>
        <td className="text-sm flex font-medium grid-cols-2 text-gray-900">
          <button
            className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-2 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            onClick={handleView}
          >
            View
          </button>
          {ReportButton}
        </td>
      </tr>
    );
  } else return null;
};

const memoizedOutreach = memo(OutreachEmp);

export default memoizedOutreach;
