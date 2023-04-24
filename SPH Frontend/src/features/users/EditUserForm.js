import { useState, useEffect } from "react";
import { useUpdateUserMutation, useDeleteUserMutation } from "./usersApiSlice";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../config/roles";
import { DEPT } from "../../config/department";
import { TENURE } from "../../config/tenure";
import { EMPSTATUS } from "../../config/empstatus";

const USER_REGEX = /^[0-9]{3,20}$/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const EditUserForm = ({ user }) => {
    const [updateUser, { isLoading, isSuccess, isError, error }] =
        useUpdateUserMutation();

    const [
        deleteUser,
        { isSuccess: isDelSuccess, isError: isDelError, error: delerror },
    ] = useDeleteUserMutation();

    const navigate = useNavigate();

    const [user_id, setUser_id] = useState(user.user_id);
    const [validUser_id, setValidUser_id] = useState(false);
    const [email, setEmail] = useState(user.email);
    const [validEmail, setValidEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [roles, setRoles] = useState(user.roles);
    const [department, setDept] = useState(user.department);
    const [tenure, setTenure] = useState(user.tenure);
    const [empstatus, setEmpStatus] = useState(user.empstatus);
    const [active, setActive] = useState(user.active);

    useEffect(() => {
        setValidUser_id(USER_REGEX.test(user_id));
    }, [user_id]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password]);

    useEffect(() => {
        console.log(isSuccess);
        if (isSuccess || isDelSuccess) {
            setUser_id("");
            setEmail("");
            setPassword("");
            setRoles([]);
            setDept([]);
            setTenure([]);
            setEmpStatus([]);
            navigate("/dash/users");
        }
    }, [isSuccess, isDelSuccess, navigate]);

    const onUser_idChanged = (e) => setUser_id(e.target.value);
    const onEmailChanged = (e) => setEmail(e.target.value);
    const onPasswordChanged = (e) => setPassword(e.target.value);

    const onRolesChanged = (e) => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setRoles(values);
    };

    const onDeptChanged = (e) => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setDept(values);
    };

    const onTenureChanged = (e) => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setTenure(values);
    };

    const onEmpStatusChanged = (e) => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setEmpStatus(values);
    };

    const onActiveChanged = () => setActive((prev) => !prev);

    const onSaveUserClicked = async (e) => {
        if (password) {
            await updateUser({
                id: user.id,
                user_id,
                email,
                password,
                roles,
                department,
                tenure,
                empstatus,
                active,
            });
        } else {
            await updateUser({ id: user.id, user_id, email, roles, department, tenure, empstatus, active });
        }
    };

    const onDeleteUserClicked = async () => {
        await deleteUser({ id: user.id });
    };

    const options = Object.values(ROLES).map((role) => {
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
        
    const optionEmpStatus = Object.values(EMPSTATUS).map((empstatus) => {
        return (
            <option key={empstatus} value={empstatus}>
                {" "}
                {empstatus}
            </option>
        );
    });
        

    let canSave;
    if (password) {
        canSave =
            [roles.length, department.length, tenure.length, validUser_id, validPassword].every(Boolean) &&
            !isLoading;
    } else {
        canSave = [roles.length, department.length, tenure.length, validUser_id].every(Boolean) && !isLoading;
    }

    const errClass = isError || isDelError ? "errmsg" : "offscreen";
    const validUserClass = !validUser_id
        ? "bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-1/2"
        : "";
    const validEmailClass = !validEmail
        ? "bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"
        : "";
    const validPwdClass =
        password && !validPassword
            ? "bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"
            : "";
    const validRolesClass = !Boolean(roles.length)
        ? "bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"
        : "";
    const validDeptClass = !Boolean(department.length)
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";
    const validTenure = !Boolean(tenure.length)
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";
    const validEmpStatus = !Boolean(empstatus.length)
        ? '"bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"'
        : "";
        
    const errContent = (error?.data?.message || delerror?.data?.message) ?? "";

    const content = (
        <>
            <img
                className=" w-1/2 h-screen float-right mix-blend-multiply object-cover "
                src={require("../../img/background.jpg")}
                alt="background"
            ></img>
            <p className={errClass}>{errContent}</p>
            <form
                className="h-full w-1/2 grid gap-3 px-20 text-black"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl font-bold pb-2 text-black mb-4 font-sans">
                        Edit <span className="text-rose-900">User</span>
                    </h1>
                </div>
                <div className="w-full grid">
                    <label className="text-base align-middle" htmlFor="user_id">
                        User ID:
                    </label>
                    <input
                        className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2${validUserClass}`}
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
                    <label className="text-base" htmlFor="">
                        Password:
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
                        blank = no change, 8-16 chars incl. !@#$%
                    </div>
                </div>
                <label
                    className="text-base text-gray-500 flex items-center w-fit gap-3"
                    htmlFor="user-active"
                >
                    Active:
                    <input
                        className="h-5 w-5 rounded-md"
                        id="user-active"
                        name="user-active"
                        type="checkbox"
                        checked={active}
                        onChange={onActiveChanged}
                    />
                </label>

                <div className="w-full grid">
                    <label className="text-base align-middle" htmlFor="user_id">
                        Assign Role:
                    </label>
                    <select
                        id="roles"
                        name="roles"
                        className={`form__select bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 ${validRolesClass}`}
                        value={roles}
                        onChange={onRolesChanged}
                    >
                        {options}
                    </select>
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
                                className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 ${validTenure}`}
                                value={tenure}
                                onChange={onTenureChanged}
                            >
                                {optionTenure}
                            </select>
                        </div>
                        <div className="w-full grid">
                            <label
                                className="text-base align-middle"
                                htmlFor="dept"
                            >
                                 Employment Status:
                            </label>
                            <select
                                id="empstatus"
                                name="empstatus"
                                className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 ${validEmpStatus}`}
                                value={empstatus}
                                onChange={onEmpStatusChanged}
                            >
                                {optionEmpStatus}
                            </select>
                        </div>
                <span className="">
                    <label
                        className="float-left text-base"
                        htmlFor="roles"
                    ></label>
                </span>
                

                <div className="grid-cols-2 flex justify-evenly">
                    <div className="text-center">
                        <button
                            className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                            title="Save"
                            onClick={onDeleteUserClicked}
                            disabled={!canSave}
                        >
                            Delete
                        </button>
                    </div>
                    <div className="text-center">
                        <button
                            className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                            title="Save"
                            onClick={onSaveUserClicked}
                            disabled={!canSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>
    );

    return content;
};
export default EditUserForm;
