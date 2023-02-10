import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isAdmin = false
    let status = "Employee"

    if (token) {
        const decoded = jwtDecode(token)
        const { user_id, roles } = decoded.UserInfo

        isAdmin = roles.includes('Admin')

        if (isAdmin) status = "Admin"

        return { user_id, roles, status, isAdmin }
    }

    return { user_id: '', roles: [], isAdmin, status }
}
export default useAuth