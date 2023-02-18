import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'
import DataOverview from "../infos/DataOverview"

const Welcome = () => {

    const { user_id } = useAuth()

    useTitle(`SAUP Portal: ${user_id}`)

    const content = (
        <section className="welcome">
            <DataOverview />
        </section>
    )

    return content
}
export default Welcome