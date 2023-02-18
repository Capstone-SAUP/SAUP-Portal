import { Outlet } from 'react-router-dom'
import DashSidebar from './DashSidebar'
import DashFooter from './DashFooter'
import DataOverview from '../features/infos/DataOverview'

const DashLayout = () => {
    return (
      <>
        {/* <DashFooter /> */}
        <div className="flex">
          <DashSidebar />
          <div className="p-7 h-full">
            <DataOverview />
          </div>
        </div>
      </>
    );

}
export default DashLayout