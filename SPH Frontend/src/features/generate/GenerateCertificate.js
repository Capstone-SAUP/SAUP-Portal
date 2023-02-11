import useTitle from "../../hooks/useTitle"

const GerateCertificate = () => {
  useTitle('SAUP Portal: Generate Certificate')
  
  return (
    <>
    <h1 className="font-bold text-2xl pb-5">Certificate Generator</h1>
    <div className="grid grid-cols-2">
      <div className="border overflow-hidden bg-white shadow-lg sm:rounded-lg">
        <div className="p-5">
          Option
        <select id="option" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-40 p-2.5 mb-5 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
          <option selected>Manual</option>
          <option value="1">Auto</option>
          <option value="2">Semi-auto</option>
        </select>
        Name
        <input placeholder="Name of Awardee" id="name" className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 mb-5 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
        </input>
        Subtitle
        <textarea
          id="subtitle"
          name="subtitle"
          rows={5}
          className="mt-2 block w-1/2 mb-5 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Appears below the Awardee's name"
          defaultValue={''}
        />
        Date
        <input placeholder="Date" id="date" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-1/2 p-2.5 mb-5 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
        </input>
        Signature
        <input placeholder="Name of Signee" id="" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-1/2 p-2.5 mb-5 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
        </input>
        </div>
      </div>
      <div className="grid font-extrabold text-4xl aspect-video content-center align-middle justify-center border m-20 overflow-hidden bg-gray-200 shadow-lg sm:rounded-lg">
        Certificate Example
      </div>
    </div>
    <button className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg mt-5 text-xl px-14 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                  Submit
                </button>
    </>
  )
}
export default GerateCertificate