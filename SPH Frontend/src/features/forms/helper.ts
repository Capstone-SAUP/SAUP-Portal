import { Template, Font, checkTemplate } from "@pdfme/generator";

const fontObjList = [
    {
        fallback: true,
        label: "NotoSansJP-Regular",
        url: "/fonts/NotoSansJP-Regular.ttf",
    },
    {
        fallback: false,
        label: "NotoSansSC-Regular",
        url: "/fonts/NotoSansSC-Regular.otf",
    },
    {
        fallback: false,
        label: "NotoSerifJP-Regular",
        url: "/fonts/NotoSerifJP-Regular.ttf",
    },
    {
        fallback: false,
        label: "ZenKurenaido-Regular",
        url: "/fonts/ZenKurenaido-Regular.ttf",
    },
];

export const getFontsData = async () => {
    const fontDataList = await Promise.all(
        fontObjList.map(async (font) => ({
            ...font,
            data: await fetch(font.url).then((res) => res.arrayBuffer()),
        }))
    );

    return fontDataList.reduce(
        (acc, font) => ({ ...acc, [font.label]: font }),
        {} as Font
    );
};

export const readFile = (
    file: File | null,
    type: "text" | "dataURL" | "arrayBuffer"
) => {
    return new Promise<string | ArrayBuffer>((r) => {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", (e) => {
            if (e && e.target && e.target.result && file !== null) {
                r(e.target.result);
            }
        });
        if (file !== null) {
            if (type === "text") {
                fileReader.readAsText(file);
            } else if (type === "dataURL") {
                fileReader.readAsDataURL(file);
            } else if (type === "arrayBuffer") {
                fileReader.readAsArrayBuffer(file);
            }
        }
    });
};

export const cloneDeep = (obj: any) => JSON.parse(JSON.stringify(obj));

export const getTemplateFromJsonFile = (file: File) => {
    return readFile(file, "text").then((jsonStr) => {
        const template: Template = JSON.parse(jsonStr as string);
        try {
            checkTemplate(template);
            return template;
        } catch (e) {
            throw e;
        }
    });
};

export const downloadJsonFile = (json: any, title: string) => {
    if (typeof window !== "undefined") {
        const blob = new Blob([JSON.stringify(json)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${title}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }
};

export const isJsonString = (str: string) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

export const getTemplate = () => {
    const anexA = require("./templates/template.json");
    const anexB = require("./templates/template2.json");
    const anexC = require("./templates/template3.json");
    const anexD = require("./templates/template4.json");
    const Proposed = require("./templates/template2.json");

    var new_schema;

    if (
        window.location.href.match("/view-anex-A") ||
        window.location.href.match("/design-anex-A")
    ) {
        new_schema = anexA;
    } else if (
        window.location.href.match("/view-anex-B") ||
        window.location.href.match("/design-anex-B")
    ) {
        new_schema = anexB;
    } else if (
        window.location.href.match("/view-anex-C") ||
        window.location.href.match("/design-anex-C")
    ) {
        new_schema = anexC;
    } else if (
        window.location.href.match("/view-anex-D") ||
        window.location.href.match("/design-anex-D")
    ) {
        new_schema = anexD;
    } else if (
        window.location.href.match("/viewerPDF") //View Only
    ) {
        new_schema = Proposed;
    }
    // console.log(new_schema);

    const template: Template = new_schema;
    return template;
};
