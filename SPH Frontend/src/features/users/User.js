import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from './usersApiSlice'
import { memo } from 'react'

const User = ({ userId }) => {

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId]
        }),
    })

    const navigate = useNavigate()
    const fullname = (user.lastname + ", " + user.firstname)

    if (user) {
        const handleEdit = () => navigate(`/dash/users/${userId}`)

        const userRolesString = user.roles.toString().replaceAll(',', ', ')
        const userDeptString = user.department.toString().replaceAll(',', ', ')
        const userTenurString = user.tenure.toString().replaceAll(',', ', ')

        // console.log(user);


        const cellStatus = user.active ? '' : 'table__cell--inactive'

        return (
            <tr>
                <td className={`text-sm font-medium text-gray-900 px-5 ${cellStatus}`}>{user.user_id}</td>
                <td className={`text-sm font-medium text-gray-900 ${cellStatus}`}>{fullname}</td>
                <td className={`text-sm font-medium text-gray-900 ${cellStatus}`}>{user.email}</td>
                <td className={`text-sm font-medium text-gray-900 ${cellStatus}`}>{userRolesString}</td>
                <td className={`text-sm font-medium text-gray-900 ${cellStatus}`}>{userDeptString}</td>
                <td className={`text-sm font-medium text-gray-900 ${cellStatus}`}>{userTenurString}</td>
                <td className={`text-sm font-medium text-gray-900 ${cellStatus}`}>
                    <button
                        className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                        onClick={handleEdit}
                        
                    >
                        Edit
                        
                    </button>
                </td>
            </tr>
        )

    } else return null
}

const memoizedUser = memo(User)

export default memoizedUser