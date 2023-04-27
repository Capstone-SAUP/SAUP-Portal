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
import React from "react";

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


const ViewerPDF = (filteredOutreach:any) =>  {

  
  const uiRef = useRef<HTMLDivElement | null>(null);
  const ui = useRef<Form | Viewer | null>(null);

  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem("mode") as Mode) ?? "viewer"
  );

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [updateOutreachA] = useUpdateAnexAMutation();
  const [updateOutreachB] = useUpdateAnexBMutation();

  const [status, setCompleted] = useState(filteredOutreach["filteredOutreach"].status);
  const [outreachId, setOutreach_id] = useState(filteredOutreach["filteredOutreach"]._id);
  const currentStatusIndex = Object.values(STATUS).indexOf(filteredOutreach["filteredOutreach"].status);

  const onCompletedChanged = (e: { target: { value: any; }; }) => setCompleted(e.target.value);
  const onOutreach_idChanged = (e: { target: { value: any; }; }) => setOutreach_id(e.target.value);


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
  return (
    <div>
      <header>
      </header>
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
        &nbsp;
        <button
            className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium  rounded-lg text-sm px-8 py-3 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"            
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
      <div className='w-fit' ref={uiRef}/>
</div>
  
  );
  
}

export default ViewerPDF;
