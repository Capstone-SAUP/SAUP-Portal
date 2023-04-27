import { PaperClipIcon } from "@heroicons/react/20/solid";
import useTitle from "../../hooks/useTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { STATUS } from "../../config/status";
import { useGetAnexCQuery } from "../outreach/anexC_ApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";
import { RxDividerHorizontal } from "react-icons/rx";
import { generate } from "@pdfme/generator";
import {
    getFontsData,
    getTemplate,
    getTemplateFromJsonFile,
    isJsonString,
} from "../forms/helper";
import { Form, Viewer, Template, checkTemplate } from "@pdfme/ui";

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

const GenerateSummary = () => {
    const uiRef = useRef<HTMLDivElement | null>(null);
    const ui = useRef<Form | Viewer | null>(null);

    const [mode, setMode] = useState<Mode>(
        (localStorage.getItem("mode") as Mode) ?? "viewer"
    );
    const { user_id } = useAuth();
    const { id } = useParams();

    const currentReportId = id;

    // const departmentCodes = [
    //     "SAS",
    //     "SOC",
    //     "SED",
    //     "SNAMS",
    //     "SEA",
    //     "SBA",
    //     "HTM",
    //     "JEF",
    // ];
    // const employmentStatusCodes = ["Full-Time", "Part-Time"];

    // // Initialize counters for each department and employment status combination
    // const counters = {};
    // departmentCodes.forEach((departmentCode) => {
    //     employmentStatusCodes.forEach((employmentStatusCode) => {
    //         counters[`${departmentCode}_${employmentStatusCode}`] = 0;
    //     });
    // });

    const { anexC } = useGetAnexCQuery("reportsList", {
        selectFromResult: ({ data }) => ({
            anexC: data?.ids.map((id: string | number) => data?.entities[id]),
        }),
    });

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.ids.map((id: string | number) => data?.entities[id]),
        }),
    });

    // const fullData = user.map((d: { lastname: string; firstname: string }) => ({
    //     ...d,
    //     fullName: d.lastname + ", " + d.firstname,
    // }));

    // const filteredOutreach = getCurrentReport();
    // useEffect(() => {
    //     const template = initTemplate();
    //     let inputs = template.sampledata ?? [{}];
    //     try {
    //         const inputsString = [filteredOutreach];
    //         const inputsJson = inputsString;
    //         inputs = inputsJson;
    //     } catch {
    //         localStorage.removeItem("inputs");
    //     }

    //     getFontsData().then((font) => {
    //         if (uiRef.current) {
    //             ui.current = new (mode === "viewer" ? Form : Viewer)({
    //                 domContainer: uiRef.current,
    //                 template,
    //                 inputs,
    //                 options: { font },
    //             });
    //         }
    //     });

    //     return () => {
    //         if (ui.current) {
    //             ui.current.destroy();
    //         }
    //     };
    // }, [uiRef, mode]);

    // const onGeneratePDF = async () => {
    //     if (ui.current) {
    //         const template = ui.current.getTemplate();
    //         const inputs = ui.current.getInputs();
    //         const font = await getFontsData();
    //         const pdf = await generate({ template, inputs, options: {} });
    //         const blob = new Blob([pdf.buffer], { type: "application/pdf" });
    //         window.open(URL.createObjectURL(blob));
    //     }
    // };

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <>
            <h1 className="font-bold text-2xl pt-10 pb-5">
                Summary Generation Report
            </h1>
            <div className="border overflow-hidden bg-white shadow-lg sm:rounded-lg mb-20">
                <div className="flex flex-wrap items-center justify-between mx-auto p-3">
                    <ul className="flex gap-x-20 py-5 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-1 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <label className=" px-4 py-10 text-sm font-bold">
                                From
                            </label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date | null) =>
                                    setStartDate(date)
                                }
                                dateFormat="MMMM d, yyyy"
                                placeholderText={
                                    startDate === null ? "All" : undefined
                                }
                                className="mr-20 w-full z-1 block ml-4 bg-white border py-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </li>
                        <li>
                            <label className=" px-4 py-10 text-sm font-bold">
                                To
                            </label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date: Date | null) =>
                                    setEndDate(date)
                                }
                                dateFormat="MMMM d, yyyy"
                                placeholderText={
                                    endDate === null ? "All" : undefined
                                }
                                className="mr-20 w-full z-1 block ml-4 bg-white border py-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center pb-5">
                    <button className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};
export default GenerateSummary;
