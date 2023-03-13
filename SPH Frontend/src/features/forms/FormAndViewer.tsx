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
import { useAddNewAnexAMutation } from "../outreach/anexA_ApiSlice";
import { useAddNewAnexBMutation } from "../outreach/anexB_ApiSlice";
import { useAddNewAnexCMutation } from "../outreach/anexC_ApiSlice";

import { useGetUsersQuery } from "../users/usersApiSlice";
// import { useParams } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { current } from "@reduxjs/toolkit";

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

function FormAndViewer() {
    // const AddAnex = useAddNewAnexMutation();
    const { user_id } = useAuth();
    const [addNewAnexA] = useAddNewAnexAMutation();
    const [addNewAnexB] = useAddNewAnexBMutation();
    const [addNewAnexC] = useAddNewAnexCMutation();

    const { object_id, user_ids, lastname } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            object_id: data?.ids.map(
                (id: string | number) => data?.entities[id].id
            ),
            user_ids: data?.ids.map(
                (id: string | number) => data?.entities[id].user_id
            ),
            lastname: data?.ids.map(
                (id: string | number) => data?.entities[id].lastname
            ),
        }),
    });
    
    //   console.log(object_id[currentUser]);

    // const [userId, setUserId] = useState(users[0].id);

    const uiRef = useRef<HTMLDivElement | null>(null);
    const ui = useRef<Form | Viewer | null>(null);

    const [mode, setMode] = useState<Mode>(
        (localStorage.getItem("mode") as Mode) ?? "form"
    );

    useEffect(() => {
        const template = initTemplate();
        let inputs = template.sampledata ?? [{}];
        try {
            const inputsString = localStorage.getItem("inputs");
            const inputsJson = inputsString
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

    const getCurrentUser = () => {
        try {
            const currentUser = user_ids.indexOf(user_id);
            const currentUserObjectId = object_id[currentUser];
            console.log(currentUserObjectId);
            return currentUserObjectId;
            } catch (error) {
                
            }
    }

    const onChangeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as Mode;
        setMode(value);
        localStorage.setItem("mode", value);
    };

    const onLoadTemplate = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const onGetInputs = () => {
        if (ui.current) {
            const inputs = ui.current.getInputs();
            // alert(JSON.stringify(inputs, null, 2));
            // alert("Dumped as console.log");
            // const file = (JSON.stringify(inputs, null, 2));

            //   const [file = (JSON.stringify(inputs, null, 2))] =
            // useAddNewAnexMutation();
            // console.log(file);
        }
    };

    //     const { users } = useGetUsersQuery("usersList", {
    //       selectFromResult: ({ data }) => ({
    //           users: data?.ids.map((id: string | number) => data?.entities[id])
    //       }),
    //   });
    const onSaveAnexClicked = async () => {
        if (ui.current) {
            const inputs = ui.current.getInputs();
            // console.log(inputs);
            localStorage.setItem("inputs", JSON.stringify(inputs));
            inputs[0]["user"] = getCurrentUser();
            // inputs[0].'user_id' = [{"temp":"100", "humid":"12"}];

            // inputs.push({"user_id":"111"});
            // console.log(inputs);
            // console.log(inputs.unshift("user_id"));

            try {
                if(window.location.href.match("/view-anex-A")){
                    await addNewAnexA(inputs[0]);
                }
                if(window.location.href.match("/view-anex-B")){
                    await addNewAnexB(inputs[0]);
                }
                if(window.location.href.match("/view-anex-C")){
                    await addNewAnexC(inputs[0]);
                }
            } catch (error) {
                console.log(error);
            }
            alert("Saved!");
        }
    };

    // const onSetInputs = () => {
    //     if (ui.current) {
    //         const prompt = window.prompt("Enter Inputs JSONString") || "";
    //         try {
    //             const json = isJsonString(prompt) ? JSON.parse(prompt) : [{}];
    //             ui.current.setInputs(json);
    //         } catch (e) {
    //             alert(e);
    //         }
    //     }
    // };

    const onSaveInputs = () => {
        if (ui.current) {
            const inputs = ui.current.getInputs();
            localStorage.setItem("inputs", JSON.stringify(inputs));
            alert("Saved!");
        }
    };

    const onResetInputs = () => {
        localStorage.removeItem("inputs");
        if (ui.current) {
            const template = initTemplate();
            ui.current.setInputs(template.sampledata ?? [{}]);
        }
    };

    const onGeneratePDF = async () => {
        if (ui.current) {
            const template = ui.current.getTemplate();
            const inputs = ui.current.getInputs();
            const font = await getFontsData();
            const pdf = await generate({ template, inputs, options: {} });
            const blob = new Blob([pdf.buffer], { type: "application/pdf" });
            window.open(URL.createObjectURL(blob));
        }
    };

    return (
        <div>
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
                </label>
                <span style={{ margin: "0 1rem" }}>|</span>
                <button onClick={onGetInputs}>Get Inputs</button>
                <span style={{ margin: "0 1rem" }}>|</span>
                <button onClick={onSaveAnexClicked}>Save Anex</button>
                <span style={{ margin: "0 1rem" }}>|</span>
                {/* <button onClick={onSetInputs}>Set Inputs</button> */}
                <span style={{ margin: "0 1rem" }}>|</span>
                <button onClick={onSaveInputs}>Save Inputs</button>
                <span style={{ margin: "0 1rem" }}>|</span>
                <button onClick={onResetInputs}>Reset Inputs</button>
                <span style={{ margin: "0 1rem" }}>|</span>
                <button onClick={onGeneratePDF}>Generate PDF</button>
            </header>
            <br></br>
            <div ref={uiRef} />
        </div>
    );
}

export default FormAndViewer;
