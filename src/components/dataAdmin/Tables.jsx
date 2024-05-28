import React, {useEffect, useState} from "react";
import axios from "axios";

const Tables = () => {
  const [admin, setAdmin] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/admin/employee")
      .then((result) => setAdmin(result.data))
      .catch((error) => console.log(error));
  });

  const dataHadir = [
    {
      nama: "Jeff Maruli",
      username: "Jeff",
      email: "jeffmaruli@gmail.com",
      level: "admin",
      createdOn: "19 Mei 2024",
    },
    {
      nama: "John Doe",
      username: "John",
      email: "johndoe@gmail.com",
      level: "admin",
      createdOn: "18 Mei 2024",
    },
    {
      nama: "Jena Roe",
      username: "Jena",
      email: "jenaroe@gmail.com",
      level: "admin",
      createdOn: "18 Mei 2024",
    },
  ];
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full bg-white rounded-lg border border-gray-700 overflow-hidden">
        <thead>
          <tr className="w-full bg-secondary text-secondary-text">
            <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Nama Admin
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Username
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Email</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Level</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Dibuat
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Status
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {admin.filter(item => item.role == "admin").map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="text-left py-3 px-4">{index + 1}</td>
              <td className="text-left py-3 px-4">{item.name}</td>
              <td className="text-left py-3 px-4">{item.username}</td>
              <td className="text-left py-3 px-4">{item.email}</td>
              <td className="text-left py-3 px-4">{item.role}</td>
              <td className="text-left py-3 px-4">{item.dibuat}</td>
              <td className="text-left py-3 px-4">
                <div className="py-1 px-2 w-min bg-green-500 text-white rounded-lg">
                  Aktif
                </div>
              </td>
              <td className="text-left py-3 px-4 flex gap-2">
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
