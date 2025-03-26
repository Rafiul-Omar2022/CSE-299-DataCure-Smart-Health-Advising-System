import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between p-5 border-t-2 w-full">
      <div className="md:w-1/3">.</div>
      <div className="flex justify-center md:w-1/3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-7">
          <Link
            to="/"
            className="text-md font-medium text-blue-900 hover:text-blue-900 hover:underline"
          >
            Home
          </Link>
          <Link className="text-md font-medium hover:text-blue-900 hover:underline">
            About
          </Link>
          <Link className="text-md font-medium hover:text-blue-900 hover:underline">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex justify-end md:w-1/3 mt-5">
        <div className="flex space-x-5">
          <Link
            to="/login"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  border-gray-400 rounded shadow"
          >
            Login
          </Link>
          <Link
            to="/signup"
            class="text-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded shadow-md"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
