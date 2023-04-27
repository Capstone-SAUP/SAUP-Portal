import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from './usersApiSlice'
import { memo } from 'react'
import { useGetAnexCQuery } from '../outreach/anexC_ApiSlice'

const User = ({ userId }) => {

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId]
        }),
    })

    const { allReports } = useGetAnexCQuery("reportsList", {
        selectFromResult: ({ data }) => ({
            allReports: data?.ids.map((id) => data?.entities[id])
        })
    })

    const navigate = useNavigate()
    const handleCertify = () => navigate(`/dash/certify/${userId}`);
    const fullname = (user.lastname + ", " + user.firstname)
    
    const targetReport = allReports && allReports.length > 0 && allReports.find(obj => Object.values(obj).includes(fullname));
    if (user) {
        const handleEdit = () => navigate(`/dash/users/${userId}`)

        const userRolesString = user.roles.toString().replaceAll(',', ', ')
        const userDeptString = user.department.toString().replaceAll(',', ', ')
        const userTenurString = user.tenure.toString().replaceAll(',', ', ')

        // console.log(user);


        const cellStatus = user.active ? '' : 'table__cell--inactive'
            let CertifyButton = null;
            if (targetReport) {
            CertifyButton = (
                <button
                className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-2.5 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                onClick={handleCertify}
                >
                Certify
                </button>
            );
            }
        return (
            <tr>
                <td className={`text-sm font-medium text-gray-900 px-4 ${cellStatus}`}>{user.user_id}</td>
                <td className={`text-sm font-medium text-gray-900 px-4 ${cellStatus}`}>{fullname}</td>
                <td className={`text-sm font-medium text-gray-900 px-4 ${cellStatus}`}>{user.email}</td>
                <td className={`text-sm font-medium text-gray-900 px-4 ${cellStatus}`}>{userRolesString}</td>
                <td className={`text-sm font-medium text-gray-900 px-4 ${cellStatus}`}>{userDeptString}</td>
                <td className={`text-sm font-medium text-gray-900 px-4 ${cellStatus}`}>{userTenurString}</td>
                <td className={`text-sm  flex font-medium grid-cols-2 text-gray-900 px-4 ${cellStatus}`}>
                    <button
                        className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                        onClick={handleEdit}
                        
                    >
                        Edit
                        
                    </button>
                    {CertifyButton}
                </td>
            </tr>
        )

    } else return null
}

const memoizedUser = memo(User)

export default memoizedUser