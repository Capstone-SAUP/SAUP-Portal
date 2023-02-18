import { PaperClipIcon } from '@heroicons/react/20/solid'
import useTitle from "../../hooks/useTitle"

const GenerateSummary = () => {
  useTitle('SAUP Portal: Generate Summary')

  return (
    <><h1 className="font-bold text-2xl pt-10 pb-5">Summary Generation Report</h1>
    <div className="border overflow-hidden bg-white shadow-lg sm:rounded-lg mb-20">
      <div className="grid grid-cols-4 grid-rows-3 justify-around px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">From Date</h3>
        <h3 className="text-lg font-medium leading-6 text-gray-900">To Date</h3>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Department</h3>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Status</h3>
        <select id="countries" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
          <option selected>1/14/2023</option>
          <option value="1">1/15/2023</option>
          <option value="2">1/16/2023</option>
          <option value="3">1/17/2023</option>
          <option value="4">1/18/2023</option>
        </select>
        <select id="countries" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
          <option selected>1/21/2023</option>
          <option value="1">1/22/2023</option>
          <option value="2">1/23/2023</option>
          <option value="3">1/24/2023</option>
          <option value="4">1/25/2023</option>
        </select>
        <select id="countries" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
          <option selected>ALL</option>
          <option value="US">SOC</option>
          <option value="CA">SEA</option>
          <option value="FR">SBA</option>
          <option value="DE">SNAMS</option>
        </select>
        <select id="countries" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
          <option selected>ALL</option>
          <option value="US">Pending</option>
          <option value="CA">On-going</option>
          <option value="FR">Completed</option>
        </select>
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