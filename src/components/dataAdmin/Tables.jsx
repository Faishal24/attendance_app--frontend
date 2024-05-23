import React from "react";

const Tables = () => {
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
          <tr className="w-full bg-[#293635] text-white">
            <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Nama Lengkap
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
          {dataHadir.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="text-left py-3 px-4">{index + 1}</td>
              <td className="text-left py-3 px-4">{row.nama}</td>
              <td className="text-left py-3 px-4">{row.username}</td>
              <td className="text-left py-3 px-4">{row.email}</td>
              <td className="text-left py-3 px-4">{row.level}</td>
              <td className="text-left py-3 px-4">{row.createdOn}</td>
              <td className="text-left py-3 px-4">
                <button className="py-1 px-2 bg-green-500 text-white rounded-lg">
                  Aktif
                </button>
              </td>
              <td className="text-left py-3 px-4 flex gap-2">
                <button className="py-1 px-2 bg-amber-500 text-white rounded-lg">
                  Edit
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
