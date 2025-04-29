import { useLocation } from "react-router-dom";

export default function DoctorDashboardNavbar() {
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
        <span>Doctor</span>
      </div>
    </div>
  );
}

// url path to dashboard name
const dashboardName = {
  "/doctor-dashboard": "Overview",
  "/doctor-dashboard/PaitentList": "Paitent List",
};
