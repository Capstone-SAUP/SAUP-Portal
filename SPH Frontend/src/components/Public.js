import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <body className='ba text-white bg-rose-400/40 relative bg-blend-multiply'>
        <section className="public">
            <header className='text-3xl'>
                <h1 className=''>Welcome to <span className="">Office of the Community Extension Services (OCES)!</span></h1>
            </header>
            <main className="public__main">
                <p>Head, Office of the Community Extension Services and National Service Training Program</p>
                <address className="public__addr">
                    Ms. Shirley Mae B. Marcos<br />
                    smbarrera@hau.edu.ph<br />
                    Monday to Friday 8:00 a.m. to 5:00 p.m.<br />
                </address>
                <br />
            </main>
            <footer>
                <Link to="/login">
                    <button className='decoration-white bg-sky-400 rounded-md text-2xl'>Employee Login</button>
                </Link>
            </footer>
        </section>
        </body>
    )
    return content
}
export default Public