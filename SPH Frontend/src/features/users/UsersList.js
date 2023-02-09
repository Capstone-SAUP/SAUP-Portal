import { useGetUsersQuery } from "./usersApiSlice"
import User from './User'
import { useNavigate } from 'react-router-dom'
import useTitle from "../../hooks/useTitle"
import PulseLoader from 'react-spinners/PulseLoader'

const UsersList = () => {
    useTitle('SAUP Portal: Users List')
    
    const navigate = useNavigate()

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('usersList', {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const handleUser = () => navigate(`/dash/users/new`)
        
        const { ids } = users

        const tableContent = ids?.length && ids.map(userId => <User key={userId} userId={userId} />)

        content = (
            <>
            
            <div className="h-screen w-full rounded-lg shadow-md border shadow-gray-400">
                <div className="flex justify-between">
                <div className="px-5 font-bold mt-2">Database</div>
                <button className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                onClick={handleUser}> 
                Add New User
                </button>
                </div>
                <table className="w-full text-left ">
                    <thead className="">
                        <tr className="text-base bg-gray-200 ">
                            <th scope="col" className="px-5 py-3">User ID</th>
                            <th scope="col" className="">Name</th>
                            <th scope="col" className="">Hau Email</th>
                            <th scope="col" className="">Roles</th>
                            <th scope="col" className="px-4">Edit</th>
                        </tr>
                    </thead>
                    <tbody className="text-base">
                        {tableContent}
                    </tbody>
                </table>
            </div>

            </>
            
        )
    }

    return content
}
export default UsersList