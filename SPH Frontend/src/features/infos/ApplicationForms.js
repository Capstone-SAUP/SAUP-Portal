import useTitle from "../../hooks/useTitle";
import { FolderArrowDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
//
const ApplicationForms = () => {
    useTitle("SAUP Portal: Application Forms");

    const navigate = useNavigate();

    const { roles, isAdmin } = useAuth();

    const onEditForm_A_Clicked = () => navigate("/dash/design-anex-A");
    const onEditForm_B_Clicked = () => navigate("/dash/design-anex-B");
    const onEditForm_C_Clicked = () => navigate("/dash/design-anex-C");

    let EditForm_A_Button = null;
    // if (isAdmin) {
    //     EditForm_A_Button = (
    //         <button className="flex-initial border bg-white shadow-lg sm:rounded-lg p-2 w-44" onClick={onEditForm_A_Clicked}>
    //             <div className="text-base">Edit Form Template</div>
    //         </button>
    //     );
    // }

    let EditForm_B_Button = null;
    // if (isAdmin) {
    //     EditForm_B_Button = (
    //         <button className="flex-initial border bg-white shadow-lg sm:rounded-lg p-2 w-44" onClick={onEditForm_B_Clicked}>
    //             <div className="text-base">Edit Form Template</div>
    //         </button>
    //     );
    // }

    let EditForm_C_Button = null;
    // if (isAdmin) {
    //     EditForm_C_Button = (
    //         <button className="flex-initial border bg-white shadow-lg sm:rounded-lg p-2 w-44" onClick={onEditForm_C_Clicked}>
    //             <div className="text-base">Edit Form Template</div>
    //         </button>
    //     );
    // }

    // let EditForm_D_Button = null;
    // if (isAdmin) {
    //     EditForm_D_Button = (
    //         <button className="flex-initial border bg-white shadow-lg sm:rounded-lg p-2 w-44" onClick={onEditForm_D_Clicked}>
    //             <div className="text-base">Edit Form Template</div>
    //         </button>
    //     );
    // }

    let StudentIntake = null;
    if(roles == "Student" || roles == "Admin"){
        StudentIntake = (
            <div>
                    {EditForm_A_Button}
                    <Link
                        className="flex border bg-white shadow-lg sm:rounded-lg p-2 mb-5 w-1/2 lg-md:w-3/5"
                        to="/dash/view-anex-A"
                    >
                        <div>
                            <FolderArrowDownIcon className="text-red-900 h-20 pr-2" />
                        </div>
                        <div className="text-base">
                            <p className="mb-5">
                                Student Intake Form and Community Outreach
                                Proposal.pdf
                            </p>
                            <p>Upload Date: 11/10/2022</p>
                        </div>
                    </Link>
                </div>
        );
    }

    let EmployeeIntake = null;
    if(roles == "Employee" || roles == "Admin"){
        EmployeeIntake = (
            <div>
            {EditForm_B_Button}
            <Link to="/dash/view-anex-B">
                <div className="flex border bg-white shadow-lg sm:rounded-lg p-2 mb-5 w-1/2 lg-md:w-3/5">
                    <div>
                        <FolderArrowDownIcon className="text-red-900 h-20 pr-2" />
                    </div>
                    <div className="text-base">
                        <p className="mb-5">
                            Community Extension Proposal Form.pdf
                        </p>
                        <p>Upload Date: 11/10/2022</p>
                    </div>
                </div>
            </Link>
        </div>
        );
    }


    return (
        <>
            <h1 className="font-bold text-2xl pb-5">Application Process</h1>
            <div className="mr-80 pb-20">
                <p className="text-lg -mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                    aliquet euismod pellentesque et eu molestie elit. Id netus
                    ultricies nisl ultricies nulla ac. Rhoncus proin mauris
                    nulla odio ipsum ut odio. Semper turpis tempus, sit aliquam.
                    Sagittis velit ultrices et malesuada id pellentesque arcu.
                    Elit, felis, ut leo turpis massa mi quam urna. Sit sit morbi
                    malesuada rutrum pellentesque aenean arcu. Lacus, a sed
                    facilisis orci sed sagittis. Aliquam feugiat fringilla
                    ligula tincidunt ultrices. Arcu, odio pharetra eu laoreet
                    quam quis dolor amet volutpat. Massa commodo quisque cursus
                    vitae, dolor enim urna at dignissim. Eget magna nec sed sit
                    ultrices at consequat. Suspendisse augue velit velit
                    accumsan urna eget. Diam at volutpat duis non.
                </p>
            </div>
            <h1 className="font-bold text-2xl pb-5">Application Forms</h1>
            <div className="mr-80 pb-5 -mt-3">
                <p className="text-lg">
                    Attached below are the following forms to be submitted for
                    approval of OCES.
                </p>
            </div>
            <div>
                {StudentIntake}
                {EmployeeIntake}
                <div>
                {EditForm_C_Button}
                </div>
                {/* <div>
                {EditForm_D_Button}
                    <Link to="/dash/view-anex-D">
                        <div className="flex border bg-white shadow-lg sm:rounded-lg p-2 mb-5 w-1/2 lg-md:w-3/5">
                            <div>
                                <FolderArrowDownIcon className="text-red-900 h-20 pr-2" />
                            </div>
                            <div className="text-base">
                                <p className="mb-5">
                                    Proposal and Implementation Report Templates
                                    Edited.pdf
                                </p>
                                <p>Upload Date: 11/10/2022</p>
                            </div>
                        </div>
                    </Link>
                </div> */}
            </div>
        </>
    );
};
export default ApplicationForms;
