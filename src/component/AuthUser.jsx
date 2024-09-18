import { useState, useEffect } from "react";

const AuthUser = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserLogin = async () => {
      const userId = getUserIdFromCookie();

      // Debugging log to see if userId is extracted correctly
      console.log("Extracted userId from cookie:", userId);

      if (userId) {
        // Check if the user_id in the cookie matches the database
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

    // Debugging log for the cookie value
    console.log("Cookie value extracted:", cookieValue);

    return cookieValue || null; // Return null if user_id is not found
  };

  const verifyUserFromDatabase = async (userId) => {
    try {
      // Ensure we only make the request if userId exists
      if (!userId) {
        console.error("No userId found in cookie.");
        return false;
      }

      // Make an API call to the backend to check if the user_id is valid
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
