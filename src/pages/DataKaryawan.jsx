import React from "react";
import Tables from "../components/dataKaryawan/Tables";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const DataKaryawan = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <AiOutlineUsergroupAdd className="text-3xl"/>
        <h1 className="text-2xl font-bold">Data Karyawan</h1>
      </div>
      <Tables />
    </div>
  );
};

export default DataKaryawan;
