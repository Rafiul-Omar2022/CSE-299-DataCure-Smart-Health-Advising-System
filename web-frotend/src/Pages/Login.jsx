export default function Login() {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="signin-container flex max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* <!-- Left side - Image --> */}
        <div className="signin-image w-1/2 flex items-center justify-center bg-blue-400 p-12">
          <img
            className="w-4/5 max-w-xs mx-auto"
            src="images/signindeco.png"
            alt="DataCure Sign In"
          />
        </div>

        {/* <!-- Right side - Sign-in Form --> */}
        <div className="signin-form w-1/2 p-10 text-center">
          <h2 className="text-blue-400 text-2xl mb-3">
            Sign in to your account
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Enter your email and password to continue
          </p>
          <form action="/login" method="POST">
            <div className="input-group mb-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-lg"
              />
            </div>
            <div className="input-group mb-4">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-lg"
              />
            </div>
            <div className="options flex justify-between text-sm mb-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-400 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="btn w-full p-3 bg-blue-400 text-white rounded-md text-lg shadow-lg hover:bg-blue-500"
            >
              SIGN IN
            </button>
          </form>
          <p className="signup-link mt-4 text-sm">
            Need an account?{" "}
            <a href="signup.html" className="text-blue-400 hover:underline">
              SIGN UP
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
