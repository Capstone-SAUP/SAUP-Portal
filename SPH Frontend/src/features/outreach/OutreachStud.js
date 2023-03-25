import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAnexAQuery, useUpdateAnexAMutation } from "./anexA_ApiSlice";
import { STATUS } from "../../config/status";
import { memo } from "react";

const OutreachStud = ({ outreachId }) => {
  const { anexA } = useGetAnexAQuery("outreachList", {
    selectFromResult: ({ data }) => ({
      anexA: data?.entities[outreachId],
    }),
  });
  // console.log(anexA);
  const navigate = useNavigate();

  const allOutreach = { ...anexA };

  const handleView = () => navigate(`/dash/student/view/${allOutreach.id}`);
  const handleReport = () =>
    navigate(`/dash/student/reports/${allOutreach.id}`);

  const [updateOutreach, { isLoading, isSuccess }] = useUpdateAnexAMutation();

  const onCompletedChanged = (e) => setCompleted(e.target.value);

  const [status, setCompleted] = useState(allOutreach.status);
  const [originalStatus] = useState(allOutreach.status);
  const [outreach_id, setOutreach_id] = useState(allOutreach.id);

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

  const list = Object.values(STATUS).map((status) => {
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

  if (allOutreach) {
    const created = new Date(allOutreach.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const updated = new Date(allOutreach.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    // const handleEdit = () => navigate(`/dash/outreach/${outreachId}`)

    return (
      <tr className="text-left border px-8">
        <td className="px-6 text-sm font-medium text-gray-900">
          {allOutreach.user}
        </td>
        <td className="text-sm font-medium text-gray-900">
          {allOutreach.fullname}
        </td>
        <td className="text-sm font-medium text-gray-900 pl-5">
          {allOutreach.department}
        </td>
        <td className="whitespace-nowrap text-sm font-medium text-gray-900">
          <select
            id="roles"
            name="roles"
            className={`form__select bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg`}
            value={status}
            onChange={onCompletedChanged}
          >
            {list}
          </select>
          <button
            className={`text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800
          ${status == originalStatus && "hidden"}`}
            title="Save"
            onClick={onSaveOutreachClicked}
          >
            Save
          </button>
        </td>
        <td className="text-sm font-medium text-gray-900">{created}</td>
        <td className="text-sm font-medium text-gray-900">
          {allOutreach.project_title}
        </td>
        <td className="text-sm font-medium text-gray-900">
          {allOutreach.target_beneficiary}
        </td>
        <td className="text-sm font-medium text-gray-900">
          {allOutreach.venue}
        </td>
        <td className="text-sm font-medium text-gray-900">
          {/* <button className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                        onClick={handleEdit}> 
                                            Edit
                    </button> */}
          <button
            className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
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

const memoizedOutreach = memo(OutreachStud);

export default memoizedOutreach;
