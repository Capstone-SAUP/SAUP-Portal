import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
    return (
        <>
            <DashFooter />
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
        </>
    )
}
export default DashLayout