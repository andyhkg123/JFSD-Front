import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("");
  const [mbti, setMbti] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (password !== confirmPassword) {
      setPasswordError(true);
      return; // Exit early if passwords don't match
    }

    const userData = {
      firstName,
      lastName,
      phone,
      sex,
      mbti,
      email,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}signup`, userData)
      .then((response) => {
        if (response && response.status === 201) {
          alert("Registration successful! Please proceed to log in.");
          window.location.href = "/login"; // Redirect if registration is successful
        } else if (response && response.status === 400) {
          alert("Email already registered. Please try again");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        alert("An error occurred during registration. Please try again.");
      });
  };

  return (
    <div className="mx-auto flex-wrap md:flex justify-center items-center px-4 pt-10">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
        <h5 className="mb-4 text-xl font-medium text-gray-900 ">
          Sign up to our platform
        </h5>
        <div className=" flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  pattern="[A-Za-z]+"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  pattern="[A-Za-z]+"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  pattern="[0-9]{8}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="sex"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sex
                </label>
                <select
                  id="sex"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select your sex
                  </option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="mbti"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  MBTI
                </label>
                <select
                  id="mbti"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  value={mbti}
                  onChange={(e) => setMbti(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select your MBTI type
                  </option>
                  <option value="ISTJ">ISTJ</option>
                  <option value="ISFJ">ISFJ</option>
                  <option value="INFJ">INFJ</option>
                  <option value="INTJ">INTJ</option>
                  <option value="ISTP">ISTP</option>
                  <option value="ISFP">ISFP</option>
                  <option value="INFP">INFP</option>
                  <option value="INTP">INTP</option>
                  <option value="ESTP">ESTP</option>
                  <option value="ESFP">ESFP</option>
                  <option value="ENFP">ENFP</option>
                  <option value="ENTP">ENTP</option>
                  <option value="ESTJ">ESTJ</option>
                  <option value="ESFJ">ESFJ</option>
                  <option value="ENFJ">ENFJ</option>
                  <option value="ENTJ">ENTJ</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                pattern=".{8,24}"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter a password (8-24 characters)"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                pattern=".{8,24}"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="•••••••••"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">
                  Passwords do not match.
                </p>
              )}
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                I agree with the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  terms and conditions
                </a>
                .
              </label>
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white bg-amber-300 hover:bg-amber-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>

            <div className="mt-4 text-sm font-medium text-gray-500 ">
              Already registered?{" "}
              <Link to="/login">
                <div className="text-blue-700 hover:underline ">Sign In</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <img
        className="object-cover h-[350px] md:pl-4 md:h-[500px] "
        src="https://img.freepik.com/free-vector/young-people-chatting-with-devices_23-2148447306.jpg?t=st=1721281510~exp=1721285110~hmac=eb63807f7deda635bd2c05fe42784f685d40df3da386a509967b10fb49e27c9c&w=740"
      />
    </div>
  );
}

export default SignupPage;
