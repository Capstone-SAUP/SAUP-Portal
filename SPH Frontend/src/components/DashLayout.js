import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
    return (
      <>
        <DashFooter />
        <div className="flex">
          <DashHeader />
          <div className="p-7 h-full">
            <Outlet />
          </div>
        </div>
      </>
    );
}
export default DashLayout