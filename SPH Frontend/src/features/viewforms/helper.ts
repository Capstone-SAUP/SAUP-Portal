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
  const data = require('./template.json');
  const data2 = require('./template2.json');
  const data3 = require('./template3.json');
  const data4 = require('./template4.json');
  var new_schema

  if (window.location.href.match("/form-viewer1")) {
    new_schema = data
}
  else if (window.location.href.match("/form-viewer2")) {
    new_schema = data2
    console.log("Truuuueee");
}
else if (window.location.href.match("/form-viewer2")) {
  new_schema = data2
  console.log("Truuuueee")

}  else if (window.location.href.match("/form-viewer3")) {
  new_schema = data3
  console.log("Truuuueee");
  
}  else if (window.location.href.match("/form-viewer4")) {
  new_schema = data4
  console.log("Truuuueee");
  
}
  
  const template: Template = new_schema
  return template;
};
