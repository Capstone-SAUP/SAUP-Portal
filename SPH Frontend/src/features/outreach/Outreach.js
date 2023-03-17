import { useNavigate } from "react-router-dom";
import { useGetAnexBQuery } from "./anexB_ApiSlice";
import { useGetAnexAQuery } from "./anexA_ApiSlice";
import { memo } from "react";
import { STATUS } from "../../config/status";
import { useState, useEffect } from "react";
import {
  useUpdateAnexBMutation,
} from "./anexB_ApiSlice";
import { Link } from "react-router-dom";

const Outreach = ({ outreachId }) => {
  const { anexA } = useGetAnexAQuery("outreachList", {
    selectFromResult: ({ data }) => ({
      anexA: data?.entities[outreachId],
    }),
  });

  const { anexB } = useGetAnexBQuery("outreachList", {
    selectFromResult: ({ data }) => ({
      anexB: data?.entities[outreachId],
    }),
  });

  const navigate = useNavigate();

  const allOutreach = { ...anexA, ...anexB };
  // const [status, setStatus] = useState(allOutreach.status);

  // const handleStatusChange = (event) => {
  //   setStatus(event.target.value);
  //   allOutreach.status = event.target.value;
  // };

  const [updateOutreach, { isLoading, isSuccess }] =
  useUpdateAnexBMutation();



  const [status, setCompleted] = useState(allOutreach.status);

  useEffect(() => {
    if (isSuccess ) {
      setCompleted("");
    }
  }, [isSuccess]);

  const onCompletedChanged = (e) => setCompleted(e.target.value);

  const canSave = !isLoading;

  const onSaveOutreachClicked = async (e) => {
    if (canSave) {
      await updateOutreach({
        id: allOutreach.id,
        status,
      });
    } else {
      await updateOutreach({ status });
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

  const handleEdit = () =>
    navigate(
      `/dash/outreach/view/type-${allOutreach.user_role}/${allOutreach.id}`
    );

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
        <td className="whitespace-nowrap text-sm font-medium text-gray-900">
          <select value={status} onChange={onCompletedChanged}>
            {list}
          </select>
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
        <td className="whitespace-nowrap text-sm font-medium text-gray-900"></td>
        <td className="text-sm font-medium text-gray-900">
          {/* <button className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                        onClick={handleEdit}> 
                                            Edit
                    </button> */}
          <button
            className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            onClick={handleEdit}
          >
            Form
          </button>
          <button
            className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            title="Save"
            onClick={onSaveOutreachClicked}
            disabled={!canSave}
          >
            Save
          </button>
        </td>
      </tr>
    );
  } else return null;
};

const memoizedOutreach = memo(Outreach);

export default memoizedOutreach;
