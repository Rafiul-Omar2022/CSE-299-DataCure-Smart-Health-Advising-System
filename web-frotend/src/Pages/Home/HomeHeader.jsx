import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <>
      <header>
        <div class="flex justify-between items-center p-4 bg-white">
          <div class="flex flex-col">
            <div class="text-2xl font-bold text-blue-700">DataCure</div>
            <div class="text-sm text-gray-600 font-semibold">
              Smart Health Advising System
            </div>
          </div>
          <div class="text-sm text-gray-600 font-semibold">
            <h1>Hotline: +880182354534</h1>
            <Link className="underline text-blue-700">Download App</Link>
          </div>
        </div>
      </header>
    </>
  );
}
