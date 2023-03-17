import { useGetUsersQuery } from "./usersApiSlice";
import User from "./User";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";

const UsersList = () => {
    useTitle("SAUP Portal: Users List");

    const navigate = useNavigate();

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUsersQuery("usersList", {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });

    let content;

    if (isLoading) content = <PulseLoader color={"#FFF"} />;

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>;
    }

    if (isSuccess) {
        const handleUser = () => navigate(`/dash/users/new`);
        const handlenew = () => navigate(`/dash/users/outform`);


        const { ids } = users;

        const tableContent =
            ids?.length &&
            ids.map((userId) => <User key={userId} userId={userId} />);

        content = (
            <>
                <p className="text-2xl font-semibold">
                    Users List
                </p>
                <nav className="border shadow-md shadow-gray-400 mb-4 p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-wrap items-center justify-between mx-auto">
                        <ul className="flex gap-x-20 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <div className=" px-4 text-sm font-bold">
                                    What are you looking for?
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className=" z-1 block ml-4 bg-gray-300 border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                ></input>
                            </li>
                            <li>
                                <label className=" px-4 py-10 text-sm font-bold">
                                    Department
                                </label>
                                <select
                                    type="text"
                                    placeholder="Search"
                                    className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>All</option>
                                    <option value="US">SOC</option>
                                    <option value="CA">SAS</option>
                                    <option value="FR">SBA</option>
                                </select>
                            </li>
                            <li>
                                <label className=" px-4 py-10 text-sm font-bold">
                                    Status
                                </label>
                                <select className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Pending</option>
                                    <option value="US">Completed</option>
                                    <option value="CA">Ongoing</option>
                                </select>
                            </li>
                            <li>
                                <label className=" px-4 py-10 text-sm font-bold">
                                    Sort By
                                </label>
                                <select className="mr-20 w-full z-1 block ml-4 bg-white border py-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-900 focus:border-rose-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Date</option>
                                    <option value="US">SOC</option>
                                    <option value="CA">SAS</option>
                                    <option value="FR">SBA</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="w-full rounded-lg shadow-md border shadow-gray-400">
                    <div className="">
                        <div className="px-5 font-bold mt-2"></div>
                        <button
                            className="text-white  bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                            onClick={handleUser}
                        >
                            Add New User
                        </button>
                        <button
                            className="text-white  bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                            onClick={handlenew}
                        >
                            Add New User
                        </button>
                    </div>
                    <table className="w-full text-left table-fixed">
                        <thead className="">
                            <tr className="text-base bg-gray-200 ">
                                <th scope="col" className="px-5 py-3">
                                    User ID
                                </th>
                                <th scope="col" className="">
                                    Name
                                </th>
                                <th scope="col" className="">
                                    Hau Email
                                </th>
                                <th scope="col" className="w-32">
                                    Roles
                                </th>
                                <th scope="col" className="px-4 w-32">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-base">{tableContent}</tbody>
                    </table>
                </div>
            </>
        );
    }

    return content;
};
export default UsersList;
