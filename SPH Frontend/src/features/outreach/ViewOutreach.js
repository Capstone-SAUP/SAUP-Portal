import { useParams } from 'react-router-dom'
import ViewerPDF from '../forms/ViewerPDF'
import { useGetAnexBQuery } from "./anexB_ApiSlice";
import { useGetAnexAQuery } from "./anexA_ApiSlice";
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

    delete unfilteredOutreach.user;
    delete unfilteredOutreach.id;
    delete unfilteredOutreach.user_role;
    delete unfilteredOutreach.updatedAt;
    delete unfilteredOutreach.createdAt;
    delete unfilteredOutreach.fullname;
    delete unfilteredOutreach.__v;

    const filteredOutreach = unfilteredOutreach;

    const content = <ViewerPDF filteredOutreach={filteredOutreach} />

    return content
}
export default ViewOutreach