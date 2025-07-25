import { Link, NavLink, Outlet } from "react-router-dom";
import UserDashboardNavbar from "../Pages/Dashboard/User/UserDashboardNavbar";

export default function UserDashboardLayout() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Sidebar */}
      <div className="w-52 h-screen bg-white border-r border-gray-300 p-5">
        <Link to="/" className="logo-link">
          <h2 className="text-blue-700 mb-5 text-2xl">DataCure</h2>
        </Link>
        {
          // Sidebar navigation
          dashBoardNavigation
        }
        <div className="mt-5">
          <Link to="profile" className="block py-2">
            Profile
          </Link>
          <a href="landing.html" className="block py-2">
            Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full col-start-3 col-end-12">
        <div className="w-full">
          {/* Navbar */}
          <UserDashboardNavbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// Active navbar style
const activeStyle = {
  backgroundColor: "#bbdefb",
};

// Sidebar navigation list
const dashBoardNavigation = (
  <nav className="flex flex-col space-y-5 px-2">
    <NavLink
      to="."
      end
      className="bg-gray-100 p-2 font-bold rounded-sm"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      Overview
    </NavLink>

    <NavLink
      to="appointment"
      className="p-2 font-bold rounded-sm"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      Appointment
    </NavLink>

    <NavLink
      to="report"
      className="p-2 font-bold rounded-sm"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      Report
    </NavLink>

    <NavLink
      to="payment"
      className=" p-2 font-bold rounded-sm"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      Payment
    </NavLink>

    <NavLink
      to="graph"
      className=" p-2 font-bold rounded-sm"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      Health Graph
    </NavLink>

    <NavLink
      to="meet"
      className="p-2 font-bold rounded-sm"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      Virtual Meeting Room
    </NavLink>
  </nav>
);
