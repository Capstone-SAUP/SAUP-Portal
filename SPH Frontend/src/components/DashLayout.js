import { Outlet } from 'react-router-dom'
import DashSidebarUser from './DashSidebarUser'
import DashFooter from './DashFooter'
import DataOverview from '../features/infos/DataOverview'

const DashLayout = () => {
    return (
      <>
        {/* <DashFooter /> */}
        <div className="flex">
          <DashSidebarUser />
          <div className="p-7 h-full">
            <Outlet />
          </div>
        </div>
      </>
    );

}
export default DashLayout