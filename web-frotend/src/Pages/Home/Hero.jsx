import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mx-auto px-10 bg-blue-50 w-full p-2">
      <div className="flex flex-col md:flex-row space-y-2 items-center justify-between w-full">
        {/* Left Section */}
        <div className="space-y-6 md:w-1/3 w-full pt-5 order-3 md:order-1">
          <h1 className="text-xl md:text-4xl font-bold text-blue-700">
            Effortless Appointments <br /> & Smart Data Insights
          </h1>
          <p className="text-md md:text-xl text-blue-600">
            Simplify healthcare access while gaining valuable insights
          </p>
          <div className="flex items-center space-x-3">
            <Link
              to="/user-dashboard"
              className="text-sm md:text-lg text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        {/* Middle Section (Image) */}
        <div className="flex justify-center items-center md:w-1/3 w-full order-1 md:order-2">
          <img
            src="https://rafiulomar.sirv.com/CSE299-DataCure/images/centerdoctors.png"
            alt="Doctor Illustration"
            className="object-cover max-w-xs md:w-full"
          />
        </div>
        {/* Right section */}
        <div className="md:w-1/3 order-2 md:order-3 w-full space-y-3">
          <h2 className="text-xl md:text-3xl text-blue-700 font-bold">
            Experience better treatment
          </h2>
          <div className="space-y-4 bg-blue-100 p-5 rounded-md">
            <div className="text-sm md:text-lg">
              Realtime Doctor status updates
            </div>
            <div className="text-sm md:text-lg">
              No more paper reports, get your digital report
            </div>
            <div className="text-sm md:text-lg">
              Get health advice from your report data
            </div>
            <div className="text-sm md:text-lg">
              Meet with doctor online and save your time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
