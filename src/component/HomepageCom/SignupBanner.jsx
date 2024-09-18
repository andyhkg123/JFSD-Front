import { Link } from "react-router-dom";

function SignupBanner() {
  return (
    <div className="flex-col space-y-2 md:space-x-4 p-4 items-center md:flex-row md:justify-center flex text-center ">
      {/* Signup progress 1*/}

      <div className="shadow-lg justify-self-center w-11/12 md:max-w-xs p-4 md:p-8 bg-white border border-gray-200 rounded-lg shadow">
        <Link to="/signup">
          <p className="mb-3 text-3xl font-['Caveat'] font-normal text-amber-400 ">
            Step 01
          </p>
          <h5 className="text-lg md:text-xl mb-2 font-bold text-gray-900 ">
            Register to become a member
          </h5>
          <img
            className="inline-flex items-center w-14 md:w-20"
            src="https://cdn-icons-png.flaticon.com/512/5610/5610896.png"
          />
        </Link>
      </div>

      {/* Signup progress 2*/}

      <div className="shadow-lg justify-self-center w-11/12 md:max-w-xs p-4 md:p-8 bg-white border border-gray-200 rounded-lg shadow">
        <Link to="/signup">
          <p className="mb-3 text-3xl font-['Caveat'] font-normal text-amber-400 ">
            Step 02
          </p>
          <h5 className="text-lg md:text-xl mb-2 font-bold text-gray-900">
            Discover our Social Platform to Join
          </h5>
          <img
            className="inline-flex items-center w-14 md:w-20"
            src="https://cdn-icons-png.flaticon.com/512/4697/4697500.png"
          />
        </Link>
      </div>

      {/* Signup progress 3*/}

      <div className="shadow-lg justify-self-center w-11/12 md:max-w-xs p-4 md:p-8 bg-white border border-gray-200 rounded-lg shadow">
        <Link to="/signup">
          <p className="mb-3 text-3xl font-['Caveat'] font-normal text-amber-400 ">
            Step 03
          </p>
          <h5 className="text-lg md:text-xl mb-2 font-bold text-gray-900">
            Join Activity and Meet Your Buddies
          </h5>
          <img
            className="inline-flex items-center w-14 md:w-20"
            src="https://cdn-icons-png.flaticon.com/512/1141/1141102.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default SignupBanner;
