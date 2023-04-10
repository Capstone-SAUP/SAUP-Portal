import { useState, useEffect } from "react";
import { useAddNewAnexBMutation } from "../outreach/anexB_ApiSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { STATUS } from "../../config/status";
import { useGetUsersQuery } from "../users/usersApiSlice";
import { current } from "@reduxjs/toolkit";

const NewEmployeeOutreach = ({ filteredOutreach, users }) => {
  const navigate = useNavigate();
  const { user_id } = useAuth();
  const { id } = useParams();

  const { object_id, user_ids, listdepartment, fullname } = useGetUsersQuery(
    "usersList",
    {
      selectFromResult: ({ data }) => ({
        object_id: data?.ids.map((id) => data?.entities[id].id),
        user_ids: data?.ids.map((id) => data?.entities[id].user_id),
        fullname:
          data?.ids.map((id) => data?.entities[id].firstname) +
          " " +
          data?.ids.map((id) => data?.entities[id].lastname),

        listdepartment: data?.ids.map((id) => data?.entities[id].department),
      }),
    }
  );

  const getCurrentUser = () => {
    try {
      const currentUser = user_ids.indexOf(user_id);
      const currentUserObjectId = object_id[currentUser];
      return currentUserObjectId;
    } catch (error) {}
  };
  let getCurrentDept = () => {
    try {
      let currentUser = user_ids.indexOf(user_id);
      let currentDeptID = listdepartment[currentUser];
      return currentDeptID[0];
    } catch (error) {}
  };

  const current_user = getCurrentUser();
  const [createEmployeeOutreach, { isSuccess, isError, error }] =
    useAddNewAnexBMutation();
  const [user] = useState(current_user);
  const [department] = useState(getCurrentDept());
  const [sponsor_dept, setSponsor_Dept] = useState("");
  const [project_title, setProject_Title] = useState("");
  const [target_beneficiary, setBeneficiaries] = useState("");
  const [venue, setVenue] = useState("");
  const [obj1, setObj1] = useState("");
  const [ojb2, setObj2] = useState("");
  const [obj3, setObj3] = useState("");
  const [act1, setAct1] = useState("");
  const [act2, setAct2] = useState("");
  const [act3, setAct3] = useState("");
  const [respon_per1, setRespon_per1] = useState("");
  const [respon_per2, setRespon_per2] = useState("");
  const [respon_per3, setRespon_per3] = useState("");
  const [budget_req1, setBudget_req1] = useState("");
  const [budget_req2, setBudget_req2] = useState("");
  const [budget_req3, setBudget_req3] = useState("");
  const [time_frame1, setTime_frame1] = useState("");
  const [time_frame2, setTime_frame2] = useState("");
  const [time_frame3, setTime_frame3] = useState("");
  const [output1, setOutput1] = useState("");
  const [output2, setOutput2] = useState("");
  const [output3, setOutput3] = useState("");
  const [proj_rep, setProj_rep] = useState("");
  const [designation1, setDesignation1] = useState("");
  const [cscb_rep, setCscb_rep] = useState("");
  const [dept_rep, setDept_rep] = useState("");
  const [dean, setDean] = useState("");
  const [designation2, setDesignation2] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setSponsor_Dept("");
      setProject_Title("");
      setBeneficiaries("");
      setVenue("");
      setObj1("");
      setObj2("");
      setObj3("");
      setAct1("");
      setAct2("");
      setAct3("");
      setRespon_per1("");
      setRespon_per2("");
      setRespon_per3("");
      setBudget_req1("");
      setBudget_req2("");
      setBudget_req3("");
      setTime_frame1("");
      setTime_frame2("");
      setTime_frame3("");
      setOutput1("");
      setOutput2("");
      setOutput3("");
      setProj_rep("");
      setDesignation1("");
      setCscb_rep("");
      setDept_rep("");
      setDean("");
      setDesignation2("");
    }
  }, [isSuccess]);

  const onSponsor_DeptChanged = (e) => setSponsor_Dept(e.target.value);
  const onProject_TitleChanged = (e) => setProject_Title(e.target.value);
  const onBeneficiariesChanged = (e) => setBeneficiaries(e.target.value);
  const onVenueChanged = (e) => setVenue(e.target.value);
  const onObj1Changed = (e) => setObj1(e.target.value);
  const onObj2Changed = (e) => setObj2(e.target.value);
  const onObj3Changed = (e) => setObj3(e.target.value);
  const onact1Changed = (e) => setAct1(e.target.value);
  const onact2Changed = (e) => setAct2(e.target.value);
  const onact3Changed = (e) => setAct3(e.target.value);
  const onRespon_per1Changed = (e) => setRespon_per1(e.target.value);
  const onRespon_per2Changed = (e) => setRespon_per2(e.target.value);
  const onRespon_per3Changed = (e) => setRespon_per3(e.target.value);
  const onBudgetreq1Changed = (e) => setBudget_req1(e.target.value);
  const onBudgetreq2Changed = (e) => setBudget_req2(e.target.value);
  const onBudgetreq3Changed = (e) => setBudget_req3(e.target.value);
  const ontimeframe1Changed = (e) => setTime_frame1(e.target.value);
  const ontimeframe2Changed = (e) => setTime_frame2(e.target.value);
  const ontimeframe3Changed = (e) => setTime_frame3(e.target.value);
  const onOutput1Changed = (e) => setOutput1(e.target.value);
  const onOutput2Changed = (e) => setOutput2(e.target.value);
  const onOutput3Changed = (e) => setOutput3(e.target.value);
  const onProj_repChanged = (e) => setProj_rep(e.target.value);
  const onDesignation1Changed = (e) => setDesignation1(e.target.value);
  const OnCscbChanged = (e) => setCscb_rep(e.target.value);
  const OnDept_repChanged = (e) => setDept_rep(e.target.value);
  const OnDeanChanged = (e) => setDean(e.target.value);
  const OnDesignation2Changed = (e) => setDesignation1(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onSaveReportClicked = async (e) => {
    e.preventDefault();
    await createEmployeeOutreach({
      user,
      department,
      sponsor_dept,
      project_title,
      target_beneficiary,
      venue,
      obj1,
      ojb2,
      obj3,
      act1,
      act2,
      act3,
      respon_per1,
      respon_per2,
      respon_per3,
      budget_req1,
      budget_req2,
      budget_req3,
      time_frame1,
      time_frame2,
      time_frame3,
      output1,
      output2,
      output3,
      proj_rep,
      designation1,
      cscb_rep,
      dept_rep,
      dean,
      designation2,
    });
    alert("Saved!");
    navigate("/dash/employee");
  };

  const list = Object.values(STATUS).map((status) => {
    return (
      <option key={status} value={status}>
        {" "}
        {status}
      </option>
    );
  });

  const errClass = isError ? "errmsg" : "offscreen";

  const errContent = error?.data?.message ?? "";

  const content = (
    <>
      <p className={errClass}>{errContent}</p>
<form className="h-full full grid gap-3 w-screen md:px-20 text-black">
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl">
                Community Extension Service Project Proposal Form
              </h2>
              <p className="mb-6 text-base">
                This form is for HAU employees’ use and should be submitted a
                month before the activity.
              </p>

              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-3">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-9">
                      <div className="md:col-span-2 md:row-span-4 text-gray-600">
                        <div className="">
                          <p className="font-medium text-lg">
                            Community Extension Service Project Proposal Form
                          </p>
                          <p>Please fill out all the blank fields.</p>
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="sponsor_dept">
                          Sponsoring Department(s)/ Proponent(s) :
                        </label>
                        <input
                          type="text"
                          name="sponsor_dept"
                          id="sponsor_dept"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={sponsor_dept}
                          onChange={onSponsor_DeptChanged}
                        />
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="project_title">Project Title :</label>
                        <input
                          type="text"
                          name="project_title"
                          id="project_title"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={project_title}
                          onChange={onProject_TitleChanged}
                        />
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="target_beneficiary">
                          Target Beneficiaries :
                        </label>
                        <input
                          type="text"
                          name="target_beneficiary"
                          id="target_beneficiary"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={target_beneficiary}
                          onChange={onBeneficiariesChanged}
                        />
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="venue">Venue of CES Activity :</label>
                        <input
                          type="text"
                          name="venue"
                          id="venue"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={venue}
                          onChange={onVenueChanged}
                        />
                      </div>

                      <div className="md:col-span-2 md:row-span-5 text-gray-600">
                        <div className="">
                          <p className="font-medium text-lg">
                            Proposed Action Plan:
                            </p>
                        </div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1">
                          <label htmlFor="country">Objectives</label>
                          <input
                            id="prep_per1"
                            name="prep_per1"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={obj1}
                            onChange={onObj1Changed}
                          ></input>
                          <input
                            id="prep_per2"
                            name="prep_per2"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={ojb2}
                            onChange={onObj2Changed}
                          ></input>
                          <input
                            id="prep_per3"
                            name="prep_per3"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={obj3}
                            onChange={onObj3Changed}
                          ></input>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="country">Activities</label>
                          <input
                            id="prep_per1"
                            name="prep_per1"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={act1}
                            onChange={onact1Changed}
                          ></input>
                          <input
                            id="prep_per2"
                            name="prep_per2"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={act2}
                            onChange={onact2Changed}
                          ></input>
                          <input
                            id="prep_per3"
                            name="prep_per3"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={act3}
                            onChange={onact3Changed}
                          ></input>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="country">Responsible Person(s)</label>
                          <input
                            id="prep_per1"
                            name="prep_per1"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={respon_per1}
                            onChange={onRespon_per1Changed}
                          ></input>
                          <input
                            id="prep_per2"
                            name="prep_per2"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={respon_per2}
                            onChange={onRespon_per2Changed}
                          ></input>
                          <input
                            id="prep_per3"
                            name="prep_per3"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={respon_per3}
                            onChange={onRespon_per3Changed}
                          ></input>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="country">Time Frame</label>
                          <input
                            id="prep_per1"
                            name="prep_per1"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={time_frame1}
                            onChange={ontimeframe1Changed}
                          ></input>
                          <input
                            id="prep_per2"
                            name="prep_per2"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={time_frame2}
                            onChange={ontimeframe2Changed}
                          ></input>
                          <input
                            id="prep_per3"
                            name="prep_per3"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={time_frame3}
                            onChange={ontimeframe3Changed}
                          ></input>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="country">Output</label>
                          <input
                            id="prep_per1"
                            name="prep_per1"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={output1}
                            onChange={onOutput1Changed}
                          ></input>
                          <input
                            id="prep_per2"
                            name="prep_per2"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={output2}
                            onChange={onOutput2Changed}
                          ></input>
                          <input
                            id="prep_per3"
                            name="prep_per3"
                            className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                            value={output3}
                            onChange={onOutput3Changed}
                          ></input>
                        </div>
                      </div>

                      <div className="md:col-span-2 text-base font-semibold text-gray-600">
                        Prepared by:
                      </div>

                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of Project Organizer or CSCB Representative
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={proj_rep}
                            onChange={onProj_repChanged}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Designation</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={designation1}
                            onChange={onDesignation1Changed}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-3 text-base font-semibold text-gray-600">
                        Noted by:
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of CSCB Representative for Departmental CES
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={cscb_rep}
                            onChange={OnCscbChanged}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">
                            Department Represented
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={dept_rep}
                            onChange={OnDept_repChanged}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-1"></div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of Dean or Cluster Head
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={dean}
                            onChange={OnDeanChanged}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Designation</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                            value={designation2}
                            onChange={OnDesignation2Changed}
                          />
                        </div>
                      </div>

                      <div className="md:col-span-9 mt-5 text-right">
                        <div className="text-center">
                          <button
                            className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                            title="Save"
                            onClick={onSaveReportClicked}
                          >
                            Submit Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
  return content;
};

export default NewEmployeeOutreach;
