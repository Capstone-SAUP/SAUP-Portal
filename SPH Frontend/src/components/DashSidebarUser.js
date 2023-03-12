import DashSidebar from "./DashSidebar";
import { useGetUsersQuery } from "../features/users/usersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";

const DashSidebarUser = () => {
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
const { ids } = users;

// console.log(ids);
  
  content = <DashSidebar/>;
    }
  return content
}
export default DashSidebarUser
