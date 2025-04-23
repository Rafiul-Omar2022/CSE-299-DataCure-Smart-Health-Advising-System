function UserPayment() {
  const pendingPayments = [
    {
      paymentId: "#12033",
      doctor: "Dr. Austin Elsbree",
      date: "12/02/24",
      amount: "5200 Tk",
      appointmentId: "#132342",
      payLink: "#",
    },
  ];

  const paymentHistory = [
    {
      paymentId: "#12033",
      doctor: "Dr. Austin Elsbree",
      date: "12/02/24",
      amount: "5200 Tk",
      appointmentId: "#35455",
      detailsLink: "#",
    },
    {
      paymentId: "#12033",
      doctor: "Dr. Austin Elsbree",
      date: "12/02/24",
      amount: "5200 Tk",
      appointmentId: "#123341",
      detailsLink: "#",
    },
  ];

  return (
    <div className="flex-1 p-6">
      {/* Payment Section */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Pending Payment</h2>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Payment ID</th>
              <th className="p-2 border">Doctor</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Appointment ID</th>
              <th className="p-2 border">Pay</th>
            </tr>
          </thead>
          <tbody>
            {pendingPayments.map((payment, index) => (
              <tr key={index}>
                <td className="p-2 border">{payment.paymentId}</td>
                <td className="p-2 border">{payment.doctor}</td>
                <td className="p-2 border">{payment.date}</td>
                <td className="p-2 border">{payment.amount}</td>
                <td className="p-2 border">{payment.appointmentId}</td>
                <td className="p-2 border text-blue-600 font-bold">
                  <a href={payment.payLink}>Click to Pay</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mt-8 mb-4">History</h2>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Payment ID</th>
              <th className="p-2 border">Doctor</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Appointment ID</th>
              <th className="p-2 border">Details</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment, index) => (
              <tr key={index}>
                <td className="p-2 border">{payment.paymentId}</td>
                <td className="p-2 border">{payment.doctor}</td>
                <td className="p-2 border">{payment.date}</td>
                <td className="p-2 border">{payment.amount}</td>
                <td className="p-2 border">{payment.appointmentId}</td>
                <td className="p-2 border text-blue-600 font-bold">
                  <a href={payment.detailsLink}>Visit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPayment;
