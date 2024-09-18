import { Outlet } from "react-router";

import App from "./App";

const Root = () => {
  return (
    <div>
      <App />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
