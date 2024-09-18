import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();

  return (
    <div className="flex justify-center px-4">
      <div className="text-center flex-col justify-center w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div className="flex justify-center">
          {" "}
          {/* Center align the icon */}
          <img
            className="h-14 w-14 my-2"
            src="https://cdn-icons-png.flaticon.com/512/10461/10461004.png"
            alt="Success Icon"
          />
        </div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
            Payment Successfully
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 ">
          Thank you for your purchase.
        </p>
        <p className="mb-3 font-normal text-gray-500 ">
          Your order has been successfully processed. An email confirmation has
          been sent to you.
        </p>

        <Link to="/">
          <button
            type="button"
            className="text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center"
          >
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
