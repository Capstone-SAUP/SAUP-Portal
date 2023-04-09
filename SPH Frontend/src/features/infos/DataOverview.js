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

  const unfilteredOutreach = { ...anexA, ...anexB };

  const totalOutreach = Object.keys(unfilteredOutreach).length;

  const allDepartments = Object.values(unfilteredOutreach).map(
    (item) => item.department
  );

  const NotApplicable = Object.values(unfilteredOutreach).reduce(
    (acc, curr) => (curr.department === "N/A" ? acc + 1 : acc),
    0
  );
  const SOC = Object.values(unfilteredOutreach).reduce(
    (acc, curr) => (curr.department === "SOC" ? acc + 1 : acc),
    0
  );
  const SBA = Object.values(unfilteredOutreach).reduce(
    (acc, curr) => (curr.department === "SBA" ? acc + 1 : acc),
    0
  );
  const SAS = Object.values(unfilteredOutreach).reduce(
    (acc, curr) => (curr.department === "SAS" ? acc + 1 : acc),
    0
  );
  const SEA = Object.values(unfilteredOutreach).reduce(
    (acc, curr) => (curr.department === "SEA" ? acc + 1 : acc),
    0
  );
  const SHTM = Object.values(unfilteredOutreach).reduce(
    (acc, curr) => (curr.department === "SHTM" ? acc + 1 : acc),
    0
  );
  const SED = Object.values(unfilteredOutreach).reduce(
    (acc, curr) => (curr.department === "SED" ? acc + 1 : acc),
    0
  );
  const CCJEF = Object.values(unfilteredOutreach).reduce(
    (acc, curr) => (curr.department === "CCJEF" ? acc + 1 : acc),
    0
  );
  const SNAMS = Object.values(unfilteredOutreach).reduce(
    (acc, curr) => (curr.department === "SNAMS" ? acc + 1 : acc),
    0
  );

  const count = 30;
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
  console.log(SNAMS);
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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
                className="mr-20 w-3/4 z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </li>
            <li>
              <label className=" px-4 py-10 text-sm font-bold">To</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MMMM d, yyyy"
                className="mr-20 w-3/4 z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </li>
            <li>
              <label className="py-10 text-sm font-bold">Department</label>
              <select className="mr-20 w-full z-1 block bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>ALL</option>
                <option value="SOC">SOC</option>
                <option value="SEA">SEA</option>
                <option value="SBA">SBA</option>
                <option value="SNAMS">SNAMS</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <div className="gap-10 grid grid-cols-2">
        <div className="border overflow-hidden px-10 bg-white shadow-lg sm:rounded-lg flex items-center">
          <BarChart
            width={600}
            height={300}
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
        </div>
        <div className=" border overflow-hidden px-10 bg-white shadow-lg sm:rounded-lg">
          <PieChart width={600} height={400}>
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
        </div>
        <div className="border p-5 overflow-hidden bg-white shadow-lg sm:rounded-lg">
          <h1 className="font-bold text-2xl pb-5">
            Total Number of Outreach Application
          </h1>
          <div className="inline-flex items-center">
            <h1 className="font-bold text-5xl"> {totalOutreach} </h1>
            <p className="flex-shrink-0 ml-2">Overall Outreach Applications</p>
          </div>
        </div>
        <div className="border p-5 overflow-hidden bg-white shadow-lg sm:rounded-lg">
          <h1 className="font-bold text-2xl pb-5">Total this Month</h1>
          <div className="inline-flex items-center">
            <h1 className="font-bold text-5xl"> {totalOutreach} </h1>
            <p className="flex-shrink-0 ml-2">CEP entries this month</p>
          </div>
        </div>
      </div>
      <GenerateSummary />
    </>
  );
};
export default DataOverview;
