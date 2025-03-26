import { NavLink, Outlet } from "react-router-dom";

// Active navbar style
const activeStyle = {
  backgroundColor: "#bbdefb",
};

export default function UserAppointmnetLayout() {
  return (
    <>
      <div className="flex space-x-4 mb-6 mt-4">
        <NavLink
          to="."
          end
          className="px-4 py-2 border bg-gray-100 font-bold "
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Appointment Details
        </NavLink>
        <NavLink
          to="find-doctor"
          className="px-4 py-2 border bg-gray-100 font-bold "
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Find Doctor
        </NavLink>
        <NavLink
          to="find-specialist"
          className="px-4 py-2 border bg-gray-100 font-bold"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Select a Specialist
        </NavLink>
      </div>

      <Outlet />
    </>
  );
}
