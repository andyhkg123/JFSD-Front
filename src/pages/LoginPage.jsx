import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // set your authentication token here.
    // the 'options' object will contain all possible cookie options, example would be 'secure'.

    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include", // This sends the cookie with the request
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        Cookies.set("user_id", data.user_id, {
          domain: ".jfsd-front.vercel.app",
          secure: true, // Use 'true' in production
          sameSite: "none",
          expires: 1 / 24, // 1 hour
        });

        if (data.message === "Logged in") {
          console.log("Logged in");
          navigate("/");
          window.location.reload();
        }
        if (data.error === "Invalid email or password") {
          console.log("AABB");
          setErrorMessage("Invalid email or password");
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        alert("Invalid email or password");
        console.error("Error:", error);
      });
  };

  return (
    <div className="mx-auto flex-wrap md:flex justify-center items-center px-4 pt-10">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 ">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              pattern=".{8,24}"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Remember me
              </label>
            </div>

            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline "
            >
              Lost Password?
            </a>
          </div>
          <div className="text-red-500">{errorMessage}</div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full text-white bg-amber-300 hover:bg-amber-400 font-medium rounded-lg px-5 py-2.5 text-center "
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 ">
            Not registered?{" "}
            <Link to="/signup">
              <div className="text-blue-700 hover:underline ">
                Create account
              </div>
            </Link>
          </div>
        </form>
      </div>
      <img
        className="object-cover h-[200px] md:h-[400px] "
        src="https://img.freepik.com/free-vector/happy-people-dancing-party-flat-illustration_74855-5264.jpg?t=st=1721281124~exp=1721284724~hmac=455bcf1df2b15dce3e75330c8657308af84b5d7820c2d8afe1325331f35ea95e&w=826"
      />
    </div>
  );
}

export default LoginPage;
