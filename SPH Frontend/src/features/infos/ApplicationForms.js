import useTitle from "../../hooks/useTitle"
import { FolderArrowDownIcon } from "@heroicons/react/20/solid"

const ApplicationForms = () => {
  useTitle('SAUP Portal: Application Forms')

  return (
    <>
    <h1 className="font-bold text-2xl pb-5">Application Process</h1>
    <div className="mr-80 pb-20">
      <p className="text-lg -mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquet euismod pellentesque et eu molestie elit. Id netus ultricies nisl ultricies nulla ac. Rhoncus proin mauris nulla odio ipsum ut odio. Semper turpis tempus, sit aliquam. Sagittis velit ultrices et malesuada id pellentesque arcu. Elit, felis, ut leo turpis massa mi quam urna. Sit sit morbi malesuada rutrum pellentesque aenean arcu. Lacus, a sed facilisis orci sed sagittis. Aliquam feugiat fringilla ligula tincidunt ultrices. Arcu, odio pharetra eu laoreet quam quis dolor amet volutpat. Massa commodo quisque cursus vitae, dolor enim urna at dignissim. Eget magna nec sed sit ultrices at consequat. Suspendisse augue velit velit accumsan urna eget. Diam at volutpat duis non.
      </p>
    </div>
    <h1 className="font-bold text-2xl pb-5">Application Forms</h1>
          <div className="mr-80 pb-5 -mt-3">
      <p className="text-lg">
        Attached below are the following forms to be submitted for approval of OCES.
      </p>
    </div>
    <div>
    <div className="inline-flex border overflow-hidden bg-white shadow-lg sm:rounded-lg p-2 lg:w-2/5 md:w-3/5 sm:w-screen">
      <div>
        <FolderArrowDownIcon className="text-red-900 h-20 pr-2"/>
      </div>
      <div className="flex-shrink-0 text-base">
        Student Intake Form and Community Outreach Proposal.pdf
        <br/>
        <br/>
        Upload Date: 11/10/2022
      </div>
    </div>
    <br/>
    <div className="inline-flex border overflow-hidden bg-white shadow-lg sm:rounded-lg p-2 mt-5 lg:w-2/5 md:w-3/5 sm:w-screen">
      <div>
        <FolderArrowDownIcon className="text-red-900 h-20 pr-2"/>
      </div>
      <div className="flex-shrink-0 text-base">
        Community Extension Proposal Form.pdf
        <br/>
        <br/>
        Upload Date: 11/10/2022
      </div>
    </div>
    <br/>
    <div className="inline-flex border overflow-hidden bg-white shadow-lg sm:rounded-lg p-2 mt-5 lg:w-2/5 md:w-3/5 sm:w-screen">
      <div>
        <FolderArrowDownIcon className="text-red-900 h-20 pr-2"/>
      </div>
      <div className="flex-shrink-0 text-base">
        Implementation Report Form on Community Extension Project.pdf
        <br/>
        <br/>
        Upload Date: 11/10/2022
      </div>
    </div>
    <br/>
    <div className="inline-flex border overflow-hidden bg-white shadow-lg sm:rounded-lg p-2 mt-5 lg:w-2/5 md:w-3/5 sm:w-screen">
      <div>
        <FolderArrowDownIcon className="text-red-900 h-20 pr-2"/>
      </div>
      <div className="flex-shrink-0 text-base">
        Proposal and Implementation Report Templates Edited.pdf
        <br/>
        <br/>
        Upload Date: 11/10/2022
      </div>
    </div>
    </div>
    </>
    
  )
}
export default ApplicationForms