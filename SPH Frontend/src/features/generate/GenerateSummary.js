import { PaperClipIcon } from '@heroicons/react/20/solid'
import useTitle from "../../hooks/useTitle"
import { useState, useEffect } from "react"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"

const GenerateSummary = () => {
  useTitle('SAUP Portal: Generate Summary')

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <><h1 className="font-bold text-2xl pt-10 pb-5">Summary Generation Report</h1>
    <div className="border overflow-hidden bg-white shadow-lg sm:rounded-lg mb-20">
    <div className="flex flex-wrap items-center justify-between mx-auto p-3">
          <ul className="flex gap-x-20 py-5 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-1 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <label className=" px-4 py-10 text-sm font-bold">From</label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MMMM d, yyyy" 
              className="mr-20 w-full z-1 block ml-4 bg-white border py-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </li>
            <li>
              <label className=" px-4 py-10 text-sm font-bold">To</label>
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat="MMMM d, yyyy" 
              className="mr-20 w-full z-1 block ml-4 bg-white border py-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </li>
            <li>
              <label className="py-10 text-sm font-bold">
                Department
              </label>
              <select className="mr-20 w-full z-1 block bg-white border py-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>ALL</option>
                <option value="SOC">SOC</option>
                <option value="SEA">SEA</option>
                <option value="SBA">SBA</option>
                <option value="SNAMS">SNAMS</option>
              </select>
            </li>
            <li>
            <label className="py-10 text-sm font-bold">
                Status
            </label>
            <select id="status" className="mr-20 w-full z-1 block bg-white border py-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>ALL</option>
              <option value="Pending">Pending</option>
              <option value="On-going">On-going</option>
              <option value="Completed">Completed</option>
            </select>
            </li>
          </ul>
        </div>
      <div className="flex justify-center pb-5">
        <button className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
          Submit
        </button>
      </div>
    </div>
    <div className="border overflow-hidden bg-white shadow-lg sm:rounded-lg">
      <div className="flex justify-center px-4 py-5 sm:px-6">
          Your summary is ready for download below
      </div>
      <div className="flex justify-center pb-20">
          <button className="inline-flex text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-20 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400 mr-2" aria-hidden="true" />
            Attachment 1
          </button>
        </div>
    </div>
    </>
  )
}
export default GenerateSummary