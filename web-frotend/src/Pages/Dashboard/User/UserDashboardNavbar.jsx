import { useLocation } from "react-router-dom";

export default function UserDashboardNavbar() {
  const location = useLocation(); // searching url location

  return (
    <div className="navbar flex justify-between items-center bg-white p-3 shadow-md relative">
      <h3 className="text-2xl ps-3 font-bold">
        {
          // changing dashboard name acording to url path
          dashboardName[location.pathname]
        }
      </h3>
      <div className="flex items-center bg-white p-4">
        <span>Lawrence R. Howard</span>
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
  "/user-dashboard/profile": "Profile",
  "/user-dashboard/meet": "Virtual Meet",
};
