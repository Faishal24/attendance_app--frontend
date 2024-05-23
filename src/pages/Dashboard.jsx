import React from "react";
import Cards from "./../components/dashboard/Cards";
import Tables from "../components/dashboard/Tables";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Dashboard</h1>
      <Cards />
      <Tables />
    </>
  );
};

export default Dashboard;
