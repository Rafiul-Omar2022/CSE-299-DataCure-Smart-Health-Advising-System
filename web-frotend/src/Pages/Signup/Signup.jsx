import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <div className="flex flex-col items-center md:flex-row justify-center w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side - Sign Up Form */}
        <div className="md:w-1/2 p-10">
          <img
            src="https://rafiulomar.sirv.com/CSE299-DataCure/images/signupdeco.jpg"
            alt="Sign Up Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Right side - Sign-up Image */}
        <div className="md:w-1/2 p-10 text-center border-t-2 md:border-l-2">
          <h2 className="text-blue-500 text-2xl font-semibold mb-6">
            Get Started Now
          </h2>
          <form className="space-y-4">
            {/* Full Name Input */}
            <div className="input-group mb-4 flex items-center border border-gray-300 rounded-md">
              <span className="text-gray-600 p-3">&#128100;</span>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              />
            </div>

            {/* Phone Number Input */}
            <div className="input-group mb-4 flex items-center border border-gray-300 rounded-md">
              <span className="text-gray-600 p-3">&#9742;</span>
              <input
                type="tel"
                placeholder="Phone No"
                required
                className="w-full px-4 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              />
            </div>

            {/* Email Input */}
            <div className="input-group mb-4 flex items-center border border-gray-300 rounded-md">
              <span className="text-gray-600 p-3">&#9993;</span>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              />
            </div>

            {/* Password Input */}
            <div className="input-group mb-4 flex items-center border border-gray-300 rounded-md">
              <span className="text-gray-600 p-3">&#128274;</span>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              />
            </div>

            {/* Terms Agreement */}
            <div className="mb-6 flex items-center text-sm text-gray-600">
              <input type="checkbox" required className="mr-2" />I agree to the
              terms & policy
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              SIGN UP
            </button>
          </form>
          <p className="mt-4 text-sm space-x-2">
            <span>Already a user?</span>
            <Link to="/login" className="text-blue-500 hover:underline">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
