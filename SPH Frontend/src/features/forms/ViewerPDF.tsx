import { useNavigate } from "react-router-dom";
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
import { useUpdateAnexBMutation } from "../outreach/anexB_ApiSlice";
import { STATUS } from "../../config/status";

type Mode = "form" | "viewer";

const initTemplate = () => {
  let template: Template = getTemplate();
  try {
    const templateString = localStorage.getItem("template.json");
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



const ViewerPDF = (Outreach:any) =>  {

  const filteredOutreach = Outreach.filteredOutreach
  const outreachInfo = Outreach.outreachInfo
  const uiRef = useRef<HTMLDivElement | null>(null);
  const ui = useRef<Form | Viewer | null>(null);

  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem("mode") as Mode) ?? "viewer"
  );
  
  const navigate = useNavigate();

  const [updateOutreach, { isLoading, isSuccess }] =
  useUpdateAnexBMutation();


  const [status, setCompleted] = useState(outreachInfo.status);
  const [outreachId, setOutreach_id] = useState(outreachInfo.id);

  useEffect(() => {
    if (isSuccess ) {
      setOutreach_id("");
      setCompleted("");
      navigate(
        "/dash/outreach/"
      );
    }
  }, [isSuccess]);

  const onCompletedChanged = (e: { target: { value: any; }; }) => setCompleted(e.target.value);
  const onOutreach_idChanged = (e: { target: { value: any; }; }) => setOutreach_id(e.target.value);

  const canSave = !isLoading;

  const onSaveOutreachClicked = async (e: any) => {
    if (canSave) {
      await updateOutreach({
        id: outreachId,
        status,
      });
    } else {
      await updateOutreach({id: outreachId, status });
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
  
  useEffect(() => {
    const template = initTemplate();
    let inputs = template.sampledata ?? [{}];
    try {
      const inputsString = [filteredOutreach];
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

//   const onChangeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value as Mode;
//     setMode(value);
//     localStorage.setItem("mode", value);
//   };

//   const onLoadTemplate = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target && e.target.files) {
//       getTemplateFromJsonFile(e.target.files[0])
//         .then((t) => {
//           if (ui.current) {
//             ui.current.updateTemplate(t);
//           }
//         })
//         .catch((e) => {
//           alert(`Invalid template file.
// --------------------------
// ${e}`);
//         });
//     }
//   };

//   const onGetInputs = () => {
//     if (ui.current) {
//       const inputs = ui.current.getInputs();
//       alert(JSON.stringify(inputs, null, 2));
//       alert("Dumped as console.log");
//       console.log(inputs);
//     }
//   };

  const onSetInputs = () => {
    if (ui.current) {
      const prompt = window.prompt("Enter Inputs JSONString") || "";
      try {
        const json = isJsonString(prompt) ? JSON.parse(prompt) : [{}];
        ui.current.setInputs(json);
      } catch (e) {
        alert(e);
      }
    }
  };

//   const onSaveInputs = () => {
//     if (ui.current) {
//       const inputs = ui.current.getInputs();
//       localStorage.setItem("inputs", JSON.stringify(inputs));
//       alert("Saved!");
//     }
//   };

//   const onResetInputs = () => {
//     localStorage.removeItem("inputs");
//     if (ui.current) {
//       const template = initTemplate();
//       ui.current.setInputs(template.sampledata ?? [{}]);
//     }
//   };

//   const onGeneratePDF = async () => {
//     if (ui.current) {
//       const template = ui.current.getTemplate();
//       const inputs = ui.current.getInputs();
//       const font = await getFontsData();
//       const pdf = await generate({ template, inputs, options: {  } });
//       const blob = new Blob([pdf.buffer], { type: "application/pdf" });
//       window.open(URL.createObjectURL(blob));
//     }
//   };

  
  return (
    
    
    <div>
      
      <header
      >

        {/* <p className="text-2xl font">Viewer</p>
        <span style={{ margin: "0 1rem" }}>:</span>
        
        <div className="inline-block">
        <ul className="p-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li>
          <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="flex items-center h-5">
          <input
            type="radio"
            onChange={onChangeMode}
            id="form"
            value="form"
            checked={mode === "form"}
          />
          </div>
          <div className="ml-2 text-sm">
          <label htmlFor="form" className="font-medium text-gray-900 dark:text-gray-300">
              Form
          </label>
          </div>
          </div>
          </li>
          <li>
          <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="flex items-center h-5">
          <input
            type="radio"
            onChange={onChangeMode}
            id="viewer"
            value="viewer"
            checked={mode === "viewer"}
          />
          </div>
          <div className="ml-2 text-sm">
          <label htmlFor="viewer" className="font-medium text-gray-900 dark:text-gray-300">
            <div className="w-full text font-semibold">
              Viewer
            </div>
            </label>
            </div>
          </div>
          </li>
          </ul>
        </div>
        <label className="inline-flex items-center justify-between p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          Load Template 
          <input
            accept="application/json"
            onChange={onLoadTemplate}
            type="file"
          />
        </label> */}
        {/* <span style={{ margin: "0 1rem" }}>|</span>
        <button onClick={onGetInputs}>Get Inputs</button>
        <span style={{ margin: "0 1rem" }}>|</span>
        <button onClick={onSetInputs}>Set Inputs</button>
        <span style={{ margin: "0 1rem" }}>|</span>
        <button onClick={onSaveInputs}>Save Inputs</button>
        <span style={{ margin: "0 1rem" }}>|</span>
        <button onClick={onResetInputs}>Reset Inputs</button>
        <span style={{ margin: "0 1rem" }}>|</span>
        <button onClick={onGeneratePDF}>Generate PDF</button> */}
</header>
        <div className="w-full grid">
            <label className="text-base align-middle" htmlFor="user_id">
                Assign Role:
            </label>
            <select
                id="roles"
                name="roles"
                className={`form__select bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg`}
                value={status}
                onChange={onCompletedChanged}
            >
                {list}
            </select>
        </div>
        <button
            className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            title="Save"
            onClick={onSaveOutreachClicked}
            disabled={!canSave}
          >
            Save
          </button>
      <br></br>
      <br></br>
      <br></br>
      <div className="w-full">
        <div className='' ref={uiRef}/></div>
      </div>
  
  );
  
}

export default ViewerPDF;
