import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export default function UserDashboardNavbar() {
  const location = useLocation(); // searching url location

  const [profileMenuOpen, setprofileMenuOpen] = useState(false);
  return (
    <div className="navbar flex justify-between items-center bg-white p-3 shadow-md relative">
      <h3 className="text-2xl ps-3 font-bold">
        {
          // changing dashboard name acording to url path
          dashboardName[location.pathname]
        }
      </h3>
      <div
        className="flex items-center bg-white p-4 rounded-lg shadow-md cursor-pointer"
        onMouseEnter={() => setprofileMenuOpen(true)}
      >
        <img
          src="https://rafiulomar.sirv.com/CSE299-DataCure/user-dashboard/user-avater.png"
          alt="User Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <span>Lawrence R. Howard</span>
        {profileMenuOpen ? (
          <div
            className="absolute top-28 right-0 bg-white w-28"
            onMouseLeave={() => setprofileMenuOpen(false)}
          >
            <ul className="flex items-center flex-col">
              <li className="btn text-xl text-blue-500 font-medium hover:text-blue-900 hover:underline flex items-center gap-2">
                Profile
                <IoSettingsSharp size={20} />
              </li>
              <li className="btn text-xl text-red-500 font-medium hover:text-red-900 hover:underline flex items-center gap-2">
                Logout <IoIosLogOut size={20} />
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// url path to dashboard name
const dashboardName = {
  "/user-dashboard": "Overview",
  "/user-dashboard/appointment": "Appointment",
  "/user-dashboard/appointment/find-doctor": "Appointment: Doctor",
  "/user-dashboard/appointment/find-specialist": "Appointment: Specialist",
  "/user-dashboard/report": "Report",
  "/user-dashboard/payment": "Payment",
  "/user-dashboard/graph": "Health graph",
  "/user-dashboard/meet": "Virtual Meet",
};
