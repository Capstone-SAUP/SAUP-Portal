import { useState, useEffect } from "react"
import { useAddNewUserMutation } from "./usersApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"
import useTitle from "../../hooks/useTitle"

const USER_REGEX = /^[0-9]{3,20}$/
const FNAME_REGEX = /^[a-zA-Z]{3,20}$/
const LNAME_REGEX = /^[a-zA-Z]{3,20}$/
const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const NewUserForm = () => {
    useTitle('SAUP Portal: New User')

    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const navigate = useNavigate()

    const [user_id, setUser_id] = useState('')
    const [validuser_id, setValiduser_id] = useState(false)
    const [firstname, setFirstname] = useState('')
    const [validFirstname, setValidFirstname] = useState(false)
    const [lastname, setLastname] = useState('')
    const [validLastname, setValidLastname] = useState(false)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(["Student"])

    useEffect(() => {
        setValiduser_id(USER_REGEX.test(user_id))
    }, [user_id])

    useEffect(() => {
        setValidLastname(LNAME_REGEX.test(lastname))
    }, [lastname])

    useEffect(() => {
        setValidFirstname(FNAME_REGEX.test(firstname))
    }, [firstname])
    
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(() => {
        if (isSuccess) {
            setUser_id('')
            setLastname('')
            setFirstname('')
            setEmail('')
            setPassword('')
            setRoles([])
            navigate('/dash/users')
        }
    }, [isSuccess, navigate])

    const onUser_idChanged = e => setUser_id(e.target.value)
    const onLastnameChanged = e => setLastname(e.target.value)
    const onFirstnameChanged = e => setFirstname(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection 
            (option) => option.value
        )
        setRoles(values)
    }

    const canSave = [roles.length, validLastname, validFirstname, validEmail, validuser_id, validPassword].every(Boolean) && !isLoading

    const onSaveUserClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewUser({ user_id, lastname, firstname, email, password, roles })
        }
    }

    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validUserClass = !validuser_id ? 'form__input--incomplete' : ''
    const validLastnameClass = !validLastname ? 'form__input--incomplete' : ''
    const validFirstnameClass = !validFirstname ? 'form__input--incomplete' : ''
    const validEmailClass = !validEmail ? 'form__input--incomplete' : ''
    const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
    const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''


    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSaveUserClicked}>
                <div className="form__title-row">
                    <h2>New User</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                    </div>
                </div>
                <label className="form__label" htmlFor="user_id">
                    Student ID: </label>
                <input
                    className={`form__input ${validUserClass}`}
                    onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                    id="user_id"
                    name="user_id"
                    type="text"
                    autoComplete="off"
                    value={user_id}
                    onChange={onUser_idChanged}
                />

                <label className="form__label" htmlFor="first_name">
                    First Name:</label>
                <input
                    className={`form__input ${validFirstnameClass}`}
                    onKeyPress={(e) => !/[a-zA-Z]/.test(e.key) && e.preventDefault()}
                    id="fname"
                    name="fname"
                    type="text"
                    autoComplete="off"
                    value={firstname}
                    onChange={onFirstnameChanged}
                />
                
                <label className="form__label" htmlFor="last_name">
                    Last Name:</label>
                <input
                    className={`form__input ${validLastnameClass}`}
                    onKeyPress={(e) => !/[a-zA-Z]/.test(e.key) && e.preventDefault()}
                    id="lname"
                    name="lname"
                    type="text"
                    autoComplete="off"
                    value={lastname}
                    onChange={onLastnameChanged}
                />

                <label className="form__label" htmlFor="email">
                    HAU Email: <span className="nowrap">[@hau.edu.ph]</span></label>
                <input
                    className={`form__input ${validEmailClass}`}
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="off"
                    value={email}
                    onChange={onEmailChanged}
                />

                <label className="form__label" htmlFor="password">
                    Password: <span className="nowrap">[4-12 chars incl. !@#$%]</span></label>
                <input
                    className={`form__input ${validPwdClass}`}
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChanged}
                />

                <label className="form__label" htmlFor="roles">
                    ASSIGNED ROLES:</label>
                <select
                    id="roles"
                    name="roles"
                    className={`form__select ${validRolesClass}`}
                    multiple={true}
                    size="3"
                    value={roles}
                    onChange={onRolesChanged}
                >
                    {options}
                </select>

            </form>
        </>
    )

    return content
}
export default NewUserForm