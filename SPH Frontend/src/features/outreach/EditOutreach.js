import { useParams } from 'react-router-dom'
import EditOutreachForm from './EditOutreachForm'
import { useGetOutreachQuery } from './outreachApiSlice'
import { useGetUsersQuery } from '../users/usersApiSlice'
import useAuth from '../../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const EditOutreach = () => {
    useTitle('SAUP Portal: Edit Outreach')

    const { id } = useParams()

    const { user_id, isAdmin } = useAuth()

    const { outreach } = useGetOutreachQuery("outreachList", {
        selectFromResult: ({ data }) => ({
            outreach: data?.entities[id]
        }),
    })

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!outreach || !users?.length) return <PulseLoader color={"#FFF"} />


    if (!isAdmin) {
        if (outreach.user_id !== user_id) {
            return <p className="errmsg">No access</p>
        }
    }

    const content = <EditOutreachForm outreach={outreach} users={users} />

    return content
}
export default EditOutreach