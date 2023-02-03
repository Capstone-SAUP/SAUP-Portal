import { useGetNotesQuery } from "./notesApiSlice"
import Note from "./Note"
import useAuth from "../../hooks/useAuth"
import useTitle from "../../hooks/useTitle"
import PulseLoader from 'react-spinners/PulseLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from "@fortawesome/free-solid-svg-icons"

const NotesList = () => {
    useTitle('SAUP Portal: Notes List')

    const { user_id, isManager, isAdmin } = useAuth()

    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNotesQuery('notesList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids, entities } = notes

        let filteredIds
        if (isManager || isAdmin) {
            filteredIds = [...ids]
        } else {
            filteredIds = ids.filter(noteId => entities[noteId].user_id === user_id)
        }

        const tableContent = ids?.length && filteredIds.map(noteId => <Note key={noteId} noteId={noteId} />)

        content = (   
        <>

        <p className="text-2xl font-semibold">Outreach Projects
        <p className="text-sm font-bold float-right">
        <button className="pr-2">    
            <FontAwesomeIcon icon={faNavicon} />
        </button>View
 </p>

            </p>
            <nav class="shadow-md shadow-gray-400 mb-4 p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-wrap items-center justify-between mx-auto">
                <ul class="flex  gap-x-20  mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                    <label className=" px-4 py-10 text-sm font-bold">What are you looking for?</label>
                    <input
                        type="text" placeholder="Search" className=" z-1 block ml-4 bg-gray-300 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </input>
                    </li>
                    <li>
                    <label className=" px-4 py-10 text-sm font-bold">Category</label>
                    <select
                        type="text" placeholder="Search" className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>All</option>
                        <option value="US">SOC</option>
                        <option value="CA">SAS</option>
                        <option value="FR">SBA</option>
                        </select>
                    </li>
                    <li>
                    <label className=" px-4 py-10 text-sm font-bold">Status</label>
                    <select
                        className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Pending</option>
                        <option value="US">Completed</option>
                        <option value="CA">Ongoing</option>
                        <option value="FR">SBA</option>
                        </select>
                    </li>
                    <li>
                    <label className=" px-4 py-10 text-sm font-bold">Sort By</label>
                    <select
                        className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Date</option>
                        <option value="US">SOC</option>
                        <option value="CA">SAS</option>
                        <option value="FR">SBA</option>
                        </select>
                    </li>
                </ul>
            </div>
            </nav>
            <div className="h-screen w-full rounded-lg shadow-md  shadow-gray-400">
                <p className="text-xl font-sans font-semibold py-2 px-2">Outreach Projects</p>
                <table className="w-full text-sm text-left table-fixed">
                    <thead className="bg-gray-300">
                        <tr>
                            <th scope="col" className="text-sm font-bold px-6 py-4 ">ID</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Status</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Category</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Date of Submission</th>
                            <th scope="col" className="text-sm font-bold py-4 ">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            </div></>
        )
    }

    return content
}
export default NotesList