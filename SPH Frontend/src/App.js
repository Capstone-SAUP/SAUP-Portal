import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import ViewOutreach from "./features/outreach/ViewOutreach";
import OutreachReportForm from "./features/outreach/OutreachReportForm";
import ReportOutreach from "./features/outreach/ReportOutreach";
import NewOutreach from "./features/outreach/NewOutreach";
import OutreachEmpList from "./features/outreach/OutreachEmpList";
import OutreachStudList from "./features/outreach/OutreachStudList";
import ReportsList from "./features/outreach/ReportsList";
import GenerateSummary from "./features/generate/GenerateSummary";
import GenerateCertificate from "./features/generate/GenerateCertificate";
import DataOverview from "./features/infos/DataOverview";
import ApplicationForms from "./features/infos/ApplicationForms";
import SubmitApplication from "./features/infos/SubmitApplication";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from "./hooks/useTitle";
import Designer from "./features/forms/Designer";
import FormAndViewer from "./features/forms/FormAndViewer";
import NewEmployeeOutreach from "./features/forms/NewEmployeeOutreach";
import ReportsView from "./features/outreach/ReportsView";
import NewStudentOutreach from "./features/forms/NewStudentOutreach";
import OutreachStudentView from "./features/forms/OutreachStudentView";
import ViewStudentOutreach from "./features/outreach/ViewStudentOutreach";
import ViewEmployeeOutreach from "./features/outreach/ViewEmployeeOutreach";


function App() {
  useTitle("SAUP Portal HAU");

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>
                <Route index element={<Welcome />} />

                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>

                <Route path="employee">
                  <Route index element={<OutreachEmpList />} />
                  <Route path="view">
                    <Route path=":id" element={<ViewEmployeeOutreach />} />
                  </Route>
                  <Route path="reports">
                    <Route path=":id" element={<ReportOutreach />} />
                  </Route>
                  <Route path="new" element={<NewOutreach />} />
                </Route>

                <Route path="student">
                  <Route index element={<OutreachStudList />} />
                  <Route path="view">
                    <Route path=":id" element={<ViewStudentOutreach />} />
                  </Route>
                  <Route path="reports">
                    <Route path=":id" element={<ReportOutreach />} />
                  </Route>
                  <Route path="new" element={<NewOutreach />} />
                </Route>

                <Route path="reports">
                  <Route index element={<ReportsList />} />
                  <Route path="view">
                    <Route path=":id" element={<ReportsView />} />
                  </Route>
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                  <Route path="generate-summary">
                    <Route index element={<GenerateSummary />} />
                  </Route>
                  <Route path="data-overview">
                    <Route index element={<DataOverview />} />
                  </Route>
                </Route>
                <Route path="application-forms">
                  <Route index element={<ApplicationForms />} />
                </Route>
                {/* <Route path="submit-forms">
                  <Route index element={<SubmitApplication />} />
                </Route> */}
                <Route
                  element={
                    <RequireAuth
                      allowedRoles={[
                        ROLES.Student,
                        ROLES.Admin,
                        ROLES.Facilitator,
                      ]}
                    />
                  }
                >
                  <Route path="view-anex-A">
                    <Route index element={<NewStudentOutreach />} />
                  </Route>
                </Route>
                <Route
                  element={
                    <RequireAuth
                      allowedRoles={[
                        ROLES.Employee,
                        ROLES.Admin,
                        ROLES.Facilitator,
                      ]}
                    />
                  }
                >
                  <Route path="generate-certificate">
                    <Route index element={<GenerateCertificate />} />
                  </Route>
                  <Route path="view-anex-B">
                    <Route index element={<NewEmployeeOutreach />} />
                  </Route>
                </Route>
                <Route path="view-anex-C">
                  <Route index element={<FormAndViewer />} />
                </Route>

                {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                  <Route path="design-anex-A">
                    <Route index element={<Designer />} />
                  </Route>
                  <Route path="design-anex-B">
                    <Route index element={<Designer />} />
                  </Route>
                  <Route path="design-anex-C">
                    <Route index element={<Designer />} />
                  </Route>
                  <Route path="design-anex-D">
                    <Route index element={<Designer />} />
                  </Route>
                </Route> */}
              </Route>
              {/* End Dash */}
            </Route>
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Route>
    </Routes>
  );
}

export default App;
