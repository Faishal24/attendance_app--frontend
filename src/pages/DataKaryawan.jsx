import React, {useState} from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Table from "../components/dataKaryawan/Table";
import DrawerEmployee from "../components/dataKaryawan/DrawerEmployee";

const DataKaryawan = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (toggle, employee) => {
    setOpen(toggle);
  };

  return (
    <div>
      <div className="flex items-center gap-2 justify-between">
        <div className="flex">
          <AiOutlineUsergroupAdd className="text-3xl" />
          <h1 className="text-2xl font-bold">Data Karyawan</h1>
        </div>
        {/* <button 
          className="bg-green-500 text-white font-[500] px-4 py-1 rounded hover:bg-green-600 transition duration-200"
          onClick={() => toggleDrawer(true)}  
        >
          Tambah
        </button> */}
      </div>
      <Table />
      <DrawerEmployee open={open} toggleDrawer={toggleDrawer}/>
    </div>
  );
};

export default DataKaryawan;
