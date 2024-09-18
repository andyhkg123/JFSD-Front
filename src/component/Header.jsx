import { Link } from "react-router-dom";
import logo from "../logo.png";
import AuthUser from "./AuthUser";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Header() {
  const isUserLoggedIn = AuthUser();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const checkUserLogin = async () => {
      if (isUserLoggedIn) {
        const userId = getUserIdFromCookie();
        const userInfo = await getUserInfo(userId);

        setUserInfo(userInfo);
      }
    };

    checkUserLogin();
  }, [isUserLoggedIn]);

  const getUserIdFromCookie = () => {
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    return cookieValue;
  };

  const getUserInfo = async (userId) => {
    // Make an API call to the backend to check if the user_id is valid
    // Return true if the user is valid, false otherwise
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user_valid?_id=${userId}`
    );
    const data = await response.json();
    return data;
  };

  function deleteCookie() {
    Cookies.remove("user_id", {
      domain: ".jfsd-front.vercel.app",
      secure: true, // Make sure this matches how the cookie was originally set
      sameSite: "none",
    });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  //DropdownMenu//

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="mx-auto flex items-center justify-between h-16 px-4 ">
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Link to="/">
              <img className="ml-2 h-10 w-auto" src={logo} alt="" />
            </Link>
          </div>
        </div>
        {/* Show without login */}
        {!isUserLoggedIn && (
          <div className="py-6 flex space-x-4">
            <Link to="/login">
              <button className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-black rounded-lg hover:text-gray-400">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-300 hover:bg-amber-400">
                Sign Up
              </button>
            </Link>
          </div>
        )}
        {/* Show when login */}
        {isUserLoggedIn && (
          <div className="memberinfo inline-flex items-center gap-4">
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
              {userInfo.mbti === "INFP" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/originals/28/c8/f1/28c8f1b2c3aec24b1034e2e00a123f60.png"
                  alt="INFP Image"
                />
              ) : null}
              {userInfo.mbti === "INFJ" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/44/b0/45/44b045a09e660fcdd2bc6f057a4fb882.jpg"
                  alt="INFJ Image"
                />
              ) : null}
              {userInfo.mbti === "INTJ" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/82/97/af/8297afb1ad32a3ded74ad1bb8ba1ea3e.jpg"
                  alt="INTJ Image"
                />
              ) : null}
              {userInfo.mbti === "INTP" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/65/47/1a/65471adf5f3f26d1550f97ca40e59072.jpg"
                  alt="INTP Image"
                />
              ) : null}
              {userInfo.mbti === "ISTJ" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/5d/ae/03/5dae03044adcff352a2e658b8a137f49.jpg"
                  alt="ISTJ Image"
                />
              ) : null}
              {userInfo.mbti === "ISFJ" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/32/c5/55/32c55541b51c84515e67229c25b5a7dc.jpg"
                  alt="ISFJ Image"
                />
              ) : null}
              {userInfo.mbti === "ISTP" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/2f/d4/2e/2fd42e75a593f1f36d2d3fcede65ff13.jpg"
                  alt="ISTP Image"
                />
              ) : null}
              {userInfo.mbti === "ISFP" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/e1/02/2e/e1022e411288f90a117c3c42cf5fa9e5.jpg"
                  alt="ISFP Image"
                />
              ) : null}
              {/* Extrovert */}
              {userInfo.mbti === "ENTJ" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/d5/93/ba/d593ba8973eaf799bef7aecc48fc81c4.jpg"
                  alt="ENTJ Image"
                />
              ) : null}
              {userInfo.mbti === "ENTP" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/7e/44/f7/7e44f7fa426c3a9edd75cd24e4f08795.jpg"
                  alt="ENTP Image"
                />
              ) : null}
              {userInfo.mbti === "ESTJ" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/736x/66/eb/58/66eb58713f65572e4c409e9798cda920.jpg"
                  alt="ESTJ Image"
                />
              ) : null}
              {userInfo.mbti === "ESFJ" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/0e/ce/43/0ece433585728dfa604ec7809e5c2a05.jpg"
                  alt="ESFJ Image"
                />
              ) : null}
              {userInfo.mbti === "ENFJ" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/98/85/0c/98850c130df92c593a53fbe84e6d9499.jpg"
                  alt="ENFJ Image"
                />
              ) : null}
              {userInfo.mbti === "ENFP" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/1c/c9/07/1cc90784e2c9d0b19d80a55d0eab5b76.jpg"
                  alt="ENFP Image"
                />
              ) : null}
              {userInfo.mbti === "ESTP" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/65/8f/ad/658fad4ab8e3bc3b732302edc37c6a76.jpg"
                  alt="ESTP Image"
                />
              ) : null}
              {userInfo.mbti === "ESFP" ? (
                <img
                  onClick={toggleDropdown}
                  className="cursor-pointer object-cover w-12 h-12 text-gray-400 -left-1"
                  src="https://i.pinimg.com/564x/f1/81/92/f181923f253971b6dcd622c8463c4c57.jpg"
                  alt="ESFP Image"
                />
              ) : null}
            </div>
            <div className="font-medium">
              <div>
                {userInfo.firstName} {userInfo.lastName}
              </div>
              <div className="text-sm text-gray-500">{userInfo.mbti}</div>
            </div>
            {isOpen && (
              <div
                id="userDropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg "
              >
                <div className="py-1">
                  <Link to={`/`}>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:font-medium"
                      onClick={() => deleteCookie()}
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
