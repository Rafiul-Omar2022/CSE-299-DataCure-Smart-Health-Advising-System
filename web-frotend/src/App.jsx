import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import UserDashboardLayout from "./Component/UserDashboardLayout";
import UserDashboard from "./Pages/Dashboard/User/UserDashboard";
import UserAppointment from "./Pages/Dashboard/User/Appointment/UserAppointment";
import UserReport from "./Pages/Dashboard/User/Report/UserReport";
import UserGraph from "./Pages/Dashboard/User/Graph.jsx/UserGraph";
import UserMeet from "./Pages/Dashboard/User/Meet/UserMeet";
import FindDoctor from "./Pages/Dashboard/User/Appointment/FindDoctor";
import FindSpecialist from "./Pages/Dashboard/User/Appointment/FindSpecialist";
import UserAppointmnetLayout from "./Component/UserAppointmnetLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-dashboard" element={<UserDashboardLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="appointment" element={<UserAppointmnetLayout />}>
              <Route index element={<UserAppointment />} />
              <Route path="find-doctor" element={<FindDoctor />} />
              <Route path="find-specialist" element={<FindSpecialist />} />
            </Route>
            <Route path="report" element={<UserReport />} />
            <Route path="payment" element={<UserReport />} />
            <Route path="graph" element={<UserGraph />} />
            <Route path="meet" element={<UserMeet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
