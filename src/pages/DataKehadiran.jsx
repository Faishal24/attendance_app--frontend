import React from "react";
import Tables from "../components/dataKehadiran/Tables";
import { AiOutlineFileSearch } from "react-icons/ai";

const Kehadiran = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <AiOutlineFileSearch className="text-3xl" />
        <h1 className="text-2xl font-bold">Data Kehadiran</h1>
      </div>
      <Tables />
    </div>
  );
};

export default Kehadiran;
