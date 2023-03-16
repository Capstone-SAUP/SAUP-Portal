import useAuth from "../../hooks/useAuth"
import { useNavigate } from 'react-router-dom'
import useTitle from "../../hooks/useTitle"
import PulseLoader from 'react-spinners/PulseLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from "@fortawesome/free-solid-svg-icons"
import { useGetAnexBQuery } from "./anexB_ApiSlice"
import Outreach from "./Outreach"

const OutreachList = ({ ids_A, entities_A }) => {
    useTitle('SAUP Portal: Outreach List')

    const navigate = useNavigate()

    const { user_id, isAdmin } = useAuth()

    const {
        data: anexB,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAnexBQuery('outreachList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    // console.log(anexB);

    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const handleOutreach = () => navigate(`/dash/outreach/new`)

        const { ids, entities } = anexB
        let ids_B = ids;
        let entities_B = entities

        let Anex_ids = ids_A.concat(ids_B)
        let Anex_entities = {...entities_B,...entities_A};

        // let user_role = Anex_entities.user_role

        // console.log(Anex_entities.user_role)
        let filteredIds
        if (isAdmin) {
            filteredIds = [...Anex_ids]
        } else {
            filteredIds = Anex_ids.filter(outreachId => Anex_entities[outreachId].user === user_id)
        }

        const tableContent = Anex_ids?.length && filteredIds.map(outreachId => <Outreach key={outreachId} outreachId={outreachId} />)

        content = (   
        <>

        <div className="text-2xl font-semibold">Outreach Projects
            <p className="text-sm font-bold float-right">
                <button className="pr-2">    
                    <FontAwesomeIcon icon={faNavicon} />
                </button>View
            </p>
        </div>

            <nav className="border shadow-md shadow-gray-400 mb-4 p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <ul className="flex gap-x-20 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                    <div className=" px-4 text-sm font-bold">What are you looking for?</div>
                        <input
                            type="text" placeholder="Search" className=" z-1 block ml-4 bg-gray-300 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </input>
                    </li>
                    <li>
                    <label className=" px-4 py-10 text-sm font-bold">Department</label>
                    <select
                        type="text" placeholder="Search" className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="All">All</option>
                        <option value="US">SOC</option>
                        <option value="CA">SAS</option>
                        <option value="FR">SBA</option>
                        </select>
                    </li>
                    <li>
                    <label className=" px-4 py-10 text-sm font-bold">Status</label>
                    <select
                        className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="All">Pending</option>
                        <option value="US">Completed</option>
                        <option value="CA">Ongoing</option>
                        </select>
                    </li>
                    <li>
                    <label className=" px-4 py-10 text-sm font-bold">Sort By</label>
                    <select
                        className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option >Date</option>
                        <option value="US">SOC</option>
                        <option value="CA">SAS</option>
                        <option value="FR">SBA</option>
                        </select>
                    </li>
                </ul>
            </div>
            </nav>
            <div className="w-full border rounded-lg shadow-md  shadow-gray-400">
                {/* <div className="">
                    <button className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                    onClick={handleOutreach}> 
                    Add New Project
                    </button>
                </div> */}
                
                <table className="w-full text-sm text-left table-fixed">
                    <thead className="bg-gray-300">
                        <tr>
                            <th scope="col" className="text-sm font-bold px-6 py-4 ">ID</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Full Name</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Status</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Date Created</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Project Title</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Beneficiaries</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Venue</th>
                            <th scope="col" className="px-4 w-32">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            </div>
            </>
        )
    }

    return content
}
export default OutreachList