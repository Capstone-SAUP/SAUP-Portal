import { useState, useEffect } from "react";
import { useAddNewAnexCMutation } from "./anexC_ApiSlice";
import { useGetUsersQuery } from '../users/usersApiSlice'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { STATUS } from "../../config/status";
import { useGetAnexCQuery } from "./anexC_ApiSlice";
import { RxDividerHorizontal } from "react-icons/rx";

const ReportsView = () => {
  // window.addEventListener("beforeunload", function (event) {
  //   event.returnValue = "The information in the document will reset.";
  // });

  const { user_id } = useAuth();
  const { id } = useParams();

  const { anexC } = useGetAnexCQuery("reportList", {
    selectFromResult: ({ data }) => ({
      anexC: data?.entities[id],
    }),
  });
  const filteredOutreach = { ...anexC };
  console.log(anexC);

  const {prep_per1_name, prep_per2_name, prep_per3_name, prep_per4_name } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      prep_per1_name: data?.entities[filteredOutreach.prep_per1].firstname + " " + data?.entities[filteredOutreach.prep_per1].lastname,
      prep_per2_name: data?.entities[filteredOutreach.prep_per2].firstname + " " + data?.entities[filteredOutreach.prep_per2].lastname,
      prep_per3_name: data?.entities[filteredOutreach.prep_per3].firstname + " " + data?.entities[filteredOutreach.prep_per3].lastname,
      prep_per4_name: data?.entities[filteredOutreach.prep_per4].firstname + " " + data?.entities[filteredOutreach.prep_per4].lastname,
    }),
})

  const isprep_per1 = prep_per1_name === undefined ? "None" : prep_per1_name;
  const isprep_per2 = prep_per2_name === undefined ? "None" : prep_per2_name;
  const isprep_per3 = prep_per3_name === undefined ? "None" : prep_per3_name;
  const isprep_per4 = prep_per4_name === undefined ? "None" : prep_per4_name;
  const navigate = useNavigate();

  const [userId] = useState(user_id);
  const [sponsor_dept] = useState(filteredOutreach.sponsor_dept);
  const [project_title] = useState(filteredOutreach.project_title);
  const [target_beneficiary] = useState(filteredOutreach.target_beneficiary);
  const [accomp_obj] = useState(filteredOutreach.accomp_obj);
  const [venue] = useState(filteredOutreach.venue);
  const [date_implement] = useState(filteredOutreach.date_implement);
  const [brief_narrative] = useState(filteredOutreach.brief_narrative);
  const [topics] = useState(filteredOutreach.topics);
  const [speakers] = useState(filteredOutreach.speakers);
  const [prep_per1] = useState(prep_per1_name);
  const [prep_per2] = useState(prep_per2_name);
  const [prep_per3] = useState(prep_per3_name);
  const [prep_per4] = useState(prep_per4_name);
  const [prep_pos1] = useState(filteredOutreach.prep_pos1);
  const [prep_pos2] = useState(filteredOutreach.prep_pos2);
  const [prep_pos3] = useState(filteredOutreach.prep_pos3);
  const [prep_pos4] = useState(filteredOutreach.prep_pos4);
  const [prep_type1] = useState(filteredOutreach.prep_type1);
  const [prep_type2] = useState(filteredOutreach.prep_type2);
  const [prep_type3] = useState(filteredOutreach.prep_type3);
  const [prep_type4] = useState(filteredOutreach.prep_type4);
  const [prep_start1] = useState(filteredOutreach.prep_start1);
  const [prep_start2] = useState(filteredOutreach.prep_start2);
  const [prep_star3] = useState(filteredOutreach.prep_star3);
  const [prep_star4] = useState(filteredOutreach.prep_star4);
  const [prep_end1] = useState(filteredOutreach.prep_end1);
  const [prep_end2] = useState(filteredOutreach.prep_end2);
  const [prep_end3] = useState(filteredOutreach.prep_end3);
  const [prep_end4] = useState(filteredOutreach.prep_end4);
  const [implement_per1] = useState(filteredOutreach.implement_per1);
  const [implement_per2] = useState(filteredOutreach.implement_per2);
  const [implement_per3] = useState(filteredOutreach.implement_per3);
  const [implement_per4] = useState(filteredOutreach.implement_per4);
  const [implement_pos1] = useState(filteredOutreach.implement_pos1);
  const [implement_pos2] = useState(filteredOutreach.implement_pos2);
  const [implement_pos3] = useState(filteredOutreach.implement_pos3);
  const [implement_type1] = useState(filteredOutreach.implement_type1);
  const [implement_type2] = useState(filteredOutreach.implement_type2);
  const [implement_pos4] = useState(filteredOutreach.implement_pos4);
  const [implement_type3] = useState(filteredOutreach.implement_type3);
  const [implement_type4] = useState(filteredOutreach.implement_type4);
  const [implement_start1] = useState(filteredOutreach.implement_start1);
  const [implement_start2] = useState(filteredOutreach.implement_start2);
  const [implement_star3] = useState(filteredOutreach.implement_star3);
  const [implement_star4] = useState(filteredOutreach.implement_star4);
  const [implement_end1] = useState(filteredOutreach.implement_end1);
  const [implement_end2] = useState(filteredOutreach.implement_end2);
  const [implement_end3] = useState(filteredOutreach.implement_end3);
  const [implement_end4] = useState(filteredOutreach.implement_end4);
  const [post_per1] = useState(filteredOutreach.post_per1);
  const [post_per2] = useState(filteredOutreach.post_per2);
  const [post_per3] = useState(filteredOutreach.post_per3);
  const [post_per4] = useState(filteredOutreach.post_per4);
  const [post_pos1] = useState(filteredOutreach.post_pos1);
  const [post_pos2] = useState(filteredOutreach.post_pos2);
  const [post_pos3] = useState(filteredOutreach.post_pos3);
  const [post_type1] = useState(filteredOutreach.post_type1);
  const [post_type2] = useState(filteredOutreach.post_type2);
  const [post_pos4] = useState(filteredOutreach.post_pos4);
  const [post_type3] = useState(filteredOutreach.post_type3);
  const [post_type4] = useState(filteredOutreach.post_type4);
  const [post_start1] = useState(filteredOutreach.post_start1);
  const [post_start2] = useState(filteredOutreach.post_start2);
  const [post_star3] = useState(filteredOutreach.post_star3);
  const [post_star4] = useState(filteredOutreach.post_star4);
  const [post_end1] = useState(filteredOutreach.post_end1);
  const [post_end2] = useState(filteredOutreach.post_end2);
  const [post_end3] = useState(filteredOutreach.post_end3);
  const [post_end4] = useState(filteredOutreach.post_end4);
  const [learnings1] = useState(filteredOutreach.learnings1);
  const [learnings2] = useState(filteredOutreach.learnings2);
  const [learnings3] = useState(filteredOutreach.learnings3);
  const [learnings4] = useState(filteredOutreach.learnings4);
  const [learnings5] = useState(filteredOutreach.learnings5);
  const [strengths1] = useState(filteredOutreach.strengths1);
  const [strengths2] = useState(filteredOutreach.strengths2);
  const [strengths3] = useState(filteredOutreach.strengths3);
  const [strengths4] = useState(filteredOutreach.strengths4);
  const [strengths5] = useState(filteredOutreach.strengths5);
  const [weakness1] = useState(filteredOutreach.weakness1);
  const [weakness2] = useState(filteredOutreach.weakness2);
  const [weakness3] = useState(filteredOutreach.weakness3);
  const [weakness4] = useState(filteredOutreach.weakness4);
  const [weakness5] = useState(filteredOutreach.weakness5);
  const [improvement1] = useState(filteredOutreach.improvement1);
  const [improvement2] = useState(filteredOutreach.improvement2);
  const [improvement3] = useState(filteredOutreach.improvement3);
  const [improvement4] = useState(filteredOutreach.improvement4);
  const [improvement5] = useState(filteredOutreach.improvement5);
  const [act_partici1] = useState(filteredOutreach.act_partici1);
  const [act_partici2] = useState(filteredOutreach.act_partici2);
  const [act_partici3] = useState(filteredOutreach.act_partici3);
  const [particulars1] = useState(filteredOutreach.particulars1);
  const [particulars2] = useState(filteredOutreach.particulars2);
  const [particulars3] = useState(filteredOutreach.particulars3);
  const [amount1] = useState(filteredOutreach.amount1);
  const [amount2] = useState(filteredOutreach.amount2);
  const [amount3] = useState(filteredOutreach.amount3);
  const [amount_total] = useState(filteredOutreach.amount_total);
  const [image1] = useState(filteredOutreach.image1);
  const [caption1] = useState(filteredOutreach.caption1);
  const [caption2] = useState(filteredOutreach.caption2);
  const [image2] = useState(filteredOutreach.image2);
  console.log(filteredOutreach);
  const content = (
    <>
      <form className="h-full full grid gap-3 px-20 text-black">
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl">
                Implementation Report Form
              </h2>
              <p className="mb-6 text-base">
                The form is both for student and employee initiated activities
                and should be submitted within one (1) month after the activity.
              </p>

              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-3">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-9">
                      <div className="md:col-span-2 md:row-span-6 text-gray-600">
                        <div className="">
                          <p className="font-medium text-lg">
                            Outreach Details
                          </p>
                          <p>Please fill out all the blank fields.</p>
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="sponsor_dept">
                          Sponsoring Department(s)/ Proponent(s) :
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {sponsor_dept}
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="project_title">Project Title :</label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {project_title}
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="target_beneficiary">
                          Beneficiaries :
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {target_beneficiary}
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="accomp_obj">
                          Accomplished Objectives :
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {accomp_obj}
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="venue">Venue of CES Activity :</label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {venue}
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="date_implement">
                          Date/Time Implemented :
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {date_implement}
                        </div>
                      </div>
                      <div className="md:col-span-2"></div>
                      <div className="md:col-span-7">
                        <label htmlFor="brief_narrative">
                          Brief Narrative :
                        </label>
                        <div className="h-44 border mt-1 rounded px-4 w-full">
                          {brief_narrative}
                        </div>
                      </div>
                      <div className="md:col-span-2 text-gray-600">
                        <p className="font-medium text-lg">
                          Topic(s) Discussed and Resource
                          Speaker(s)/Facilitator(s),
                        </p>
                        <p>(if applicable)</p>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-2">
                        <div className="">
                          <label htmlFor="topics">Topics</label>
                          <div className="h-44 border mt-1 rounded px-4 w-full">
                            {topics}
                          </div>
                        </div>
                        <div className="">
                          <label htmlFor="speakers">Speakers</label>
                          <div className="h-44 border mt-1 rounded px-4 w-full">
                            {speakers}
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-6 text-gray-600">
                        <p className="font-medium text-lg">
                          List of Actual Volunteers and Type of Participation:
                        </p>
                      </div>
                      <div className="md:col-span-2 text-base font-semibold text-gray-600">
                        {" "}
                        Preparatory Phase
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1">
                          <label htmlFor="country">Name of Volunteer</label>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_per1}
                          </div>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_per2}
                          </div>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_per3}
                          </div>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_per4}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Position/Designation</label>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_pos1}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_pos2}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_pos3}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_pos4}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label className="truncate" htmlFor="country">Type of Participation</label>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_type1}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_type2}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_type3}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {prep_type4}
                          </div>
                        </div>
                        <div className="grid md:col-span-1 grid-cols-1 gap-x-1 md:grid-cols-2">
                          <div className="md:col-span-1">
                            <label className="truncate" htmlFor="country">Start Time</label>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {prep_start1}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {prep_start2}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {prep_star3}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {prep_star4}
                            </div>
                          </div>
                          <div className="md:col-span-1">
                            <label htmlFor="country">End Time</label>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {prep_end1}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {prep_end2}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {prep_end3}
                            </div>
                            <div
                              className={`bg-gray-50 mb-2 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {prep_end4}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 text-base font-semibold text-gray-600">
                        {" "}
                        Implementation Phase/Actual Conduct of CES
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1">
                          <label htmlFor="country">Name of Volunteer</label>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_per1}
                          </div>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_per2}
                          </div>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_per3}
                          </div>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_per4}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Position/Designation</label>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_pos1}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_pos2}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_pos3}
                          </div>
                          <div
                            className={`bg-gray-50 mb-2 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_pos4}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label className="truncate" htmlFor="country">Type of Participation</label>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_type1}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_type2}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_type3}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {implement_type4}
                          </div>
                        </div>
                        <div className="grid md:col-span-1 grid-cols-1 gap-x-1 md:grid-cols-2">
                          <div className="md:col-span-1">
                            <label className="truncate" htmlFor="country">Start Time</label>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {implement_start1}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {implement_start2}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {implement_star3}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {implement_star4}
                            </div>
                          </div>
                          <div className="md:col-span-1">
                            <label htmlFor="country">End Time</label>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {implement_end1}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {implement_end2}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {implement_end3}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {implement_end4}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 text-base font-semibold text-gray-600">
                        {" "}
                        Post Implementation (Includes Report Writing and
                        Evaluation)
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1">
                          <label htmlFor="country">Name of Volunteer</label>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_per1}
                          </div>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_per2}
                          </div>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_per3}
                          </div>
                          <div
                            className={`bg-gray-50 truncate border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_per4}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Position/Designation</label>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_pos1}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_pos2}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_pos3}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_pos4}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label className="truncate" htmlFor="country">Type of Participation</label>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_type1}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_type2}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_type3}
                          </div>
                          <div
                            className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                          >
                            {post_type4}
                          </div>
                        </div>
                        <div className="grid md:col-span-1 grid-cols-1 gap-x-1 md:grid-cols-2">
                          <div className="md:col-span-1">
                            <label className="truncate" htmlFor="country">Start Time</label>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {post_start1}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {post_start2}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {post_star3}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {post_star4}
                            </div>
                          </div>
                          <div className="md:col-span-1">
                            <label htmlFor="country">End Time</label>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {post_end1}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {post_end2}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {post_end3}
                            </div>
                            <div
                              className={`bg-gray-50 border-2 w-full h-10 border-gray-300 text-gray-900 text-sm rounded-lg`}
                            >
                              {post_end4}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-1"></div>
                      <div className="md:col-span-7">
                        <label htmlFor="country">Learnings/Insights:</label>
                        <div className="h-10 border mt-1 rounded px-4 w-full">
                          {learnings1}
                        </div>
                        <div className="h-10 border mt-1 rounded px-4 w-full">
                          {learnings2}
                        </div>
                        <div className="h-10 border mt-1 rounded px-4 w-full">
                          {learnings3}
                        </div>
                        <div className="h-10 border mt-1 rounded px-4 w-full">
                          {learnings4}
                        </div>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {learnings5}
                        </div>
                      </div>
                      <div className="md:col-span-2 text-gray-600">
                        <p className="font-medium text-lg">
                          Strengths, Weaknesses, Areas for Improvement:
                        </p>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-1">
                          <label htmlFor="country">Strengths</label>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {strengths1}
                          </div>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {strengths2}
                          </div>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {strengths3}
                          </div>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {strengths4}
                          </div>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {strengths5}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Weaknesses</label>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {weakness1}
                          </div>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {weakness2}
                          </div>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {weakness3}
                          </div>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {weakness4}
                          </div>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {weakness5}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Areas for Improvement</label>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {improvement1}
                          </div>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {improvement2}
                          </div>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {improvement3}
                          </div>
                          <div className="h-10 border mt-1 rounded px-4 w-full">
                            {improvement4}
                          </div>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {improvement5}
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-1"></div>
                      <div className="md:col-span-7">
                        <label htmlFor="country">
                          Actual Participation/Counterpart of the Partner
                          Community Served:
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {act_partici1}
                        </div>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {act_partici2}
                        </div>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                          {act_partici3}
                        </div>
                      </div>

                      <div className="md:col-span-2 md:row-span-6 text-gray-600">
                        <p className="font-medium text-lg">Financial Report:</p>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">Particulars</label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {particulars1}
                          </div>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {particulars2}
                          </div>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {particulars3}
                          </div>
                          <p className="text-right pt-3 text-base alig">
                            TOTAL:
                          </p>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Amount</label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {amount1}
                          </div>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {amount2}
                          </div>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {amount3}
                          </div>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {amount_total}
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 text-base font-semibold text-gray-600">
                        Prepared by:
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of Project Organizer or CSCB Representative
                          </label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {accomp_obj}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Designation</label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {accomp_obj}
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 text-base font-semibold text-gray-600">
                        Noted by:
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of Adviser for Student Organizations
                          </label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {accomp_obj}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">
                            Name of Student Organization
                          </label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {accomp_obj}
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of CSCB Representative for Departmental CES
                          </label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {accomp_obj}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">
                            Department Represented
                          </label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {accomp_obj}
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-1"></div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of Dean or Cluster Head
                          </label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {accomp_obj}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Designation</label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">
                            {accomp_obj}
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 text-gray-600">
                        <p className="font-medium text-lg">
                          Upload Documentation
                        </p>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-2">
                        <div className="flex justify-center mt-8">
                          <div className="w-full rounded-lg shadow-xl border">
                            <div className="m-4">
                              <label className="inline-block mb-2 text-gray-500">
                                File Upload
                              </label>
                              <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col w-full h-32 border-4 border-red-200 border-dashed">
                                  {image1}
                                </label>
                              </div>
                            </div>
                            <div className="flex justify-center p-2">
                              <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">{caption1}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center mt-8">
                          <div className="w-full rounded-lg shadow-xl border">
                            <div className="m-4">
                              <label className="inline-block mb-2 text-gray-500">
                                File Upload
                              </label>
                              <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col w-full h-32 border-4 border-red-200 border-dashed">
                                  {image1}
                                </label>
                              </div>
                            </div>
                            <div className="flex justify-center p-2">
                              <div className="h-10 border mb-2 mt-1 rounded px-4 w-full">{caption2}</div>
                            </div>
                          </div>
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

export default ReportsView;
