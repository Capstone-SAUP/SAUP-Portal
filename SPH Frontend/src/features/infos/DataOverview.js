import useTitle from "../../hooks/useTitle"
import { PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Bar, BarChart, Tooltip, Legend } from "recharts";

const data = [
  { name: 'SOC', entries: 400 },
  { name: 'SAS', entries: 300 },
  { name: 'SEA', entries: 300 },
  { name: 'SBA', entries: 200 },
];

const COLORS = ['#651B1D', '#F4CD2A', '#000000', '#746613'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DataOverview = () => {
  useTitle('SAUP Portal: Data Overview')

  return (
    <>
    <h1 className="font-bold text-2xl pb-5">Database Overview</h1>
    <div className="gap-10 grid grid-cols-3">
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
      <div className="col-span-2 border overflow-hidden bg-white shadow-lg sm:rounded-lg">
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle"/>
        </PieChart>
      </div>
      <div className="col-span-2 border p-5 overflow-hidden bg-white shadow-lg sm:rounded-lg">
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
    </>
  )
}
export default DataOverview