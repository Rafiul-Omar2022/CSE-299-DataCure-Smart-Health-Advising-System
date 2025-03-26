export default function UserAppointment() {
  return (
    <>
      {/* Upcoming / Recent */}
      <h4 className="text-lg font-semibold mt-4">Upcoming / Recent</h4>

      {/* Appointment Card */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img
              src="https://rafiulomar.sirv.com/CSE299-DataCure/user-dashboard/user-avater.png"
              alt="User Avatar"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <p>
                <strong>Name:</strong> Lawrence R. Howard
              </p>
              <p>
                <strong>Gender:</strong> Male &nbsp; <strong>Age:</strong> 21
              </p>
              <p>
                <strong>Phone Number:</strong> 01696969696
              </p>
            </div>
          </div>
          <span className="font-bold text-right">
            Appointment Receipt #144343
          </span>
        </div>
        <hr className="my-4" />
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Appointment Information
          </h3>
          <p>
            <strong>Dr. Anthony James Mansul</strong>
          </p>
          <p>MBBS, MRCP</p>
          <a
            href="https://meet.google.com/hbw-aywp-wnj"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Virtual Meet Link
          </a>
        </div>
        <div className="flex justify-between mt-4">
          <p>
            <strong>Payment:</strong>
            <span className="text-green-600 font-bold">Paid</span>
          </p>
          <p>
            <strong>Appointment Date:</strong> 12/05/25
          </p>
          <p>
            <strong>Time:</strong> 12:40 PM
          </p>
        </div>
      </div>
    </>
  );
}
