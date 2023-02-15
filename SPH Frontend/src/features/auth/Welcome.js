import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { user_id, isAdmin } = useAuth()

    useTitle(`SAUP Portal: ${user_id}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome {user_id}!</h1>

            <p><Link to="/dash/outreach">View Outreach</Link></p>

            {/* <p><Link to="/dash/outreach/new">Add New Outreach</Link></p> */}

            {(isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>}

            {/* {(isAdmin) && <p><Link to="/dash/users/new">Add New User</Link></p>} */}

            {(isAdmin) && <p><Link to="/dash/generate-summary">Generate Summary</Link> </p>}

            {(isAdmin) && <p><Link to="/dash/generate-certificate">Generate Certificate</Link> </p>}
            
            {(isAdmin) && <p><Link to="/dash/data-overview">Database Overview</Link> </p>}

            <p><Link to="/dash/application-forms">Application Forms</Link></p>

            <p><Link to="/dash/submit-forms">Submit Forms</Link></p>
        </section>
    )

    return content
}
export default Welcome