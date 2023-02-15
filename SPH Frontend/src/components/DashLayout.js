import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import DataOverview from '../features/infos/DataOverview'

const DashLayout = () => {
    return (
        <>
            <DashFooter />
            <DashHeader />
            <div className=" px-2 py-4 flex-grow-1 ml-28">
            <DataOverview />
            </div>

        </>
    )
}
export default DashLayout