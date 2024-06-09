import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Profile from "/profile.png";
import Profile2 from "/profile2.png";
import axios from "axios";

const Table = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_IP_ADDRESS}/api/admin/employee`
        );
        setEmployee(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const toggleDrawer = (toggle, employee) => {
    setSelectedEmployee(employee);
    setOpen(toggle);
  };

  const DrawerList = (
    <Box
      sx={{ width: 450 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      {selectedEmployee ? (
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-center">Profil Karyawan</h1>
          <div className="flex-col flex justify-center items-center">
            <img
              src={selectedEmployee.gender == "male" ? Profile : Profile2}
              className="w-44 rounded-2xl"
            />
          </div>
          <table className="border-collapse border-none">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">
                  Kode Karyawan
                </td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.kode}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">Nama</td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.name}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">
                  Posisi
                </td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.posisi}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">
                  Email
                </td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.email}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">
                  Level
                </td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.role == "employee" ? "Karyawan" : "Admin"}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">
                  Jenis Kelamin
                </td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.gender == "male"
                    ? "Laki-laki"
                    : "Perempuan"}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">
                  Tempat Lahir
                </td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.tempat_lahir}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">
                  Tanggal Lahir
                </td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.tanggal_lahir}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">
                  Agama
                </td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.agama}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold border-none">
                  No. Telepon
                </td>
                <td className="border px-4 py-2 font-bold border-none">:</td>
                <td className="border px-4 py-2 border-none">
                  {selectedEmployee.telepon}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-[14em] text-2xl text-center font-bold">
          Data karyawan tidak tersedia
        </p>
      )}
    </Box>
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_IP_ADDRESS}/api/admin/delete/employee/${id}`);
      const result = await axios.get(
        `${import.meta.env.VITE_IP_ADDRESS}/api/admin/employee`
      );
      setEmployee(result.data);
      console.log("terhapus")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Drawer open={open} anchor="right" onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <div className="overflow-x-auto mt-3">
        <table className="w-full bg-white rounded-lg border border-gray-700 overflow-hidden">
          <thead>
            <tr className="w-full bg-secondary text-secondary-text">
              <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Kode Karyawan
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Nama Karyawan
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Posisi
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {employee
              .filter((item) => item.role == "employee")
              .map((item, index) => (
                <tr
                  key={item._id}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-left py-3 px-4">{index + 1}</td>
                  <td className="text-left py-3 px-4">{item.kode}</td>
                  <td className="text-left py-3 px-4">{item.name}</td>
                  <td className="text-left py-3 px-4">{item.posisi}</td>
                  <td className="text-left py-3 px-4 flex gap-2">
                    {/* <Link to="/detailkaryawan" state={{ from: item }}> */}
                    <button
                      className="py-1 px-2 bg-green-500 text-white rounded-lg"
                      onClick={() => toggleDrawer(true, item)}
                    >
                      Lihat
                    </button>
                    {/* </Link> */}
                    <button
                      className="py-1 px-2 bg-red-500 text-white rounded-lg"
                      onClick={() => handleDelete(item._id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
