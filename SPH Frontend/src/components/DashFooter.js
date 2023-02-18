import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../hooks/useAuth"
import { Bars3Icon } from '@heroicons/react/20/solid'
import { RiDashboardLine } from 'react-icons/ri'




const DashFooter = () => {

    const { user_id, status } = useAuth()

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if (pathname !== '/dash') {
        goHomeButton = (
            <button
                className="dash-footer__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <RiDashboardLine />
            </button>
        )
    }

    const content = (
        <footer className="relative dash-footer">
            <button>
            <Bars3Icon className="w-10 ml-2 "/>
            </button>
            <label className="mb-1" htmlFor="user_id"></label>
        <input placeholder="    Search"
            className="bg-rose-100 border-gray-300 text-gray-900 ml-6 text-sm rounded focus:ring-rose-500 focus:border-rose-500 bloc w-60 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </input>
            <p className="absolute inset-y-0 right-6 top-3.5"><FontAwesomeIcon icon={faUser} /> User ID: { user_id }
                <button className="ml-2">
                <FontAwesomeIcon icon={faAngleDown} />
                </button>
            </p>
        </footer>

        

    )
    return content
}
export default DashFooter