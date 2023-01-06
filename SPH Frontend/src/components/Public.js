import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Office of the Community Extension Services (OCES)!</span></h1>
            </header>
            <main className="public__main">
                <p>Head, Office of the Community Extension Services and National Service Training Program</p>
                <address className="public__addr">
                    Ms. Shirley Mae B. Marcos<br />
                    smbarrera@hau.edu.ph<br />
                    Monday to Friday 8:00 a.m. to 5:00 p.m.<br />
                    <a href="tel:045887-5478">(045) 887-5478</a>
                    
                </address>
                <br />
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public