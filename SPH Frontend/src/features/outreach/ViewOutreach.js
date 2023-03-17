import { useParams } from 'react-router-dom'
import ViewerPDF from '../forms/ViewerPDF'
import { useGetAnexBQuery } from "./anexB_ApiSlice";
import { useGetAnexAQuery } from "./anexA_ApiSlice";
import useAuth from '../../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const ViewOutreach = () => {
    useTitle('SAUP Portal: Edit Outreach')

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
    const outreachInfo = { ...anexA, ...anexB };
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

    console.log();

    const content = <ViewerPDF filteredOutreach={filteredOutreach} outreachInfo={outreachInfo}/>

    return content
}
export default ViewOutreach