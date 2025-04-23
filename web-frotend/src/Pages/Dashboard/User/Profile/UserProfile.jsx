export default function UserProfile() {
  return (
    <>
      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        {/* Navbar */}

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="User avatar"
              className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div className="space-y-2">
              <p>
                <span className="font-medium">User ID:</span> #123456
              </p>
              <p>
                <span className="font-medium">Username:</span> johndoe
              </p>
              <p>
                <span className="font-medium">Email:</span> john.doe@example.com
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-2">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left">
                    First Name
                  </th>
                  <th className="border border-gray-200 p-3 text-left">
                    Last Name
                  </th>
                  <th className="border border-gray-200 p-3 text-left">
                    Date of Birth
                  </th>
                  <th className="border border-gray-200 p-3 text-left">
                    Phone Number
                  </th>
                  <th className="border border-gray-200 p-3 text-left">
                    Address
                  </th>
                  <th className="border border-gray-200 p-3 text-left">
                    Country
                  </th>
                  <th className="border border-gray-200 p-3 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3">John</td>
                  <td className="border border-gray-200 p-3">Doe</td>
                  <td className="border border-gray-200 p-3">15/06/1985</td>
                  <td className="border border-gray-200 p-3">+1234567890</td>
                  <td className="border border-gray-200 p-3">
                    123 Main St, City
                  </td>
                  <td className="border border-gray-200 p-3">United States</td>
                  <td className="border border-gray-200 p-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
