import { useParams } from 'react-router-dom'
import OutreachEmployeeView from "../forms/OutreachEmployeeView";
import { useGetAnexBQuery } from "./anexB_ApiSlice";
import useTitle from '../../hooks/useTitle'

const ViewOutreach = () => {
    useTitle('SAUP Portal: Edit Outreach')

    const { id } = useParams()

    const { anexB } = useGetAnexBQuery("outreachList", {
        selectFromResult: ({ data }) => ({
            anexB: data?.entities[id],
        }),
    });


    const unfilteredOutreach = { ...anexB};

    delete unfilteredOutreach.user;
    delete unfilteredOutreach.id;
    delete unfilteredOutreach.user_role;
    delete unfilteredOutreach.updatedAt;
    delete unfilteredOutreach.createdAt;
    delete unfilteredOutreach.fullname;
    delete unfilteredOutreach.__v;

    const filteredOutreach = unfilteredOutreach;

    const content = <OutreachEmployeeView filteredOutreach={filteredOutreach} />

    return content
}
export default ViewOutreach