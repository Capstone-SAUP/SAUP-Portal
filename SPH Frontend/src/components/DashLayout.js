import { Outlet } from 'react-router-dom'
import DashSidebar from './DashSidebar'
import DashFooter from './DashFooter'

const DashLayout = () => {
    return (
      <>
        {/* <DashFooter /> */}
        <div className="flex">
          <DashSidebar />
          <div className="p-7 h-full">
            <Outlet />
          </div>
        </div>
      </>
    );
}
export default DashLayout