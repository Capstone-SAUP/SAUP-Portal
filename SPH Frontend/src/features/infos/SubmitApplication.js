import useTitle from "../../hooks/useTitle"
import { PaperClipIcon, ArrowUpTrayIcon } from "@heroicons/react/20/solid"


const SubmitApplication = () => {
  useTitle('SAUP Portal: Submit Forms')

  return (
    <>
      <h1 className="font-bold text-2xl pb-5">Submit Application</h1>
      <div className="ml-5 object-center">
          Project Name
        <input placeholder="Name of Project" id="name" className="w-1/2 shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 mb-10 mt-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
        </input>
          Category
        <select id="option" className=" bg-gray-50 border shadow-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-40 p-2.5 mb-10 mt-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
          <option value="SOC">SOC</option>
          <option value="SEA">SEA</option>
          <option value="SBA">SBA</option>
          <option value="SNAMS">SNAMS</option>
        </select>
          Contact Information
        <input placeholder="Email or Phone Number" id="name" className="w-1/2 shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 mb-10 mt-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
        </input>
          <div className="border grid justify-items-center overflow-hidden bg-white shadow-lg sm:rounded-lg p-14">
            <ArrowUpTrayIcon className="text-red-900 h-20 w-20 m-10" />
            <div className="flex items-center pb-10">
              Drag forms to upload or
                <button className="inline-flex text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg ml-2 text-sm px-11 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                  <PaperClipIcon className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
                  Attach File
                </button>
            </div>
          </div>
          <div class="flex justify-center">
          <button className="object-center text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg mt-5 text-xl px-14 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                  Submit
                </button>  
          </div>      
      </div>
    </>
  )
}
export default SubmitApplication