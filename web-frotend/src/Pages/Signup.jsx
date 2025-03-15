function Signup() {
  return (
    <>
      <div className="bg-blue-400 flex justify-center items-center min-h-screen">
        <div className="signup-container flex max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Left side with Sign Up form --> */}
          <div className="signup-form w-1/2 p-10 text-center">
            <h2 className="text-blue-400 text-2xl mb-6">Get Started Now</h2>
            <form action="/signup" method="POST">
              <div className="input-group mb-4 flex items-center border border-gray-300 rounded-md p-2">
                <span className="icon text-xl mr-3">&#128100;</span>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 text-lg outline-none"
                />
              </div>
              <div className="input-group mb-4 flex items-center border border-gray-300 rounded-md p-2">
                <span className="icon text-xl mr-3">&#9742;</span>
                <input
                  type="tel"
                  placeholder="Phone No"
                  required
                  className="w-full p-3 text-lg outline-none"
                />
              </div>
              <div className="input-group mb-4 flex items-center border border-gray-300 rounded-md p-2">
                <span className="icon text-xl mr-3">&#9993;</span>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 text-lg outline-none"
                />
              </div>
              <div className="input-group mb-4 flex items-center border border-gray-300 rounded-md p-2">
                <span className="icon text-xl mr-3">&#128274;</span>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full p-3 text-lg outline-none"
                />
              </div>
              <div className="terms mb-4 text-sm text-left">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" required className="form-checkbox" />
                  <span>I agree to the terms & policy</span>
                </label>
              </div>
              <button
                type="submit"
                className="btn w-full p-3 bg-blue-400 text-white rounded-md text-lg shadow-lg hover:bg-blue-500"
              >
                SIGN UP
              </button>
            </form>
            <p className="login-link mt-4 text-sm">
              Already a user?
              <a href="signin.html" className="text-blue-400 hover:underline">
                LOGIN
              </a>
            </p>
          </div>

          {/* <!-- Right side with image --> */}
          <div className="signup-image w-1/2 p-12 flex items-center justify-center bg-blue-400">
            <img
              src="images/signupdeco.png"
              alt="Sign Up Illustration"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
