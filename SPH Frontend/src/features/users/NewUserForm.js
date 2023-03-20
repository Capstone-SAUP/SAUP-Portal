import { useState, useEffect } from "react";
import { useAddNewUserMutation } from "./usersApiSlice";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../config/roles";
import { DEPT } from "../../config/department";
import { TENURE } from "../../config/tenure";
import useTitle from "../../hooks/useTitle";

const USER_REGEX = /^[0-9]{3,20}$/;
const FNAME_REGEX = /^[a-zA-Z ]{3,20}$/;
const LNAME_REGEX = /^[a-zA-Z ]{3,20}$/;
const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const NewUserForm = () => {
    useTitle("SAUP Portal: New User");

    const [addNewUser, { isLoading, isSuccess, isError, error }] =
        useAddNewUserMutation();

    const navigate = useNavigate();

    const [user_id, setUser_id] = useState("");
    const [validuser_id, setValiduser_id] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [validFirstname, setValidFirstname] = useState(false);
    const [lastname, setLastname] = useState("");
    const [validLastname, setValidLastname] = useState(false);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [roles, setRoles] = useState(["Student"]);
    const [department, setDept] = useState(["N/A"]);
    const [tenure, setTenure] = useState(["Regular"]);



    useEffect(() => {
        setValiduser_id(USER_REGEX.test(user_id));
    }, [user_id]);

    useEffect(() => {
        setValidLastname(LNAME_REGEX.test(lastname));
    }, [lastname]);

    useEffect(() => {
        setValidFirstname(FNAME_REGEX.test(firstname));
    }, [firstname]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password]);

    useEffect(() => {
        if (isSuccess) {
            setUser_id("");
            setLastname("");
            setFirstname("");
            setEmail("");
            setPassword("");
            setRoles([]);
            setDept([]);
            setTenure([]);
            navigate("/dash/users");
        }
    }, [isSuccess, navigate]);

    const onUser_idChanged = (e) => setUser_id(e.target.value);
    const onLastnameChanged = (e) => setLastname(e.target.value);
    const onFirstnameChanged = (e) => setFirstname(e.target.value);
    const onEmailChanged = (e) => setEmail(e.target.value);
    const onPasswordChanged = (e) => setPassword(e.target.value);

    const onRolesChanged = (e) => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection
            (option) => option.value
        );
        setRoles(values);
    };

    const onDeptChanged = (e) => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection
            (optionDept) => optionDept.value
        );
        setDept(values);
    };

    const onTenureChanged = (e) => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection
            (optionTenure) => optionTenure.value
        );
        setTenure(values);
    };

    const canSave =
        [   
            tenure.length,
            department.length,
            roles.length,
            validLastname,
            validFirstname,
            validEmail,
            validuser_id,
            validPassword,
        ].every(Boolean) && !isLoading;

    const onSaveUserClicked = async (e) => {
        e.preventDefault();
        if (canSave) {
            await addNewUser({
                user_id,
                lastname,
                firstname,
                email,
                password,
                roles,
                department,
                tenure,
            });
        }
    };

    const option = Object.values(ROLES).map((role) => {
        return (
            <option key={role} value={role}>
                {" "}
                {role}
            </option>
        );
    });

    const optionDept = Object.values(DEPT).map((dept) => {
        return (
            <option key={dept} value={dept}>
                {" "}
                {dept}
            </option>
        );
    });

    const optionTenure = Object.values(TENURE).map((tenur) => {
        return (
            <option key={tenur} value={tenur}>
                {" "}
                {tenur}
            </option>
        );
    });

    const errClass = isError ? "errmsg" : "offscreen";
    const validUserClass = !validuser_id
        ? "bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-1/2"
        : "";
    const validLastnameClass = !validLastname
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";
    const validFirstnameClass = !validFirstname
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";
    const validEmailClass = !validEmail
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";
    const validPwdClass = !validPassword
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";
    const validRolesClass = !Boolean(roles.length)
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";
   const validDeptClass = !Boolean(department.length)
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";
   const validTenureClass = !Boolean(tenure.length)
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";

    const content = (
        <>
            <img
                className=" w-1/2 h-screen float-left mix-blend-multiply object-cover "
                src={require("../../img/background.jpg")}
                alt="background"
            ></img>
            <p className={errClass}>{error?.data?.message}</p>
            <div className="">
                <form
                    className="h-full gap-2 px-20 grid text-black"
                    onSubmit={onSaveUserClicked}
                >
                    <div className="flex justify-between items-center">
                        <h1 className="text-5xl font-bold pb-2 text-black mb-4 font-sans">
                            Sign <span className="text-rose-900">Up</span>
                        </h1>
                    </div>

                    <div className="w-full grid">
                        <label
                            className="text-base align-middle"
                            htmlFor="user_id"
                        >
                            User ID:
                        </label>
                        <input
                            className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 ${validUserClass}`}
                            onKeyPress={(e) =>
                                !/[0-9]/.test(e.key) && e.preventDefault()
                            }
                            id="user_id"
                            name="user_id"
                            type="text"
                            autoComplete="off"
                            value={user_id}
                            onChange={onUser_idChanged}
                        />
                    </div>
                    <div>
                        <label className="text-base" htmlFor="first_name">
                            First Name:
                        </label>
                        <input
                            className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-full ${validFirstnameClass}`}
                            onKeyPress={(e) =>
                                !/[a-zA-Z ]/.test(e.key) && e.preventDefault()
                            }
                            id="fname"
                            name="fname"
                            type="text"
                            autoComplete="off"
                            value={firstname}
                            onChange={onFirstnameChanged}
                        />
                    </div>
                    <div>
                        <label className="text-base" htmlFor="last_name">
                            Last Name:
                        </label>
                        <input
                            className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-full ${validLastnameClass}`}
                            onKeyPress={(e) =>
                                !/[a-zA-Z ]/.test(e.key) && e.preventDefault()
                            }
                            id="lname"
                            name="lname"
                            type="text"
                            autoComplete="off"
                            value={lastname}
                            onChange={onLastnameChanged}
                        />
                    </div>
                    <div>
                        <label className="text-base" htmlFor="email">
                            HAU Email:
                        </label>
                        <input
                            className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-full ${validEmailClass}`}
                            id="email"
                            name="email"
                            type="text"
                            autoComplete="off"
                            value={email}
                            onChange={onEmailChanged}
                        />
                        <div className="text-gray-500 text-xs">
                            Must contain @hau.edu.ph
                        </div>
                    </div>
                    <div>
                        <label className="text-base" htmlFor="password">
                            Password:{" "}
                        </label>
                        <input
                            className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-full ${validPwdClass}`}
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={onPasswordChanged}
                        />
                        <div className="text-gray-500 text-xs">
                            4-12 chars incl. !@#$%
                        </div>
                    </div>
                    <div>
                        <div className="w-full grid">
                            <label
                                className="text-base align-middle"
                                htmlFor="roles"
                            >
                                Assigned Role:
                            </label>
                            <select
                                id="roles"
                                name="roles"
                                className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 ${validRolesClass}`}
                                value={roles}
                                onChange={onRolesChanged}
                            >
                                {option}
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="w-full grid">
                            <label
                                className="text-base align-middle"
                                htmlFor="dept"
                            >
                                Assigned Department:
                            </label>
                            <select
                                id="dept"
                                name="dept"
                                className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 ${validDeptClass}`}
                                value={department}
                                onChange={onDeptChanged}
                            >
                                {optionDept}
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="w-full grid">
                            <label
                                className="text-base align-middle"
                                htmlFor="dept"
                            >
                                Tenure:
                            </label>
                            <select
                                id="tenur"
                                name="tenur"
                                className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 ${validTenureClass}`}
                                value={tenure}
                                onChange={onTenureChanged}
                            >
                                {optionTenure}
                            </select>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <button
                            className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                            title="Save"
                            disabled={!canSave}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );

    return content;
};
export default NewUserForm;
