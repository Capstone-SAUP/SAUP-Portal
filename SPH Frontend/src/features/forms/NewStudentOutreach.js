import { useEffect, useRef, useState } from "react";
import { Form, Viewer, Template, checkTemplate } from "@pdfme/ui";
import { generate } from "@pdfme/generator";
import {
  getFontsData,
  getTemplate,
  getTemplateFromJsonFile,
  isJsonString,
} from "./helper";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewAnexAMutation } from "../outreach/anexA_ApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";
import useAuth from "../../hooks/useAuth";
import { current } from "@reduxjs/toolkit";

function NewStudentOutreach() {
  let navigate = useNavigate();
  let { user_id } = useAuth();
  let [addNewAnexA] = useAddNewAnexAMutation();

  let { object_id, user_ids, listdepartment, lastname } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      object_id: data?.ids.map((id) => data?.entities[id].id),
      user_ids: data?.ids.map(
        (id) => data?.entities[id].user_id
      ),
      lastname: data?.ids.map(
        (id) => data?.entities[id].lastname
      ),
      listdepartment: data?.ids.map(
        (id) => data?.entities[id].department
      ),

    }),
  });

  const [createStudentOutreach, { isSuccess, isError, error }] =
  useAddNewAnexAMutation();

//   console.log(object_id[currentUser]);

// let [userId, setUserId] = useState(users[0].id);
//   let [mode, setMode] = useState<Mode>(
//     (localStorage.getItem("mode") as Mode) ?? "form"
//   );

  let getCurrentUser = () => {
    try {
      let currentUser = user_ids.indexOf(user_id);
      let currentUserObjectId = object_id[currentUser];
      return currentUserObjectId;
    } catch (error) {}
  };
const currentuser = getCurrentUser();
  let getCurrentDept = () => {
    try {
      let currentUser = user_ids.indexOf(user_id);
      let currentDeptID = listdepartment[currentUser];
      return currentDeptID[0];
    } catch (error) {}
  };

  //     let { users } = useGetUsersQuery("usersList", {
  //       selectFromResult: ({ data }) => ({
  //           users: data?.ids.map((id: string | number) => data?.entities[id])
  //       }),
  //   });
//   let onSaveAnexClicked = async () => {
//     if (ui.current) {
//       let inputs = ui.current.getInputs();
//       // console.log(inputs);
//       // localStorage.setItem("inputs", JSON.stringify(inputs));
//       inputs[0]["user"] = getCurrentUser();
//       inputs[0]["department"] = getCurrentDept();
//       // inputs[0].'user_id' = [{"temp":"100", "humid":"12"}];

//       // inputs.push({"user_id":"111"});
//       // console.log(inputs.unshift("user_id"));

//       try {
//         if (window.location.href.match("/view-anex-A")) {
//           await addNewAnexA(inputs[0]);
//       alert("Saved!");
//       navigate("/dash/student");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

  const [user] = useState(getCurrentUser())
  const [department] = useState(getCurrentDept())
  const [name_org, setname_org] = useState("");
  const [date_est, setdate_est] = useState("");
  const [designated_per1, setdesignated_per1] = useState("");
  const [designated_per2, setdesignated_per2] = useState("");
  const [designated_per3, setdesignated_per3] = useState("");
  const [designated_per4, setdesignated_per4] = useState("");
  const [position_per1, setposition_per1] = useState("");
  const [position_per2, setposition_per2] = useState("");
  const [position_per3, setposition_per3] = useState("");
  const [position_per4, setposition_per4] = useState("");
  const [contact_per1, setcontact_per1] = useState("");
  const [contact_per2, setcontact_per2] = useState("");
  const [contact_per3, setcontact_per3] = useState("");
  const [contact_per4, setcontact_per4] = useState("");
  const [no_members, setno_members] = useState("");
  const [org_skills, setorg_skills] = useState("");
  const [project_title, setproject_title] = useState("");
  const [purpose_activity, setpurpose_activity] = useState("");
  const [reason_community, setreason_community] = useState("");
  const [target_date, settarget_date] = useState("");
  const [no_beneficiaries, setno_beneficiaries] = useState("");
  const [venue, setvenue] = useState("");
  const [target_beneficiary, settarget_beneficiary] = useState("");
  const [class_outreachdole, setclass_outreachdole] = useState("");
  const [class_semi_dev, setclass_semi_dev] = useState("");
  const [class_dev, setclass_dev] = useState("");
  const [target_obj, settarget_obj] = useState("");
  const [activities, setactivities] = useState("");
  const [time_frame, settime_frame] = useState("");
  const [beneficiaries, setbeneficiaries] = useState("");
  const [budget, setbudget] = useState("");
  const [prog_indicator, setprog_indicator] = useState("");
  
  useEffect(() => {
    if (isSuccess){
        setname_org("")
        setdate_est("")
        setdesignated_per1("")
        setdesignated_per2("")
        setdesignated_per3("")
        setdesignated_per4("")
        setposition_per1("")
        setposition_per2("")
        setposition_per3("")
        setposition_per4("")
        setcontact_per1("")
        setcontact_per2("")
        setcontact_per3("")
        setcontact_per4("")
        setno_members("")
        setorg_skills("")
        setproject_title("")
        setpurpose_activity("")
        setreason_community("")
        settarget_date("")
        setno_beneficiaries("")
        setvenue("")
        settarget_beneficiary("")
        setclass_outreachdole("")
        setclass_semi_dev("")
        setclass_dev("")
        settarget_obj("")
        setactivities("")
        settime_frame("")
        setbeneficiaries("")
        setbudget("")
        setprog_indicator("")
        
    }
}, [isSuccess]);

