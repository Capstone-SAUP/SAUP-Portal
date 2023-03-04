import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import OutreachList from "./features/outreach/OutreachList";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditOutreach from "./features/outreach/EditOutreach";
import NewOutreach from "./features/outreach/NewOutreach";
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

                <Route path="outreach">
                  <Route index element={<OutreachList />} />
                  <Route path=":id" element={<EditOutreach />} />
                  <Route path="new" element={<NewOutreach />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                  <Route path="generate-summary">
                    <Route index element={<GenerateSummary />} />
                  </Route>
                  <Route path="generate-certificate">
                    <Route index element={<GenerateCertificate />} />
                  </Route>
                  <Route path="data-overview">
                    <Route index element={<DataOverview />} />
                  </Route>
                </Route>
                <Route path="application-forms">
                  <Route index element={<ApplicationForms />} />
                </Route>
                <Route path="submit-forms">
                  <Route index element={<SubmitApplication />} />
                </Route>

                <Route path="view-anex-A">
                  <Route index element={<FormAndViewer />} />
                </Route>
                <Route path="view-anex-B">
                  <Route index element={<FormAndViewer />} />
                </Route>
                <Route path="view-anex-C">
                  <Route index element={<FormAndViewer />} />
                </Route>
                <Route path="view-anex-D">
                  <Route index element={<FormAndViewer />} />
                </Route>
                
                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
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
                </Route>

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
