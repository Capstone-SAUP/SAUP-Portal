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

  const [user] = useState(filteredOutreach["filteredOutreach"].user);
  const [current_department] = useState(filteredOutreach["filteredOutreach"].current_department);
  const [sponsor_dept] = useState(filteredOutreach["filteredOutreach"].sponsor_dept);
  const [project_title] = useState(filteredOutreach["filteredOutreach"].project_title);
  const [target_beneficiary] = useState(filteredOutreach["filteredOutreach"].target_beneficiary);
  const [venue] = useState(filteredOutreach["filteredOutreach"].venue);
  const [obj1] = useState(filteredOutreach["filteredOutreach"].obj1);
  const [ojb2] = useState(filteredOutreach["filteredOutreach"].ojb2);
  const [obj3] = useState(filteredOutreach["filteredOutreach"].obj3);
  const [act1] = useState(filteredOutreach["filteredOutreach"].act1);
  const [act2] = useState(filteredOutreach["filteredOutreach"].act2);
  const [act3] = useState(filteredOutreach["filteredOutreach"].act3);
  const [respon_per1] = useState(filteredOutreach["filteredOutreach"].respon_per1);
  const [respon_per2] = useState(filteredOutreach["filteredOutreach"].respon_per2);
  const [respon_per3] = useState(filteredOutreach["filteredOutreach"].respon_per3);
  const [budget_req1] = useState(filteredOutreach["filteredOutreach"].budget_req1);
  const [budget_req2] = useState(filteredOutreach["filteredOutreach"].budget_req2);
  const [budget_req3] = useState(filteredOutreach["filteredOutreach"].budget_req3);
  const [time_frame1] = useState(filteredOutreach["filteredOutreach"].time_frame1);
  const [time_frame2] = useState(filteredOutreach["filteredOutreach"].time_frame2);
  const [time_frame3] = useState(filteredOutreach["filteredOutreach"].time_frame3);
  const [output1] = useState(filteredOutreach["filteredOutreach"].output1);
  const [output2] = useState(filteredOutreach["filteredOutreach"].output2);
  const [output3] = useState(filteredOutreach["filteredOutreach"].output3);
  const [proj_rep] = useState(filteredOutreach["filteredOutreach"].proj_rep);
  const [designation1] = useState(filteredOutreach["filteredOutreach"].designation1);
  const [cscb_rep] = useState(filteredOutreach["filteredOutreach"].cscb_rep);
  const [dept_rep] = useState(filteredOutreach["filteredOutreach"].dept_rep);
  const [dean] = useState(filteredOutreach["filteredOutreach"].dean);
  const [designation2] = useState(filteredOutreach["filteredOutreach"].designation2);

  
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
          <button
className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium  rounded-lg text-sm px-8 py-3 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"            title="Save"
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
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{sponsor_dept}</div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="project_title">Project Title :</label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{project_title}</div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="target_beneficiary">
                          Target Beneficiaries :
                        </label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{target_beneficiary}</div>
                      </div>
                      <div className="md:col-span-7">
                        <label htmlFor="venue">Venue of CES Activity :</label>
                        <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{venue}</div>
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
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{obj1}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{ojb2}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{obj3}</div>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="country">Activities</label>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{act1}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{act2}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{act3}</div>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="country">Responsible Person(s)</label>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{respon_per1}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{respon_per2}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{respon_per3}</div>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="country">Time Frame</label>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{time_frame1}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{time_frame2}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{time_frame3}</div>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="country">Output</label>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{output1}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{output2}</div>
                          <div className={`bg-gray-50 h-10 border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg`}>{output3}</div>
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
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{proj_rep}</div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Designation</label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{designation1}</div>
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
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{cscb_rep}</div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">
                            Department Represented
                          </label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{dept_rep}</div>
                        </div>
                      </div>
                      <div className="md:col-span-2 md:row-span-1"></div>
                      <div className="grid gap-4 gap-y-2 text-sm md:col-span-7 grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2">
                          <label htmlFor="country">
                            Name of Dean or Cluster Head
                          </label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{dean}</div>
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country">Designation</label>
                          <div className="h-10 border mb-2 mt-1 rounded px-4 w-full bg-gray-50">{designation2}</div>
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
