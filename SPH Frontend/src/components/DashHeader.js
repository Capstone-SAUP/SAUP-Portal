import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFileCirclePlus,
    faFilePen,
    faUserGear,
    faUserPlus,
    faRightFromBracket,
    faHouseUser
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import useAuth from '../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'
import { faUser } from "@fortawesome/free-solid-svg-icons"


const DASH_REGEX = /^\/dash(\/)?$/
const NOTES_REGEX = /^\/dash\/outreach(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/

const DashHeader = () => {
    const { isAdmin } = useAuth()
    const { user_id, status } = useAuth()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])

    const onNewOutreachClicked = () => navigate('/dash/outreach/new')
    const onNewUserClicked = () => navigate('/dash/users/new')
    const onOutreachClicked = () => navigate('/dash/outreach')
    const onUsersClicked = () => navigate('/dash/users')


        


    let dashClass = null
    if (!DASH_REGEX.test(pathname) && !NOTES_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
        dashClass = "max-w-xs"
    }

    let newOutreachButton = null
    if (NOTES_REGEX.test(pathname)) {
        newOutreachButton = (
            <button
                className="w-11 h-11 text-3xl bg-transparent text-white grid place-content-center mt-5"
                title="New Outreach"
                onClick={onNewOutreachClicked}
            >
                <FontAwesomeIcon icon={faFileCirclePlus} />
            </button>
        )
    }

    let newUserButton = null
    if (USERS_REGEX.test(pathname)) {
        newUserButton = (
            <button
                className="w-11 h-11 text-3xl bg-transparent text-white grid place-content-center mt-5"
                title="New User"
                onClick={onNewUserClicked}
            >
                <FontAwesomeIcon icon={faUserPlus} />
            </button>
        )
    }

    let userButton = null
    if (isAdmin) {
        if (!USERS_REGEX.test(pathname) && pathname.includes('/dash')) {
            userButton = (
                <button
                    className="w-11 h-11 text-3xl bg-transparent text-white grid place-content-center mt-5"
                    title="Users"
                    onClick={onUsersClicked}
                >
                    <FontAwesomeIcon icon={faUserGear} />
                </button>
            )
        }
    }

    let outreachButton = null
    if (!NOTES_REGEX.test(pathname) && pathname.includes('/dash')) {
        outreachButton = (
            <button
                className="w-11 h-11 text-3xl bg-transparent text-white grid place-content-center mt-5"
                title="Outreach"
                onClick={onOutreachClicked}
            >
                <FontAwesomeIcon icon={faFilePen} />
            </button>
        )
    }

    const logoutButton = (
        <button
            className="w-11 h-11 text-3xl bg-transparent text-white grid place-content-center mt-5"
            title="Logout"
            onClick={sendLogout}
        >
            <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
    )

    const errClass = isError ? "errmsg" : "offscreen"

    let buttonContent
    if (isLoading) {
        buttonContent = <PulseLoader color={"#FFF"} />
    } else {
        buttonContent = (
            <>
                {newOutreachButton}
                {newUserButton}
                {outreachButton}
                {userButton}
                {logoutButton}
            </>
        )
    }




    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>
            <header className="h-full w-20 fixed z-10 px-4 pt-12 border-y-0 border-red-900 bg-red-900">


                <div className={`grid-flow-col justify-between items-center pt-40 ${dashClass}`}>
                    <Link to="/dash">
                    <p className="absolute top-3.5 text-white"><FontAwesomeIcon className="w-12 " icon={faUser} /> User ID: { user_id }
     </p>
                        <h1 className=" w-11 h-11 text-3xl bg-transparent text-white grid place-content-center  mt-5"> 
<FontAwesomeIcon icon={faHouseUser}/>                        </h1>
                    </Link>
                    <nav className="block flex-nowrap">
                        {buttonContent}
                    </nav>
                </div>
            </header>
        </>
    )

    return content
}
export default DashHeader