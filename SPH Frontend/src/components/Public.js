import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <body className='ba text-white bg-rose-400/40 relative bg-blend-multiply'>
        <section className="m-20 mt-10">
            <div className="">
                <main className="bg-white/80 text-black font-semibold shadow-lg sm:rounded-lg border public__main">
                <div className="text-3xl px-10 p-5 font-bold text-red-900">Welcome to <span>Office of the Community Extension Services (OCES)!</span></div>
                    <p className="px-10 py-5">Head, Office of the Community Extension Services and National Service Training Program</p>
                    <address className="px-10 pb-5">
                        Ms. Shirley Mae B. Marcos<br />
                        smbarrera@hau.edu.ph<br />
                        Monday to Friday 8:00 a.m. to 5:00 p.m.<br />
                    </address>
                    <footer className="float-right mt-32 mr-10">
                        <Link to="/login">
                        <button className="text-white bg-red-900 hover:bg-red-800 font-semibold rounded-lg text-base px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                            User Login
                        </button>
                        </Link>
                    </footer>
                    <br/><br/><br/><br/><br/><br/>
                </main>
            </div>
        </section>
        </body>
    )
    return content
}
export default Public