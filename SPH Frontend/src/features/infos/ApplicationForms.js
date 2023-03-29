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
          <p className="text-lg mt-4">
            Student Intake Form and Community Outreach Proposal - Annex A
            (FM-CES-4026-Rev-01)-This is intended for student initiated
            activities and should be submitted a week before the activity.
          </p>
          <p className="text-lg mt-4">
            Community Extension Proposal Form - Annex B
            (FM-CES-4009_Community-Extension-Proposal-Form_rev). This form is
            for HAU employees’ use and should be submitted a month before the
            activity.
          </p>
          <p className="text-lg mt-4">
            The said forms will be OCES’ guide in documenting your
            department/college/organization’s CES involvement. For your
            information and guidance. Thank you. Laus Deo semper!
          </p>
        </div>
        <h1 className="font-bold text-2xl pb-5">Application Forms</h1>
        <div className="mr-80 pb-5 -mt-4">
          <p className="text-lg">
            Attached below are the following forms to be submitted for approval
            of OCES.
          </p>
        </div>
        <div>
          {StudentIntake}
          {EmployeeIntake}
          <div>{EditForm_C_Button}</div>
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
