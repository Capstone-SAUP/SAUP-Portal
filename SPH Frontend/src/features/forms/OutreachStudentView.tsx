import { useEffect, useRef, useState } from "react";
import { Form, Viewer, Template, checkTemplate } from "@pdfme/ui";
import { generate } from "@pdfme/generator";
import {
  getFontsData,
  getTemplate,
  getTemplateFromJsonFile,
  isJsonString,
} from "./helper";
import { useNavigate, useLocation } from 'react-router-dom'
import { useUpdateAnexBMutation } from "../outreach/anexB_ApiSlice";
import { useUpdateAnexAMutation } from "../outreach/anexA_ApiSlice";
import { STATUS } from "../../config/status";
import useAuth from "../../hooks/useAuth";

type Mode = "form" | "viewer";

const initTemplate = () => {
  let template: Template = getTemplate();
  try {
    const templateString = localStorage.getItem("template");
    const templateJson = templateString
      ? JSON.parse(templateString)
      : getTemplate();
    checkTemplate(templateJson);
    template = templateJson as Template;
  } catch {
    localStorage.removeItem("template");
  }
  return template;
};


const OutreachStudentView = (filteredOutreach:any) =>  {

  
  const uiRef = useRef<HTMLDivElement | null>(null);
  const ui = useRef<Form | Viewer | null>(null);

  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem("mode") as Mode) ?? "viewer"
  );

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { roles } = useAuth();

  const [updateOutreachA] = useUpdateAnexAMutation();
  const [updateOutreachB] = useUpdateAnexBMutation();

  const [status, setCompleted] = useState(filteredOutreach["filteredOutreach"].status);
  const [originalStatus] = useState(filteredOutreach["filteredOutreach"].status);
  const [outreachId, setOutreach_id] = useState(filteredOutreach["filteredOutreach"]._id);
  console.log(outreachId);

  const onCompletedChanged = (e: { target: { value: any; }; }) => setCompleted(e.target.value);
  // const onOutreach_idChanged = (e: { target: { value: any; }; }) => setOutreach_id(e.target.value);

  const canSave = [status].every(Boolean);

  const onSaveOutreachClicked = async (e: any) => {
    
  if (canSave && pathname.match("/student/view")) {
      await updateOutreachA({
        id: outreachId,
        status,
      });
      navigate("/dash/student")
      window.location.reload();
    } else {
      await updateOutreachA({id: outreachId, status });
  }

    if (canSave && pathname.match("/employee/view")) {
      await updateOutreachB({
        id: outreachId,
        status,
      });
      navigate("/dash/employee")
      window.location.reload();
    } else {
      await updateOutreachB({id: outreachId, status });
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

  let StatusButton = null;
  if (roles == "Admin") {
    StatusButton = (
            <div className="w-full inline">
            <label className="text-base align-middle" htmlFor="user_id">
                Change Status: &nbsp;
            </label>
            <select
                id="status"
                name="roles"
                className={`form__select bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg`}
                value={status}
                onChange={onCompletedChanged}
            >
                {list}
            </select>
        </div>
    );
  }else{
    StatusButton = ("Current Status: "+status)
  }
  
  useEffect(() => {
    const template = initTemplate();
    let inputs = template.sampledata ?? [{}];
    try {
      const inputsString = [filteredOutreach["filteredOutreach"]];
      const inputsJson = inputsString
      inputs = inputsJson;
    } catch {
      localStorage.removeItem("inputs");
    }

    getFontsData().then((font) => {
      if (uiRef.current) {
        ui.current = new (mode === "viewer" ? Form : Viewer)({
          domContainer: uiRef.current,
          template,
          inputs,
          options: { font },
        });
      }
    });

    return () => {
      if (ui.current) {
        ui.current.destroy();
      }
    };
  }, [uiRef, mode]);

  const onGeneratePDF = async () => {
    if (ui.current) {
    const template = ui.current.getTemplate();
    const inputs = ui.current.getInputs();
    const font = await getFontsData();
    const pdf = await generate({ template, inputs, options: { font } });
    const blob = new Blob([pdf.buffer], { type: "application/pdf" });
      window.open(URL.createObjectURL(blob));
    }
  };

  const [name_org] = useState(filteredOutreach["filteredOutreach"].name_org);
  const [date_est] = useState(filteredOutreach["filteredOutreach"].date_est);
  const [designated_per1] = useState(filteredOutreach["filteredOutreach"].designated_per1);
  const [designated_per2] = useState(filteredOutreach["filteredOutreach"].designated_per2);
  const [designated_per3] = useState(filteredOutreach["filteredOutreach"].designated_per3);
  const [designated_per4] = useState(filteredOutreach["filteredOutreach"].designated_per4);
  const [position_per1] = useState(filteredOutreach["filteredOutreach"].position_per1);
  const [position_per2] = useState(filteredOutreach["filteredOutreach"].position_per2);
  const [position_per3] = useState(filteredOutreach["filteredOutreach"].position_per3);
  const [position_per4] = useState(filteredOutreach["filteredOutreach"].position_per4);
  const [contact_per1] = useState(filteredOutreach["filteredOutreach"].contact_per1);
  const [contact_per2] = useState(filteredOutreach["filteredOutreach"].contact_per2);
  const [contact_per3] = useState(filteredOutreach["filteredOutreach"].contact_per3);
  const [contact_per4] = useState(filteredOutreach["filteredOutreach"].contact_per4);
  const [no_members] = useState(filteredOutreach["filteredOutreach"].no_members);
  const [org_skills] = useState(filteredOutreach["filteredOutreach"].org_skills);
  const [project_title] = useState(filteredOutreach["filteredOutreach"].project_title);
  const [purpose_activity] = useState(filteredOutreach["filteredOutreach"].purpose_activity);
  const [reason_community] = useState(filteredOutreach["filteredOutreach"].reason_community);
  const [target_date] = useState(filteredOutreach["filteredOutreach"].target_date);
  const [no_beneficiaries] = useState(filteredOutreach["filteredOutreach"].no_beneficiaries);
  const [venue] = useState(filteredOutreach["filteredOutreach"].venue);
  const [target_beneficiary] = useState(filteredOutreach["filteredOutreach"].target_beneficiary);
  const [class_outreachdole] = useState(filteredOutreach["filteredOutreach"].class_outreachdole);
  const [class_semi_dev] = useState(filteredOutreach["filteredOutreach"].class_semi_dev);
  const [class_dev] = useState(filteredOutreach["filteredOutreach"].class_dev);
  const [target_obj] = useState(filteredOutreach["filteredOutreach"].target_obj);
  const [activities] = useState(filteredOutreach["filteredOutreach"].activities);
  const [time_frame] = useState(filteredOutreach["filteredOutreach"].time_frame);
  const [beneficiaries] = useState(filteredOutreach["filteredOutreach"].beneficiaries);
  const [budget] = useState(filteredOutreach["filteredOutreach"].budget);
  const [prog_indicator] = useState(filteredOutreach["filteredOutreach"].prog_indicator);
  
  const formatDateEst = new Date(date_est).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatTargetDate = new Date(target_date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
<div>
        {StatusButton}
        &nbsp;
        <button
            className={`text-white inline-flex bg-red-900 hover:bg-red-800 font-medium  rounded-lg text-sm px-8 py-3 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 ${status == originalStatus && "hidden"}`}            
            title="Save"
            onClick={onSaveOutreachClicked}
          >
            Save
          </button>
          &nbsp;
          <button className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium  rounded-lg text-sm px-8 py-3 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"            title="Save"
            onClick={onGeneratePDF}
            disabled={!canSave}
          >
            Generate PDF
          </button>
      <br></br>
      <br></br>
      <br></br>
      <div className='hidden' ref={uiRef}/>
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
                        <label htmlFor="name_org">
                          Name of Organization:
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{name_org}</div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="date_est">Date Established :</label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{formatDateEst}</div>
                      </div>
                      <div className="md:col-span-4 text-base font-semibold text-gray-600">
                        {" "}
                        Designated Contact Person/s for Community Outreach
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-2">
                          <label htmlFor="country">Name :</label>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>
                            {designated_per1}
                          </div>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>
                            {designated_per2}
                          </div>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>
                            {designated_per3}
                          </div>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>
                            {designated_per4}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Designation/Position :</label>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{position_per1}</div>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{position_per2}</div>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{position_per3}</div>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{position_per4}</div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Contact Number :</label>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{contact_per1}</div>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{contact_per2}</div>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{contact_per3}</div>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{contact_per4}</div>
                        </div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1">
                          <label htmlFor="country">No. of Members :</label>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>
                          {no_members}</div>
                        </div>
                        <div className="md:col-span-3">
                          <label htmlFor="country">Organizational Expertise/Skills :</label>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{org_skills}</div>
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
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{project_title}</div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="purpose_activity">
                          Purpose of Activity :
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{purpose_activity}</div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="reason_community">Reason for Choosing the Community/Sector :</label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{reason_community}</div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-2">
                        <div>
                        <label htmlFor="target_date">
                        Target Date/s :
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{formatTargetDate}</div>
                        </div>
                        <div>
                        <label htmlFor="venue">
                        Target Area/s :
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{venue}</div>
                        </div>

                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-3">
                          <label htmlFor="country">Target Beneficiary :</label>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{target_beneficiary}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="no_beneficiaries">No. of Beneficiaries :</label>
                          <div className={`h-10 bg-gray-50 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{no_beneficiaries}
                          </div>
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
                          <label htmlFor="class_outreachdole">Outreach/Dole out :</label>
                          <div className={`h-10 bg-gray-50 border-2 w-10 border-gray-300 text-gray-900 text-sm rounded-lg`}>{class_outreachdole}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="class_semi_dev">Semi-Developmental :</label>
                          <div className={`h-10 bg-gray-50 border-2 w-10 border-gray-300 text-gray-900 text-sm rounded-lg`}>{class_semi_dev}
                          </div>
                        </div>
                        <div className="md:col-span-1">
                        <label htmlFor="class_dev">Developmental :</label>
                        <div className={`h-10 bg-gray-50 border-2 w-10 border-gray-300 text-gray-900 text-sm rounded-lg`}>{class_dev}
                          </div>
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
                          <div
                            className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                          >{target_obj}</div>
                        </div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1">
                        <div className="">
                          <label htmlFor="activities">Activities :</label>
                          <div
                            className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                          >{activities}</div>
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="time_frame">
                        Time Frame:
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{time_frame}</div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1">
                        <div className="">
                          <label htmlFor="beneficiaries">Beneficiaries :</label>
                          <div
                            className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                          >{beneficiaries}</div>
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-4 text-gray-600"></div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1">
                        <div className="">
                          <label htmlFor="budget">Budget :</label>
                          <div
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          >{budget}</div>
                        </div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1">
                        <div className="">
                          <label htmlFor="prog_indicator">Progress Indicators :</label>
                          <div
                            className="h-44 border mt-1 rounded px-4 w-full bg-gray-50"
                          >{prog_indicator}</div>
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
</div>
  
  );
  
}

export default OutreachStudentView;
