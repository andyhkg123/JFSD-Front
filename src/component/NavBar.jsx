import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [activeCategory, setActiveCategory] = useState(""); // State to track the active category

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update the active category state
  };

  return (
    <div className=" mx-auto flex max-w-7xl justify-between flex-row flex-wrap ">
      {/* category 1 */}
      <Link to="/sports">
        <button
          onClick={() => handleCategoryClick("sports")}
          type="button"
          className={`inline-flex flex-col items-center  justify-center mr-2 px-0.5 h-16 w-24 hover:border-b-2 ${
            activeCategory === "sports"
              ? "border-gray-400 border-solid border-b-2"
              : "border-transparent"
          } group`}
        >
          <svg
            className="w-7 h-7 mb-2 text-gray-500 group-hover:text-gray-400 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 48 48"
          >
            <title>sports-basketball-solid</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none" />
              </g>
              <g id="Q3_icons" data-name="Q3 icons">
                <g>
                  <path d="M3.9,15.1A21.4,21.4,0,0,0,2.4,27.9l10.9-2.5A16.1,16.1,0,0,0,3.9,15.1Z" />
                  <path d="M13.9,28.3,3.1,30.8a22.4,22.4,0,0,0,6.7,10A16,16,0,0,0,14,30,9.7,9.7,0,0,0,13.9,28.3Z" />
                  <path d="M16.2,24.7l6.1-1.3L17.7,2.9A21.8,21.8,0,0,0,5.3,12.4,18.8,18.8,0,0,1,16.2,24.7Z" />
                  <path d="M16.8,27.7A8.6,8.6,0,0,1,17,30a19,19,0,0,1-4.8,12.6,21.7,21.7,0,0,0,15.2,3.1L23,26.3Z" />
                  <path d="M31.3,21.3A18.4,18.4,0,0,1,31,18,19,19,0,0,1,35.8,5.4,21.7,21.7,0,0,0,20.6,2.3l4.6,20.4Z" />
                  <path d="M34.2,20.6l11-2.4a21.6,21.6,0,0,0-7-11A16,16,0,0,0,34,18,21.1,21.1,0,0,0,34.2,20.6Z" />
                  <path d="M32,24.2l-6.1,1.4,4.4,19.5a21.8,21.8,0,0,0,12.4-9.5A19.4,19.4,0,0,1,32,24.2Z" />
                  <path d="M45.8,21.1,35,23.6a16.3,16.3,0,0,0,9.1,9.3A21.5,21.5,0,0,0,45.8,21.1Z" />
                </g>
              </g>
            </g>
          </svg>
          <span className="text-sm text-gray-500 group-hover:text-gray-400">
            Sports
          </span>
        </button>
      </Link>
      {/* category 2 */}
      <Link to="/board_games">
        <button
          onClick={() => handleCategoryClick("boardgames")}
          type="button"
          className={`inline-flex flex-col items-center  justify-center mr-2 px-0.5 h-16 w-24 hover:border-b-2 ${
            activeCategory === "boardgames"
              ? "border-gray-400 border-solid border-b-2"
              : "border-transparent"
          } group`}
        >
          <svg
            className="w-7 h-7  mb-2 text-gray-500 group-hover:text-gray-400 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17,4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V20a2,2,0,0,0,2,2H15a2,2,0,0,0,2-2ZM5.5,7a1,1,0,1,1,1-1A1,1,0,0,1,5.5,7Zm4,7c-1,1-3,2-3-1s3-4,3-4,3,1,3,4S10.5,15,9.5,14Zm4,5a1,1,0,1,1,1-1A1,1,0,0,1,13.5,19Z" />
            <path d="M20,3H19V20a2,2,0,0,1-2,2h3a2,2,0,0,0,2-2V5A2,2,0,0,0,20,3Z" />
          </svg>
          <span className="text-sm text-gray-500 group-hover:text-gray-400">
            Board Games
          </span>
        </button>
      </Link>
      {/* category 3 */}
      <Link to="/workshops">
        <button
          onClick={() => handleCategoryClick("workshops")}
          type="button"
          className={`inline-flex flex-col items-center  justify-center mr-2 px-0.5 h-16 w-24 hover:border-b-2 ${
            activeCategory === "workshops"
              ? "border-gray-400 border-solid border-b-2"
              : "border-transparent"
          } group`}
        >
          <svg
            className="w-6 h-6 mb-2 text-gray-500 group-hover:text-gray-400 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            version="1.1"
            id="_x32_"
            viewBox="0 0 512 512"
          >
            <style type="text/css"></style>
            <g>
              <path
                className="st0"
                d="M0,78.41v157.724h217.084l-7.827-8.116c-0.327-0.03-0.597-0.048-0.942-0.077   c-4.078-0.328-9.732-0.847-16.367-1.597c-13.28-1.528-30.406-4-46.734-8.019c-10.906-2.712-21.445-6.02-30.656-10.684   c-5.25-2.682-10.155-5.808-14.443-10.068c-13.723-13.713-20.656-31.83-20.636-49.821c-0.02-17.992,6.895-36.118,20.636-49.85   c13.731-13.722,31.848-20.646,49.83-20.636c17.982-0.01,36.108,6.914,49.831,20.646c3.961,3.981,6.933,8.501,9.5,13.346   c2.558,4.847,4.683,10.068,6.558,15.53c3.732,10.924,6.463,22.896,8.559,34.436c3.491,19.299,5.174,37.348,5.846,46.158   l5.904,6.116V0H78.41C35.108,0,0,35.099,0,78.41z"
              />
              <path
                className="st0"
                d="M383.355,181.417c3.414-1.721,5.847-3.49,6.972-4.654c8.049-8.059,12.011-18.463,12.021-29.022   c-0.01-10.558-3.972-20.982-12.011-29.02h-0.01c-8.058-8.049-18.463-12.002-29.021-12.02c-10.559,0.019-20.963,3.98-29.022,12.02   c-1,0.98-2.462,2.904-3.933,5.616c-1.491,2.702-3.01,6.154-4.423,10.077c-2.857,7.847-5.299,17.559-7.222,27.377   c-2.538,12.886-4.211,25.896-5.25,35.8c1.443-0.144,2.942-0.307,4.5-0.49c12.501-1.433,28.657-3.798,43.042-7.347   C368.576,187.408,377.384,184.476,383.355,181.417z"
              />
              <path
                className="st0"
                d="M433.59,0H275.857v212.727l5.155-5.356c0.029-0.414,0.057-0.769,0.096-1.221   c0.327-4.077,0.836-9.732,1.596-16.366c1.519-13.27,3.99-30.416,8.009-46.754c2.703-10.914,6.029-21.444,10.684-30.675   c2.702-5.26,5.827-10.165,10.077-14.444c13.723-13.732,31.849-20.656,49.831-20.646c17.982-0.01,36.108,6.914,49.83,20.636   c13.732,13.732,20.656,31.839,20.646,49.84c0.01,17.982-6.914,36.118-20.646,49.84c-3.99,3.952-8.51,6.914-13.347,9.491   c-4.856,2.558-10.068,4.683-15.53,6.558c-10.914,3.722-22.876,6.443-34.416,8.539c-19.078,3.462-36.926,5.155-45.85,5.847   l-7.827,8.116H512V78.41C512,35.099,476.892,0,433.59,0z"
              />
              <path
                className="st0"
                d="M374.557,357.2l-21.195,20.414l-77.506-80.458V512H433.59c43.302,0,78.41-35.098,78.41-78.41V275.858H296.205   L374.557,357.2z"
              />
              <path
                className="st0"
                d="M136.692,357.2l78.353-81.342H0V433.59C0,476.902,35.108,512,78.41,512h157.733V296.388l-78.256,81.227   L136.692,357.2z"
              />
              <path
                className="st0"
                d="M191.966,150.05c-2.346-9.578-5.288-18.376-8.346-24.348c-1.721-3.423-3.491-5.846-4.655-6.98   c-8.049-8.04-18.463-12.002-29.022-12.02c-10.558,0.019-20.963,3.971-29.021,12.02c-8.039,8.039-12.002,18.463-12.02,29.03   c0.018,10.549,3.981,20.973,12.02,29.012c0.981,0.999,2.904,2.462,5.616,3.933c2.692,1.491,6.144,3,10.059,4.413   c7.856,2.847,17.559,5.299,27.367,7.222c12.894,2.548,25.925,4.222,35.839,5.26c-0.144-1.433-0.317-2.924-0.49-4.481   C197.89,180.62,195.524,164.455,191.966,150.05z"
              />
            </g>
          </svg>
          <span className="text-sm text-gray-500 group-hover:text-gray-400">
            Workshops
          </span>
        </button>
      </Link>
      {/* category 4 */}
      <Link to="/hobbies">
        <button
          onClick={() => handleCategoryClick("hobbies")}
          type="button"
          className={`inline-flex flex-col items-center  justify-center mr-2 px-0.5 h-16 w-24 hover:border-b-2 ${
            activeCategory === "hobbies"
              ? "border-gray-400 border-solid border-b-2"
              : "border-transparent"
          } group`}
        >
          <svg
            className="w-7 h-7  mb-2 text-gray-500 group-hover:text-gray-400 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 50 50"
            version="1.2"
            baseProfile="tiny"
            overflow="inherit"
          >
            <path d="M21.211 6c-12.632 0-20.211 10.133-20.211 15.2s2.526 8.867 7.579 8.867 7.58 1.266 7.58 5.066c0 5.066 3.789 8.866 8.842 8.866 16.422 0 24-8.866 24-17.732-.001-15.2-12.635-20.267-27.79-20.267zm-3.158 5.067c1.744 0 3.158 1.418 3.158 3.166 0 1.75-1.414 3.167-3.158 3.167s-3.158-1.418-3.158-3.167c0-1.748 1.414-3.166 3.158-3.166zm10.104 0c1.744 0 3.158 1.418 3.158 3.166 0 1.75-1.414 3.167-3.158 3.167-1.743 0-3.157-1.418-3.157-3.167 0-1.748 1.414-3.166 3.157-3.166zm10.106 5.066c1.745 0 3.159 1.417 3.159 3.167 0 1.75-1.414 3.166-3.159 3.166-1.744 0-3.157-1.417-3.157-3.166-.001-1.749 1.413-3.167 3.157-3.167zm-29.052 2.534c1.744 0 3.157 1.417 3.157 3.165 0 1.75-1.414 3.167-3.157 3.167s-3.158-1.418-3.158-3.167c0-1.748 1.414-3.165 3.158-3.165zm15.789 12.666c2.093 0 3.789 1.7 3.789 3.801 0 2.098-1.696 3.799-3.789 3.799s-3.789-1.701-3.789-3.799c0-2.101 1.696-3.801 3.789-3.801z" />
          </svg>
          <span className="text-sm text-gray-500 group-hover:text-gray-400">
            Hobbies
          </span>
        </button>
      </Link>
      {/* category 5 */}
      <Link to="/business">
        <button
          onClick={() => handleCategoryClick("business")}
          type="button"
          className={`inline-flex flex-col items-center  justify-center mr-2 px-0.5 h-16 w-24 hover:border-b-2 ${
            activeCategory === "business"
              ? "border-gray-400 border-solid border-b-2"
              : "border-transparent"
          } group`}
        >
          <svg
            className="w-7 h-7  mb-2 text-gray-500 group-hover:text-gray-400 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 -64 640 640"
          >
            <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z" />
          </svg>
          <span className="text-sm text-gray-500 group-hover:text-gray-400">
            Business
          </span>
        </button>
      </Link>
      {/* category 6 */}
      <Link to="/mbti">
        <button
          onClick={() => handleCategoryClick("mbti")}
          type="button"
          className={`inline-flex flex-col items-center justify-center mr-2 px-0.5 h-16 w-24 hover:border-b-2 ${
            activeCategory === "mbti"
              ? "border-gray-400 border-solid border-b-2"
              : "border-transparent"
          } group`}
        >
          <svg
            className="w-7 h-7  mb-2 text-gray-500 group-hover:text-gray-400 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
            enable-background="new 0 0 512 512"
          >
            <g>
              <path d="M233.126,171.112c-2.323,0-4.677,0.13-7.049,0.396c-27.756,3.091-50.327,25.446-53.665,53.167   c-2.601,21.421,5.885,42.177,22.702,55.538c1.968,1.573,3.127,3.954,3.127,6.47v16.048c0,10.607,8.617,19.242,19.237,19.242h31.332   c10.616,0,19.233-8.635,19.233-19.242v-16.048c0-2.516,1.164-4.897,3.131-6.46c14.713-11.717,23.168-29.175,23.168-47.901   C294.343,198.576,266.884,171.112,233.126,171.112z" />
              <path d="M462.28,302.905c-10.068-56.361-34.643-194.315-50.695-215.074C383.056,41.563,325.455,9.872,258.928,9.872   c-94.89,0-201.223,17.436-208.968,157.143c-7.583,136.833,30.591,166.104,57.7,191.487c10.616,9.938,16.65,23.82,16.65,38.368   v92.697c0,6.946,5.616,12.562,12.557,12.562h152.863c6.937,0,12.552-5.616,12.552-12.562v-13.86c0-7.786,3.1-15.262,8.635-20.756   c5.535-5.513,13.02-8.563,20.814-8.536c21.637,0.112,47.775,0.162,50.471-0.188c42.339-5.418,30.577-52.326,40.452-119.474h23.411   c5.76,0,11.146-2.862,14.408-7.629C463.717,314.352,463.295,308.583,462.28,302.905z M224.882,84.851c0-2.729,2.212-4.94,4.94-4.94   h6.643c2.729,0,4.94,2.212,4.94,4.94v27.296c0,2.729-2.212,4.94-4.94,4.94h-6.643c-2.729,0-4.94-2.212-4.94-4.94V84.851z    M147.955,112.277c0.927-0.927,2.184-1.447,3.494-1.447c1.311,0,2.568,0.521,3.494,1.448l14.446,14.455   c1.928,1.929,1.928,5.057-0.001,6.986l-4.694,4.695c-0.927,0.927-2.184,1.447-3.494,1.447c-1.311,0-2.568-0.521-3.495-1.448   l-14.445-14.456c-1.928-1.93-1.927-5.057,0.001-6.986L147.955,112.277z M284.567,290.536v12.193   c0,15.756-10.297,29.009-24.494,33.771v13.689c0,7.646-6.182,13.851-13.842,13.851h-26.174c-7.665,0-13.842-6.205-13.842-13.851   v-13.689c-14.201-4.762-24.494-18.016-24.494-33.771v-12.193c-19.264-16.982-28.834-42.047-25.72-67.848   c4.259-35.236,32.949-63.677,68.252-67.606c46.935-5.196,86.615,31.458,86.615,77.238   C310.868,254.757,301.33,275.751,284.567,290.536z M308.587,136.781c-0.926,0.927-2.183,1.448-3.494,1.448   c-1.311,0-2.567-0.52-3.494-1.447l-4.695-4.695c-1.929-1.929-1.929-5.055-0.001-6.984l14.442-14.454   c0.926-0.927,2.183-1.448,3.494-1.448s2.567,0.521,3.494,1.447l4.695,4.696c1.928,1.929,1.929,5.055,0.001,6.984L308.587,136.781z" />
            </g>
          </svg>
          <span className="text-sm text-gray-500 group-hover:text-gray-400">
            MBTI
          </span>
        </button>
      </Link>
    </div>
  );
}
export default NavBar;
