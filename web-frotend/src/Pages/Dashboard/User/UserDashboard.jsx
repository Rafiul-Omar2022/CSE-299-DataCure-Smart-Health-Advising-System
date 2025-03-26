import { useState } from "react";

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="recent-summary flex justify-between mt-5">
        {
          // Sumary table data maping
          sumarryData.map((data) => (
            <div
              key={data.id}
              className={`flex flex-col space-y-4 ${data.styleColor} p-5 rounded-lg text-center shadow-lg hover:shadow-2xl transition-all w-60`}
            >
              <div className="flex  justify-between items-center">
                <img src={data.image} alt={data.statusText} className="w-12" />
                <p className="text-xl font-bold">{data.message}</p>
              </div>
              <div className="flex flex-col space-y-3">
                <strong className="bg-white py-1 rounded">{data.status}</strong>
                <p className="text-xl font-bold">{data.statusText}</p>
              </div>
            </div>
          ))
        }
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

      <div className="flex justify-between mt-10">
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
    </>
  );
}

// Summary card data
const sumarryData = [
  {
    id: 1,
    image: "https://rafiulomar.sirv.com/CSE299-DataCure/images/usercalicon.png",
    message: "4 Days Left",
    status: "12/05/2025",
    statusText: "Appointment Date",
    styleColor: "bg-red-100",
  },
  {
    id: 2,
    image:
      "https://rafiulomar.sirv.com/CSE299-DataCure/images/userpoayicon.png",
    message: "2400 TK",
    status: "Pending",
    statusText: "Payment Status",
    styleColor: "bg-yellow-100",
  },
  {
    id: 3,
    image: "https://rafiulomar.sirv.com/CSE299-DataCure/images/userrepicon.png",
    message: "",
    status: "Pending",
    statusText: "Report Status",
    styleColor: "bg-green-100",
  },
];
