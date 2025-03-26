import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-500">
      <div className="flex flex-col md:flex-row max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side - image */}
        <div className="md:w-1/2 flex items-center justify-center p-10">
          <img
            src="https://rafiulomar.sirv.com/CSE299-DataCure/images/signindeco.jpg"
            alt="DataCure Sign In"
          />
        </div>

        {/* Right side - sign-in form */}
        <div className="md:w-1/2 p-10 text-center border-t-2 md:border-l-2">
          <h2 className="text-blue-500 text-2xl font-semibold mb-3">
            Sign in to your account
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Enter your email and password to continue
          </p>
          <form className="space-y-4">
            <div className="input-group mb-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="input-group mb-4">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="options flex justify-between items-center mb-6 text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              SIGN IN
            </button>
          </form>
          <p className="mt-4 text-sm space-x-2">
            <span>Need an account?</span>
            <Link to="/signup" className="text-blue-500 hover:underline">
              SIGN UP
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
