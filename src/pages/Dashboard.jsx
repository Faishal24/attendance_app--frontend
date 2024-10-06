import React from "react";
import Cards from "./../components/dashboard/Cards";
import Tables from "../components/dashboard/Tables";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={() => handleLogout()}
          className="bg-red-500 text-white font-[500] px-4 py-1 rounded-xl hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
      <Cards />
      <Tables />
    </>
  );
};

export default Dashboard;
