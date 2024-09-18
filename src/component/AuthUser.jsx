import { useState, useEffect } from "react";

const AuthUser = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserLogin = async () => {
      const userId = getUserIdFromCookie();
      if (userId) {
        // Check if the user_id in the cookie matches the database
        // You'll need to make an API call to the backend to verify this
        const isValid = await verifyUserFromDatabase(userId);
        setIsUserLoggedIn(isValid);
      } else {
        setIsUserLoggedIn(false);
      }
    };

    checkUserLogin();
  }, []);

  const getUserIdFromCookie = () => {
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    return cookieValue;
  };

  const verifyUserFromDatabase = async (userId) => {
    // Make an API call to the backend to check if the user_id is valid
    // Return true if the user is valid, false otherwise
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user_valid?_id=${userId}`
    );
    const data = await response.json();
    return data.isValid;
  };

  return isUserLoggedIn;
};

export default AuthUser;
