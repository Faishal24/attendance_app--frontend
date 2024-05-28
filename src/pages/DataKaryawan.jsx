import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Table from "../components/dataKaryawan/Table";


const DataKaryawan = () => {

  return (
    <div>
      <div className="flex items-center gap-2">
        <AiOutlineUsergroupAdd className="text-3xl" />
        <h1 className="text-2xl font-bold">Data Karyawan</h1>
      </div>
      <Table/>
    </div>
  );
};

export default DataKaryawan;
