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
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user_id="))
      ?.split("=")[1];

    console.log("userId from cookie:", cookieValue); // Debugging

    return cookieValue;
  };

  const verifyUserFromDatabase = async (userId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user_valid?_id=${userId}`
      );
      if (!response.ok) {
        console.error("Failed to verify user");
        return false;
      }
      const data = await response.json();
      return data.isValid || false;
    } catch (error) {
      console.error("Error verifying user:", error);
      return false;
    }
  };

  return isUserLoggedIn;
};

export default AuthUser;
