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
import GenerateSummary from "../generate/GenerateSummary";

const data = [
  { name: "SOC", entries: 400 },
  { name: "SAS", entries: 300 },
  { name: "SEA", entries: 300 },
  { name: "SBA", entries: 200 },
];

const COLORS = ["#651B1D", "#F4CD2A", "#616058", "#746613"];

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

const DataOverview = () => {
  useTitle("SAUP Portal: Data Overview");

  return (
    <>
      <h1 className="font-bold text-2xl pb-5">Database Overview</h1>
      <nav className="shadow-md shadow-gray-400 mb-4 p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <ul className="flex gap-x-20 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-1 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <div className=" px-4 text-sm font-bold">
                What are you looking for?
              </div>
              <input
                type="text"
                placeholder="Search"
                className=" z-1 block ml-4 bg-gray-300 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </li>
            <li>
              <label className=" px-4 py-10 text-sm font-bold">From</label>
              <select
                type="text"
                placeholder="Search"
                className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>1/14/2023</option>
                <option value="1">1/15/2023</option>
                <option value="2">1/16/2023</option>
                <option value="3">1/17/2023</option>
                <option value="4">1/18/2023</option>
              </select>
            </li>
            <li>
              <label className=" px-4 py-10 text-sm font-bold">To</label>
              <select className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>1/21/2023</option>
                <option value="1">1/22/2023</option>
                <option value="2">1/23/2023</option>
                <option value="3">1/24/2023</option>
                <option value="4">1/25/2023</option>
              </select>
            </li>
            <li>
              <label className=" px-4 py-10 text-sm font-bold">
                Department
              </label>
              <select className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>ALL</option>
                <option value="US">SOC</option>
                <option value="CA">SEA</option>
                <option value="FR">SBA</option>
                <option value="DE">SNAMS</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <div className="gap-10 grid grid-cols-2">
        <div className="border overflow-hidden bg-white shadow-lg sm:rounded-lg flex items-center">
          <BarChart
            width={500}
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
        <div className=" border overflow-hidden bg-white shadow-lg sm:rounded-lg">
          <PieChart width={400} height={400}>
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
          <h1 className="font-bold text-2xl pb-5">Total Number of Entries</h1>
          <div className="inline-flex items-center">
            <h1 className="font-bold text-5xl"> 528 </h1>
            <p className="flex-shrink-0 ml-2">overall number of entries</p>
          </div>
        </div>
        <div className="border p-5 overflow-hidden bg-white shadow-lg sm:rounded-lg">
          <h1 className="font-bold text-2xl pb-5">Total this Month</h1>
          <div className="inline-flex items-center">
            <h1 className="font-bold text-5xl"> 20 </h1>
            <p className="flex-shrink-0 ml-2">CEP entries this month</p>
          </div>
        </div>
      </div>
      <GenerateSummary/>
    </>
  );
};
export default DataOverview;
