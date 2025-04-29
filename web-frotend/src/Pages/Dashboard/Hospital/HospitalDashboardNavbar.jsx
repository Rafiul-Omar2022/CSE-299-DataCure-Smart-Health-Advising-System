import { useLocation } from "react-router-dom";

export default function HospitalDashboardNavbar() {
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
        <span>Hospital</span>
      </div>
    </div>
  );
}

// url path to dashboard name
const dashboardName = {
  "/hospital-dashboard": "Overview",
  "/hospital-dashboard/doctor": "Doctor List",
  "/hospital-dashboard/paitent": "Patient List",
};
