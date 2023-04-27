import useTitle from "../../hooks/useTitle";
import {
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  BarChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import GenerateSummary from "../generate/GenerateSummary";
import { useGetAnexBQuery } from "../outreach/anexB_ApiSlice";
import { useGetAnexAQuery } from "../outreach/anexA_ApiSlice";
import "react-datepicker/dist/react-datepicker.css";

const DataOverview = () => {
  useTitle("SAUP Portal: Data Overview");

  const { anexA } = useGetAnexAQuery("outreachList", {
    selectFromResult: ({ data }) => ({
      anexA: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  const { anexB } = useGetAnexBQuery("outreachList", {
    selectFromResult: ({ data }) => ({
      anexB: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [department, setDepartment] = useState("All");

  const unfilteredOutreach = { ...anexA, ...anexB };
  const outreachArray = Object.values(unfilteredOutreach);
  let filteredOutreach = unfilteredOutreach;
  if (startDate && endDate){
    filteredOutreach = outreachArray.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return itemDate >= startDate && itemDate <= endDate;
    });
  }
  const totalOutreach = Object.keys(filteredOutreach).length;

  let NotApplicable;
  if (department === "NotApplicable" || department === "All"){
  NotApplicable = Object.values(filteredOutreach).reduce(
    (acc, curr) => (curr.department === "N/A" ? acc + 1 : acc),
    0
  );
  }
  let SOC;
  if (department === "SOC" || department === "All"){
  SOC = Object.values(filteredOutreach).reduce(
    (acc, curr) => (curr.department === "SOC" ? acc + 1 : acc),
    0
  );
  }
  let SBA;
  if (department === "SBA" || department === "All"){
  SBA = Object.values(filteredOutreach).reduce(
    (acc, curr) => (curr.department === "SBA" ? acc + 1 : acc),
    0
  );
  }
  let SAS;
  if (department === "SAS" || department === "All"){
  SAS = Object.values(filteredOutreach).reduce(
    (acc, curr) => (curr.department === "SAS" ? acc + 1 : acc),
    0
  );
  }
  let SEA;
  if (department === "SEA" || department === "All"){
  SEA = Object.values(filteredOutreach).reduce(
    (acc, curr) => (curr.department === "SEA" ? acc + 1 : acc),
    0
  );
  }
  let SHTM;
  if (department === "SHTM" || department === "All"){
  SHTM = Object.values(filteredOutreach).reduce(
    (acc, curr) => (curr.department === "SHTM" ? acc + 1 : acc),
    0
  );
  }
  let SED;
  if (department === "SED" || department === "All"){
  SED = Object.values(filteredOutreach).reduce(
    (acc, curr) => (curr.department === "SED" ? acc + 1 : acc),
    0
  );
  }
  let CCJEF;
  if (department === "CCJEF" || department === "All"){
  CCJEF = Object.values(filteredOutreach).reduce(
    (acc, curr) => (curr.department === "CCJEF" ? acc + 1 : acc),
    0
  );
  }
  let SNAMS;
  if (department === "SNAMS" || department === "All"){
    SNAMS = Object.values(filteredOutreach).reduce(
      (acc, curr) => (curr.department === "SNAMS" ? acc + 1 : acc),
      0
    );
  }

  const data = [
    { name: "N/A", entries: NotApplicable },
    { name: "SOC", entries: SOC },
    { name: "SBA", entries: SBA },
    { name: "SAS", entries: SAS },
    { name: "SEA", entries: SEA },
    { name: "SHTM", entries: SHTM },
    { name: "SED", entries: SED },
    { name: "CCJEF", entries: CCJEF },
    { name: "SNAMS", entries: SNAMS },
  ];
  const COLORS = [
    "#908d88",
    "#e9a122",
    "#bf9d3c",
    "#5c3734",
    "#da5314",
    "#b44366",
    "#1b2f65",
    "#893797",
    "#31650b",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <h1 className="font-bold text-2xl pb-5">Database Overview</h1>
      <nav className="shadow-md shadow-gray-400 mb-4 p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <ul className="flex gap-x-20 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-1 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <label className=" px-4 py-10 text-sm font-bold">From</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy"
                placeholderText={startDate === null ? "All" : undefined}
                className="mr-20 w-3/4 z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </li>
            <li>
              <label className=" px-4 py-10 text-sm font-bold">To</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MMMM d, yyyy"
                placeholderText={endDate === null ? "All" : undefined}
                className="mr-20 w-3/4 z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </li>
            <li>
              <label className="py-10 text-sm font-bold">Department</label>
              <select className="mr-20 w-full z-1 block bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setDepartment(e.target.value)}>
                  <option value="All">All</option>
                  <option value="NA">N/A</option>
                  <option value="SOC">SOC</option>
                  <option value="SAS">SAS</option>
                  <option value="SEA">SEA</option>
                  <option value="SED">SED</option>
                  <option value="SBA">SBA</option>
                  <option value="SNAMS">SNAMS</option>
                  <option value="CCJEF">CCJEF</option>
                  <option value="SHTM">SHTM</option>
                </select>
            </li>
          </ul>
        </div>
      </nav>
      <div className="gap-10 grid grid-cols-2">
        <div className="border p-5 bg-white shadow-lg sm:rounded-lg flex items-center">
          <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="entries" fill="#651B1D" />
          </BarChart>
          </ResponsiveContainer>

        </div>
        <div className=" border px-10 bg-white shadow-lg sm:rounded-lg">
        <ResponsiveContainer width="100%" height={400} >
          <PieChart>
            <Pie
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={125}
              fill="#8884d8"
              dataKey="entries"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="border p-5 bg-white shadow-lg sm:rounded-lg">
          <h1 className="font-bold text-2xl pb-5">
            Total Number of Outreach Application
          </h1>
          <div className="inline-flex items-center">
            <h1 className="font-bold text-5xl"> {totalOutreach} </h1>
            <p className="flex-shrink-0 ml-2">Overall Outreach Applications</p>
          </div>
        </div>
        <div className="border p-5 bg-white shadow-lg sm:rounded-lg">
          <h1 className="font-bold text-2xl pb-5">Total this Month</h1>
          <div className="inline-flex items-center">
            <h1 className="font-bold text-5xl"> {totalOutreach} </h1>
            <p className="flex-shrink-0 ml-2">CEP entries this month</p>
          </div>
        </div>
      </div>
      {/* <GenerateSummary /> */}
    </>
  );
};
export default DataOverview;
