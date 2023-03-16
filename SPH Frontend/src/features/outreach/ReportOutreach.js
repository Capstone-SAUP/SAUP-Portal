import { useParams } from 'react-router-dom'
import OutreachReportForm from "./OutreachReportForm";
import { useGetAnexBQuery } from "./anexB_ApiSlice";
import { useGetAnexAQuery } from "./anexA_ApiSlice";
import { useGetUsersQuery } from '../users/usersApiSlice'
import useTitle from '../../hooks/useTitle'

const ViewOutreach = () => {
    useTitle('SAUP Portal: Edit Outreach')

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    const { id } = useParams()

    const { anexA } = useGetAnexAQuery("outreachList", {
        selectFromResult: ({ data }) => ({
            anexA: data?.entities[id],
        }),
    });

    const { anexB } = useGetAnexBQuery("outreachList", {
        selectFromResult: ({ data }) => ({
            anexB: data?.entities[id],
        }),
    });

    const unfilteredOutreach = { ...anexA, ...anexB };

    delete unfilteredOutreach._id;
    delete unfilteredOutreach.user;
    delete unfilteredOutreach.id;
    delete unfilteredOutreach.user_role;
    delete unfilteredOutreach.status;
    delete unfilteredOutreach.updatedAt;
    delete unfilteredOutreach.createdAt;
    delete unfilteredOutreach.fullname;
    delete unfilteredOutreach.__v;

    const filteredOutreach = unfilteredOutreach;
    // console.log(users);
    const content = <OutreachReportForm filteredOutreach={filteredOutreach} users={users}/>

    return content
}
export default ViewOutreach