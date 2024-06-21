import React, { useState } from "react";
import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";
import Topbar from "./Components/topbar/Topbar.jsx";
import Sidebar from "./Components/sidebar/Sidebar.jsx";

function App() {
  let router = useRoutes(routes);

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showMenuHandler = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  return (
    <div className="font-poppins overflow-x-hidden dark:bg-gray-700">
      <Topbar showMenuHandler={showMenuHandler} />
      <div className="flex mt-5">
        <Sidebar
          showMenuHandler={showMenuHandler}
          isVisible={isSidebarVisible}
        />
        {router}
      </div>
      {isSidebarVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={showMenuHandler}
        ></div>
      )}
    </div>
  );
}

export default App;
