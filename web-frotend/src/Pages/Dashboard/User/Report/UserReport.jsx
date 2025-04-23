function UserReport() {
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 ml-64 p-4">
        {/* Search Bar */}
        <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
          <label htmlFor="search" className="block font-semibold mb-1">
            Search:
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search reports..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Report List */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-800 mb-1">
                Prof. Dr. M.H. Vladimir Lenin (Biplob)
              </h4>
              <p className="font-semibold mb-2">
                MBBS, MS (Ortho Surgery), FACS (USA)
              </p>
              <p>Patient Name: Osama Bin Laden</p>
              <p>Age: 32</p>
              <p>Date: 12/05/24</p>
              <p>Appointment ID: #354341</p>
              <p>Payment ID: #213341</p>
              <p className="mt-2">
                Report file:
                <a
                  href="#"
                  className="text-blue-800 font-semibold ml-2 hover:underline"
                >
                  View
                </a>{" "}
                |
                <a
                  href="#"
                  className="text-blue-800 font-semibold hover:underline ml-1"
                >
                  Download
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserReport;
