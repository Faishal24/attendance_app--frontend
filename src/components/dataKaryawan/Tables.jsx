import React, { useEffect, useState } from "react";
import axios from "axios";

const Tables = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/admin/employee")
      .then((result) => setEmployee(result.data))
      .catch((error) => console.log(error));
  });

  return (
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
                  <button className="py-1 px-2 bg-green-500 text-white rounded-lg">
                    Lihat
                  </button>
                  <button className="py-1 px-2 bg-red-500 text-white rounded-lg">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