const onname_orgChanged = (e) => setname_org(e.target.value);
const ondate_estChanged = (e) => setdate_est(e.target.value);
const ondesignated_per1Changed = (e) => setdesignated_per1(e.target.value);
const ondesignated_per2Changed = (e) => setdesignated_per2(e.target.value);
const ondesignated_per3Changed = (e) => setdesignated_per3(e.target.value);
const ondesignated_per4Changed = (e) => setdesignated_per4(e.target.value);
const onposition_per1Changed = (e) => setposition_per1(e.target.value);
const onposition_per2Changed = (e) => setposition_per2(e.target.value);
const onposition_per3Changed = (e) => setposition_per3(e.target.value);
const onposition_per4Changed = (e) => setposition_per4(e.target.value);
const oncontact_per1Changed = (e) => setcontact_per1(e.target.value);
const oncontact_per2Changed = (e) => setcontact_per2(e.target.value);
const oncontact_per3Changed = (e) => setcontact_per3(e.target.value);
const oncontact_per4Changed = (e) => setcontact_per4(e.target.value);
const onno_membersChanged = (e) => setno_members(e.target.value);
const onorg_skillsChanged = (e) => setorg_skills(e.target.value);
const onproject_titleChanged = (e) => setproject_title(e.target.value);
const onpurpose_activityChanged = (e) => setpurpose_activity(e.target.value);
const onreason_communityChanged = (e) => setreason_community(e.target.value);
const ontarget_dateChanged = (e) => settarget_date(e.target.value);
const onno_beneficiariesChanged = (e) => setno_beneficiaries(e.target.value);
const onvenueChanged = (e) => setvenue(e.target.value);
const ontarget_beneficiaryChanged = (e) => settarget_beneficiary(e.target.value);
const onclass_outreachdoleChanged = (e) => setclass_outreachdole(e.target.value);
const onclass_semi_devChanged = (e) => setclass_semi_dev(e.target.value);
const onclass_devChanged = (e) => setclass_dev(e.target.value);
const ontarget_objChanged = (e) => settarget_obj(e.target.value);
const onactivitiesChanged = (e) => setactivities(e.target.value);
const ontime_frameChanged = (e) => settime_frame(e.target.value);
const onbeneficiariesChanged = (e) => setbeneficiaries(e.target.value);
const onbudgetChanged = (e) => setbudget(e.target.value);
const onprog_indicatorChanged = (e) => setprog_indicator(e.target.value);

const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onSaveReportClicked = async (e) => {
    e.preventDefault();
  await createStudentOutreach({
    user,
    department,
    name_org,
    date_est,
    designated_per1,
    designated_per2,
    designated_per3,
    designated_per4,
    position_per1,
    position_per2,
    position_per3,
    position_per4,
    contact_per1,
    contact_per2,
    contact_per3,
    contact_per4,
    no_members,
    org_skills,
    project_title,
    purpose_activity,
    reason_community,
    target_date,
    no_beneficiaries,
    venue,
    target_beneficiary,
    class_outreachdole,
    class_semi_dev,
    class_dev,
    target_obj,
    activities,
    time_frame,
    beneficiaries,
    budget,
    prog_indicator,
  });
        alert("Saved!");
        navigate("/dash/student");
};

const errClass = isError ? "errmsg" : "offscreen";

const errContent = error?.data?.message ?? "";

