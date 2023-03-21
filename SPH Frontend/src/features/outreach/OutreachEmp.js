import { useNavigate } from "react-router-dom";
import { useGetAnexBQuery } from "./anexB_ApiSlice";
import { memo } from "react";

const OutreachEmp = ({ outreachId }) => {
    const { anexB } = useGetAnexBQuery("outreachList", {
        selectFromResult: ({ data }) => ({
            anexB: data?.entities[outreachId],
        }),
    });
// console.log(anexB);
    const navigate = useNavigate();

    const allOutreach = { ...anexB };

    const handleView = () => navigate(`/dash/employee/view/${allOutreach.id}`);
    const handleReport = () => navigate(`/dash/employee/reports/${allOutreach.id}`);

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
        const created = new Date(allOutreach.createdAt).toLocaleString(
            "en-US",
            { day: "numeric", month: "long" }
        );

        const updated = new Date(allOutreach.updatedAt).toLocaleString(
            "en-US",
            { day: "numeric", month: "long" }
        );

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
              {allOutreach.status}
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
            <td className="text-sm flex font-medium grid-cols-2 text-gray-900">
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

const memoizedOutreach = memo(OutreachEmp);

export default memoizedOutreach;
