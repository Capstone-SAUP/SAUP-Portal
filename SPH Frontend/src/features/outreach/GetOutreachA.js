import React from "react";
import { useGetAnexAQuery } from "./anexA_ApiSlice";
import OutreachList from "./OutreachList";
import PulseLoader from 'react-spinners/PulseLoader'

const GetOutreachA = () => {
    const {
        data: anexA,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAnexAQuery("outreachList", {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });



    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids, entities } = anexA
        let ids_A = ids;
        let entities_A = entities
        // console.log(ids_A);
        content = <OutreachList ids_A={ids_A} entities_A={entities_A} />
    }

    return content;
};

export default GetOutreachA;
