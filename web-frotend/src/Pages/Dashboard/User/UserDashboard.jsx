import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [profileMenuOpen, setprofileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const dashBoardNavigation = (
    <ul>
      <li className="active bg-gray-100 p-2 font-bold">
        <Link to="/user-dashboard">Overview</Link>
      </li>
      <li className="p-2">
        <a href="userappointment.html">Appointment</a>
      </li>
      <li className="p-2">
        <a href="userreport.html">Report</a>
      </li>
      <li className="p-2">
        <a href="userreport.html">Payment</a>
      </li>
      <li className="p-2">
        <a href="usergraph.html">Health Graph</a>
      </li>
      <li className="p-2">
        <a href="usermeet.html">Virtual Meeting Room</a>
      </li>
    </ul>
  );

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Sidebar */}
      <div className="w-52 h-screen bg-white border-r border-gray-300 p-5">
        <a href="landing.html" className="logo-link">
          <h2 className="text-blue-700 mb-5">DataCure</h2>
        </a>
        {
          // Sidebar navigation
          dashBoardNavigation
        }
        <div className="settings mt-5">
          <Link className="block py-2">Profile</Link>
          <a href="landing.html" className="block py-2">
            Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full col-start-3 col-end-12">
        <div className="w-full">
          {/* Navbar */}
          <div
            className="navbar flex justify-between items-center bg-white p-3 shadow-md relative"
            onMouseEnter={() => setprofileMenuOpen(true)}
          >
            <h3>Overview</h3>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-md cursor-pointer">
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
                    <li className="btn text-xl text-blue-500 font-medium hover:text-blue-900 hover:underline">
                      Profile
                    </li>
                    <li className="btn text-xl text-red-500 font-medium hover:text-red-900 hover:underline">
                      Logout
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          {/* Recent Summary */}
          <div className="recent-summary flex justify-between mt-5">
            <div className="summary-card bg-red-100 p-5 rounded-lg text-center shadow-lg hover:shadow-2xl transition-all w-60">
              <img
                src="https://rafiulomar.sirv.com/CSE299-DataCure/images/usercalicon.png"
                alt="Calendar Icon"
                className="w-12 mx-auto mb-3"
              />
              <p>4 Days Left</p>
              <strong>12/05/2025</strong>
              <p>Appointment Date</p>
            </div>
            <div className="summary-card bg-yellow-100 p-5 rounded-lg text-center shadow-lg hover:shadow-2xl transition-all w-60">
              <img
                src="https://rafiulomar.sirv.com/CSE299-DataCure/images/userpoayicon.png"
                alt="Payment Icon"
                className="w-12 mx-auto mb-3"
              />
              <p>2400 TK</p>
              <strong>Pending</strong>
              <p>Payment Status</p>
            </div>
            <div className="summary-card bg-green-100 p-5 rounded-lg text-center shadow-lg hover:shadow-2xl transition-all w-60">
              <img
                src="https://rafiulomar.sirv.com/CSE299-DataCure/images/userrepicon.png"
                alt="Report Icon"
                className="w-12 mx-auto mb-3"
              />
              <p>Pending</p>
              <p>Report Status</p>
            </div>
          </div>

          {/* Recent Appointment Table */}
          <h3 className="mt-10">Recent Appointment</h3>
          <table className="min-w-full mt-5 bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Appointment ID</th>
                <th className="p-4 text-left">Doctor</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Payment</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">#12033</td>
                <td className="p-4">Dr. Austin Elsbree</td>
                <td className="p-4">12/02/24</td>
                <td className="p-4">5200 Tk</td>
                <td className="p-4">Pending</td>
                <td className="p-4">Pending</td>
                <td className="p-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    Visit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Past Appointment List */}
          <h3 className="mt-10">Past Appointment List</h3>

          {/* Search Bar */}
          <div className="flex justify-end mt-4">
            <input
              type="text"
              placeholder="Search appointments..."
              className="p-2 border border-gray-300 rounded-md w-64"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <table className="min-w-full mt-5 bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Appointment ID</th>
                <th className="p-4 text-left">Doctor</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Payment</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "#12033",
                  doctor: "Dr. Austin Elsbree",
                  date: "12/02/24",
                  amount: "5200 Tk",
                  payment: "Clear",
                  status: "Approved",
                },
                {
                  id: "#12034",
                  doctor: "Dr. Ben Smith",
                  date: "13/02/24",
                  amount: "3200 Tk",
                  payment: "Clear",
                  status: "Approved",
                },
                {
                  id: "#12035",
                  doctor: "Dr. Clara Brown",
                  date: "14/02/24",
                  amount: "4000 Tk",
                  payment: "Pending",
                  status: "Pending",
                },
                // Add other rows similarly
              ]
                .filter(
                  (appointment) =>
                    appointment.id
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    appointment.doctor
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    appointment.date
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                )
                .map((appointment, index) => (
                  <tr key={index}>
                    <td className="p-4">{appointment.id}</td>
                    <td className="p-4">{appointment.doctor}</td>
                    <td className="p-4">{appointment.date}</td>
                    <td className="p-4">{appointment.amount}</td>
                    <td className="p-4">{appointment.payment}</td>
                    <td className="p-4">{appointment.status}</td>
                    <td className="p-4">
                      <a href="#" className="text-blue-500 hover:underline">
                        Visit
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