const content = (
  <>
    {/* <img
        className=" w-1/2 h-screen float-right mix-blend-multiply object-cover "
        src={require("../../img/background.jpg")}
        alt="background"
      ></img> */}
    <p className={errClass}>{errContent}</p>
    <form className="h-full full grid gap-3 px-20 text-black">
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl">
              Student Organization Intake Form
            </h2>
            <p className="mb-6 text-base">
              This is intended for student initiated activities and should be
              submitted a week before the activity.
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                {/* <div className="text-gray-600">
                    <div className="mb-[756px]">
                      <p className="font-medium text-lg">Outreach Details</p>
                      <p>Please fill out all the blank fields.</p>
                    </div>
                    <div>
                      <p className="font-medium text-lg">
                        List of Actual Volunteers and Type of Participation :
                      </p>
                      <p>Please fill out all the blank fields.</p>
                    </div>
                  </div> */}

                <div className="lg:col-span-3">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-9">
                    <div className="md:col-span-2 md:row-span-5 text-gray-600">
                      <div className="">
                        <p className="font-medium text-lg">
                          Student Organization Intake Form
                        </p>
                        <p>Please fill out all the blank fields.</p>
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <label htmlFor="name_org">Name of Organization:</label>
                      <input
                        type="text"
                        name="name_org"
                        id="name_org"
                        className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                        value={name_org}
                        onChange={onname_orgChanged}
                      />
                    </div>
                    <div className="md:col-span-7">
                      <label htmlFor="date_est">Date Established :</label>
                      <input
                        type="text"
                        name="date_est"
                        id="date_est"
                        className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                        value={date_est}
                        onChange={ondate_estChanged}
                      />
                    </div>
                    <div className="md:col-span-4 text-base font-semibold text-gray-600">
                      {" "}
                      Designated Contact Person/s for Community Outreach
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                      <div className="md:col-span-2">
                        <label htmlFor="country">Name :</label>
                        <input
                          id="prep_per1"
                          name="prep_per1"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={designated_per1}
                          onChange={ondesignated_per1Changed}
                        >
                          {/* {options} */}
                        </input>
                        <input
                          id="prep_per2"
                          name="prep_per2"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={designated_per2}
                          onChange={ondesignated_per2Changed}
                        >
                          {/* {options} */}
                        </input>
                        <input
                          id="prep_per3"
                          name="prep_per3"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={designated_per3}
                          onChange={ondesignated_per3Changed}
                        >
                          {/* {options} */}
                        </input>
                        <input
                          id="prep_per4"
                          name="prep_per4"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={designated_per4}
                          onChange={ondesignated_per4Changed}
                        >
                          {/* {options} */}
                        </input>
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="country">Designation/Position :</label>
                        <select
                          id="user1"
                          name="user1"
                          className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={position_per1}
                          onChange={onposition_per1Changed}
                        >
                          <option value="Facilitator">Facilitator</option>
                          <option value="Participant">Participant</option>
                          <option value="Student">Student</option>
                          <option value="Employee">Employee</option>
                        </select>
                        <select
                          id="user2"
                          name="user2"
                          className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={position_per2}
                          onChange={onposition_per2Changed}
                        >
                          <option value="Facilitator">Facilitator</option>
                          <option value="Participant">Participant</option>
                          <option value="Student">Student</option>
                          <option value="Employee">Employee</option>
                        </select>
                        <select
                          id="user3"
                          name="user3"
                          className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={position_per3}
                          onChange={onposition_per3Changed}
                        >
                          <option value="Facilitator">Facilitator</option>
                          <option value="Participant">Participant</option>
                          <option value="Student">Student</option>
                          <option value="Employee">Employee</option>
                        </select>
                        <select
                          id="user4"
                          name="user4"
                          className={`bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={position_per4}
                          onChange={onposition_per4Changed}
                        >
                          <option value="Facilitator">Facilitator</option>
                          <option value="Participant">Participant</option>
                          <option value="Student">Student</option>
                          <option value="Employee">Employee</option>
                        </select>
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="country">Contact Number :</label>
                        <input
                          id="user1"
                          name="user1"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={contact_per1}
                          onChange={oncontact_per1Changed}
                        ></input>
                        <input
                          id="user1"
                          name="user1"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={contact_per2}
                          onChange={oncontact_per2Changed}
                        ></input>
                        <input
                          id="user1"
                          name="user1"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={contact_per3}
                          onChange={oncontact_per3Changed}
                        ></input>
                        <input
                          id="user1"
                          name="user1"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={contact_per4}
                          onChange={oncontact_per4Changed}
                        ></input>
                      </div>
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                      <div className="md:col-span-1">
                        <label htmlFor="country">No. of Members :</label>
                        <input
                          id="prep_per1"
                          name="prep_per1"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={no_members}
                          onChange={onno_membersChanged}
                        >
                          {/* {options} */}
                        </input>
                      </div>
                      <div className="md:col-span-3">
                        <label htmlFor="country">
                          Organizational Expertise/Skills :
                        </label>
                        <input
                          id="user1"
                          name="user1"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={org_skills}
                          onChange={onorg_skillsChanged}
                        ></input>
                      </div>
                    </div>
                    <div className="md:col-span-2 md:row-span-5 text-gray-600">
                      <div className="">
                        <p className="font-medium text-lg">
                          Outreach Information
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <label htmlFor="target_beneficiary">
                        Title of Activity :
                      </label>
                      <input
                        type="text"
                        name="target_beneficiary"
                        id="target_beneficiary"
                        className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                        value={project_title}
                        onChange={onproject_titleChanged}
                      />
                    </div>
                    <div className="md:col-span-7">
                      <label htmlFor="purpose_activity">
                        Purpose of Activity :
                      </label>
                      <input
                        type="text"
                        name="purpose_activity"
                        id="purpose_activity"
                        className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                        value={purpose_activity}
                        onChange={onpurpose_activityChanged}
                      />
                    </div>
                    <div className="md:col-span-7">
                      <label htmlFor="reason_community">
                        Reason for Choosing the Community/Sector :
                      </label>
                      <input
                        type="text"
                        name="reason_community"
                        id="reason_community"
                        className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                        value={reason_community}
                        onChange={onreason_communityChanged}
                      />
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-2">
                      <div>
                        <label htmlFor="target_date">Target Date/s :</label>
                        <input
                          type="text"
                          name="target_date"
                          id="target_date"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={target_date}
                          onChange={ontarget_dateChanged}
                        />
                      </div>
                      <div>
                        <label htmlFor="venue">Target Area/s :</label>
                        <input
                          type="text"
                          name="venue"
                          id="venue"
                          className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                          value={venue}
                          onChange={onvenueChanged}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                      <div className="md:col-span-3">
                        <label htmlFor="country">Target Beneficiary :</label>
                        <input
                          id="target_beneficiary"
                          name="target_beneficiary"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={target_beneficiary}
                          onChange={ontarget_beneficiaryChanged}
                        ></input>
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="no_beneficiaries">
                          No. of Beneficiaries :
                        </label>
                        <input
                          id="no_beneficiaries"
                          name="no_beneficiaries"
                          className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={no_beneficiaries}
                          onChange={onno_beneficiariesChanged}
                        ></input>
                      </div>
                    </div>
                    <div className="md:col-span-2 md:row-span-1 text-gray-600">
                      <div className="">
                        <p className="font-medium text-lg">
                          Classification of Community Extension Project
                        </p>
                        <p>Put x on the chosen classification</p>
                      </div>
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1">
                        <label htmlFor="class_outreachdole">
                          Outreach/Dole out :
                        </label>
                        <input
                          id="class_outreachdole"
                          name="class_outreachdole"
                          className={`h-10 bg-gray-50 border-2 w-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={class_outreachdole}
                          onChange={onclass_outreachdoleChanged}
                        ></input>
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="class_semi_dev">
                          Semi-Developmental :
                        </label>
                        <input
                          id="class_semi_dev"
                          name="class_semi_dev"
                          className={`h-10 bg-gray-50 border-2 w-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={class_semi_dev}
                          onChange={onclass_semi_devChanged}
                        ></input>
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="class_dev">Developmental :</label>
                        <input
                          id="class_dev"
                          name="class_dev"
                          className={`h-10 bg-gray-50 border-2 w-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          value={class_dev}
                          onChange={onclass_devChanged}
                        ></input>
                      </div>
                    </div>
                    <div className="md:col-span-2 md:row-span-4 text-gray-600">
                      <p className="font-medium text-lg">
                        Community Outreach Proposal
                      </p>
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1">
                      <div className="">
                        <label htmlFor="target_obj">Targets/Objectives :</label>
                        <textarea
                          type="textarea"
                          name="target_obj"
                          id="target_obj"
                          className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={target_obj}
                          onChange={ontarget_objChanged}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1">
                      <div className="">
                        <label htmlFor="activities">Activities :</label>
                        <textarea
                          type="textarea"
                          name="activities"
                          id="activities"
                          className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={activities}
                          onChange={onactivitiesChanged}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <label htmlFor="time_frame">Time Frame:</label>
                      <input
                        type="text"
                        name="time_frame"
                        id="time_frame"
                        className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50"
                        value={time_frame}
                        onChange={ontime_frameChanged}
                      />
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1">
                      <div className="">
                        <label htmlFor="beneficiaries">Beneficiaries :</label>
                        <textarea
                          type="textarea"
                          name="beneficiaries"
                          id="beneficiaries"
                          className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={beneficiaries}
                          onChange={onbeneficiariesChanged}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 md:row-span-4 text-gray-600"></div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1">
                      <div className="">
                        <label htmlFor="budget">Budget :</label>
                        <input
                          type="textarea"
                          name="budget"
                          id="budget"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={budget}
                          onChange={onbudgetChanged}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1">
                      <div className="">
                        <label htmlFor="prog_indicator">
                          Progress Indicators :
                        </label>
                        <textarea
                          type="textarea"
                          name="prog_indicator"
                          id="prog_indicator"
                          className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={prog_indicator}
                          onChange={onprog_indicatorChanged}
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
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
    </form>
  </>
);
  
  return content;
};

export default NewStudentOutreach;
