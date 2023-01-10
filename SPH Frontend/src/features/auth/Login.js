import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import useTitle from '../../hooks/useTitle'
import PulseLoader from 'react-spinners/PulseLoader'
import '../../index.css'

const Login = () => {
    useTitle('Employee Login')

    const userRef = useRef()
    const errRef = useRef()
    const [user_id, setuser_id] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user_id, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ user_id, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setuser_id('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing user_id or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setuser_id(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <PulseLoader color={"#FFF"} />

    const content = (
        <section className="">
            <main className="">
                <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>
                <img className="w-1/2 h-screen float-left mix-blend-multiply object-cover"src={require('../../img/background.jpg')} alt='background'></img>
                <form className="h-screen grid place-content-center" onSubmit={handleSubmit}>
                <br></br>
                <h1 className="text-5xl font-bold pb-2 mb-4 font-sans">Sign <span className="text-rose-900">In</span></h1>
                    <label className="mb-1" htmlFor="user_id">Student ID:</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 bloc w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}                     
                        type="text"
                        id="user_id"
                        ref={userRef}
                        value={user_id}
                        onChange={handleUserInput}
                        autoComplete="off"
                        required
                    />
                    <br></br>
                    <label  className="mb-1" htmlFor="password">Password:</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 bloc w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="password"
                        id="password"
                        onChange={handlePwdInput}
                        value={password}
                        required
                    />
                                        <br></br>

                    <button className="form__submit-button bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline justify-center">Sign In</button>

                    <br></br>
                    <label htmlFor="persist" className="form__persist">
                        <input
                            type="checkbox"
                            className="checkbox "
                            id="persist"
                            onChange={handleToggle}
                            checked={persist}
                        />
                        Trust This Device
                    </label>
                </form>
            </main>

           {/* <footer> 
                <Link className='text-gray-900' to="/">Back to Home</Link>
            </footer> */}
            
        </section>
    )

    return content
}
export default Login