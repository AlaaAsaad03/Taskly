// Sidebar.tsx
import React from "react";
import Profile from "../Profile/Profile";
import RadialChart from "../RadialChart/RadialChart";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/router";

function Sidebar() {
  const { logoutUser } = useUserContext();

  return (
    <div className="w-full sm:w-[20rem] mt-[5rem] h-[calc(100vh-5rem)] fixed right-0 top-0  bg-[#f9f9f9] flex flex-col shadow-lg overflow-y-auto">
      {/* Profile Section */}
      <div className="px-4 sm:px-6">
        <Profile />
      </div>

      {/* Chart Section */}
      <div className="px-4 sm:px-6 mt-2 flex justify-center">
        {" "}
        {/* Reduced mt-4 to mt-2 */}
        <div className="w-[90%] max-w-[300px]">
          <RadialChart />
        </div>
      </div>

      {/* Sign Out Button */}
      <button
        className="mt-6 mb-6 mx-auto w-[90%] py-3 bg-[#EB4E31] text-white rounded-full text-sm font-medium hover:bg-[#D13E29] transition duration-300 ease-in-out shadow-sm"
        onClick={logoutUser}
        aria-label="Sign out"
      >
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;
