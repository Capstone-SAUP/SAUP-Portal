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
import { useAddNewAnexBMutation } from "../outreach/anexB_ApiSlice";
import { useAddNewAnexCMutation } from "../outreach/anexC_ApiSlice";

import { useGetUsersQuery } from "../users/usersApiSlice";
import useAuth from "../../hooks/useAuth";
import { current } from "@reduxjs/toolkit";

type Mode = "form" | "viewer";

// let initTemplate = () => {
//   let template: Template = getTemplate();
//   try {
//     let templateString = localStorage.getItem("template");
//     let templateJson = templateString
//       ? JSON.parse(templateString)
//       : getTemplate();
//     checkTemplate(templateJson);
//     template = templateJson as Template;
//   } catch {
//     localStorage.removeItem("template");
//   }
//   return template;
// };

function FormAndViewer() {
  let navigate = useNavigate();
  let { user_id } = useAuth();
  let [addNewAnexA] = useAddNewAnexAMutation();
  let [addNewAnexB] = useAddNewAnexBMutation();
  let [addNewAnexC] = useAddNewAnexCMutation();

  let { object_id, user_ids, department, lastname } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      object_id: data?.ids.map((id: string | number) => data?.entities[id].id),
      user_ids: data?.ids.map(
        (id: string | number) => data?.entities[id].user_id
      ),
      lastname: data?.ids.map(
        (id: string | number) => data?.entities[id].lastname
      ),
      department: data?.ids.map(
        (id: string | number) => data?.entities[id].department
      ),

    }),
  });

  //   console.log(object_id[currentUser]);

  // let [userId, setUserId] = useState(users[0].id);

  let uiRef = useRef<HTMLDivElement | null>(null);
  let ui = useRef<Form | Viewer | null>(null);

  let [mode, setMode] = useState<Mode>(
    (localStorage.getItem("mode") as Mode) ?? "form"
  );

  useEffect(() => {
    let template = getTemplate();
    let inputs = template.sampledata ?? [{}];
    try {
      let inputsString = localStorage.getItem("inputs");
      let inputsJson = inputsString
        ? JSON.parse(inputsString)
        : template.sampledata ?? [{}];
      inputs = inputsJson;
    } catch {
      localStorage.removeItem("inputs");
    }

    getFontsData().then((font) => {
      if (uiRef.current) {
        ui.current = new (mode === "form" ? Form : Viewer)({
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

  let getCurrentUser = () => {
    try {
      let currentUser = user_ids.indexOf(user_id);
      let currentUserObjectId = object_id[currentUser];
      return currentUserObjectId;
    } catch (error) {}
  };

  let getCurrentDept = () => {
    try {
      let currentUser = user_ids.indexOf(user_id);
      let currentDeptID = department[currentUser];
      return currentDeptID[0];
    } catch (error) {}
  };

  let onChangeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value as Mode;
    setMode(value);
    localStorage.setItem("mode", value);
  };

  let onLoadTemplate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      getTemplateFromJsonFile(e.target.files[0])
        .then((t) => {
          if (ui.current) {
            ui.current.updateTemplate(t);
          }
        })
        .catch((e) => {
          alert(`Invalid template file.
--------------------------
${e}`);
        });
    }
  };

  let onGetInputs = () => {
    if (ui.current) {
      let inputs = ui.current.getInputs();
      alert(JSON.stringify(inputs, null, 2));
      alert("Dumped as console.log");
      console.log(inputs);
    }
  };

  //     let { users } = useGetUsersQuery("usersList", {
  //       selectFromResult: ({ data }) => ({
  //           users: data?.ids.map((id: string | number) => data?.entities[id])
  //       }),
  //   });
  let onSaveAnexClicked = async () => {
    if (ui.current) {
      let inputs = ui.current.getInputs();
      // console.log(inputs);
      // localStorage.setItem("inputs", JSON.stringify(inputs));
      inputs[0]["user"] = getCurrentUser();
      inputs[0]["department"] = getCurrentDept();
      // inputs[0].'user_id' = [{"temp":"100", "humid":"12"}];

      // inputs.push({"user_id":"111"});
      // console.log(inputs.unshift("user_id"));

      try {
        if (window.location.href.match("/view-anex-A")) {
          await addNewAnexA(inputs[0]);
      alert("Saved!");
      navigate("/dash/student");
        }
        if (window.location.href.match("/view-anex-B")) {
          await addNewAnexB(inputs[0]);
      alert("Saved!");
      navigate("/dash/employee");
        }
        if (window.location.href.match("/view-anex-C")) {
          await addNewAnexC(inputs[0]);
      alert("Saved!");
      navigate("/dash/users");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  let onSetInputs = () => {
    if (ui.current) {
      let prompt = window.prompt("Enter Inputs JSONString") || "";
      try {
        let json = isJsonString(prompt) ? JSON.parse(prompt) : [{}];
        ui.current.setInputs(json);
      } catch (e) {
        alert(e);
      }
    }
  };

  let onSaveInputs = () => {
    if (ui.current) {
      let inputs = ui.current.getInputs();
      localStorage.setItem("inputs", JSON.stringify(inputs));
      alert("Saved!");
    }
  };

  let onResetInputs = () => {
    localStorage.removeItem("inputs");
    if (ui.current) {
      let template = getTemplate();
      ui.current.setInputs(template.sampledata ?? [{}]);
    }
  };

  let onGeneratePDF = async () => {
    if (ui.current) {
      let template = ui.current.getTemplate();
      let inputs = ui.current.getInputs();
      let font = await getFontsData();
      let pdf = await generate({ template, inputs, options: { font } });
      let blob = new Blob([pdf.buffer], { type: "application/pdf" });
      window.open(URL.createObjectURL(blob));
    }
  };

  return (
    <div className="w-800px">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className="text-2xl font">Form Viewer</p>
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
                  <label
                    htmlFor="form"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
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
                  <label
                    htmlFor="viewer"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div className="w-full text font-semibold">Viewer</div>
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
        </label>
        <span style={{ margin: "0 1rem" }}></span>

        <button
          type="submit"
          onClick={onSaveAnexClicked}
          className="text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          Submit Outreach
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <span style={{ margin: "0 1rem" }}></span>

        <button onClick={onResetInputs} className="text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
            Reset Inputs</button>
        <span style={{ margin: "0 1rem" }}></span>
        <button onClick={onGeneratePDF}       className="text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            Generate PDF</button>
      </header>
      <br></br>
      <div className="w-56" ref={uiRef}></div>
    </div>
  );
}

export default FormAndViewer;
