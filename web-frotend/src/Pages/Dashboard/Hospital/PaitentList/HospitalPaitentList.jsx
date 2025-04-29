function HospitalPaitentList() {
  const patients = [
    { id: "#12033", name: "Dr. Vladimir Lenin" },
    { id: "#12034", name: "Dr. Che Guevara" },
    { id: "#12035", name: "Dr. Karl Marx" },
  ];
  return (
    <>
      {/* Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Patient Header */}

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-6 py-3">Patient ID</th>
                <th className="text-left px-6 py-3">Patient</th>
                <th className="text-left px-6 py-3">Appointment Status</th>
                <th className="text-left px-6 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="px-6 py-3">{p.id}</td>
                  <td className="px-6 py-3">{p.name}</td>
                  <td className="px-6 py-3">
                    <a href="hospatappstat.html">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
                        Check
                      </button>
                    </a>
                  </td>
                  <td className="px-6 py-3">
                    <button className="bg-blue-700 hover:bg-blue-900 text-white px-3 py-1 rounded">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HospitalPaitentList;
