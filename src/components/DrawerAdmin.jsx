import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Profile from "/profile2.png";
import axios from "axios";

const DrawerAdmin = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:3000/api/admin/employee"
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
            <img src={Profile} className="w-44 rounded-2xl" />
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

  return (
    <div>
      <img
        src={Profile}
        style={{ width: 50, borderRadius: 10 }}
        onClick={() =>
          toggleDrawer(true, employee.filter((item) => item.role == "admin")[0])
        }
      />
      <Drawer open={open} anchor="right" onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerAdmin;
