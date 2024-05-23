import React from "react";

const Tables = () => {
  const dataHadir = [
    {
      kode: "12345",
      nama: "Darto",
      posisi: "Marketing"
    },
    {
      kode: "54321",
      nama: "Vincent",
      posisi: "Backend Dev"
    },
    {
      kode: "56789",
      nama: "Bagus",
      posisi: "Frontend Dev"
    },
  ];
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full bg-white rounded-lg border border-gray-700 overflow-hidden">
        <thead>
          <tr className="w-full bg-[#293635] text-white">
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
          {dataHadir.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="text-left py-3 px-4">{index + 1}</td>
              <td className="text-left py-3 px-4">{row.kode}</td>
              <td className="text-left py-3 px-4">{row.nama}</td>
              <td className="text-left py-3 px-4">{row.posisi}</td>
              <td className="text-left py-3 px-4 flex gap-2">
                <button className="py-1 px-2 bg-green-500 text-white rounded-lg">
                  Lihat
                </button>
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
