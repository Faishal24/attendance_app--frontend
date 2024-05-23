import React from "react";

const Tables = () => {
  const dataHadir = [
    { date: "23 Mei 2024", name: "Jane Roe", time1: "06:41",time2: "15:58", status: "Hadir" },
    { date: "23 Mei 2024", name: "Richard Roe", time1: "06:42", time2: "15:58", status: "Hadir" },
    { date: "23 Mei 2024", name: "Alex Smith", time1: "06:48", time2: "15:59", status: "Hadir" },
    { date: "23 Mei 2024", name: "John Doe", time1: "06:49", time2: "15:59", status: "Hadir" },
    { date: "23 Mei 2024", name: "Alice Johnson", time1: "06:52", time2: "15:59", status: "Hadir" },
    { date: "23 Mei 2024", name: "Michael Brown", time1: "06:56", time2: "15:59", status: "Hadir" },
  ];
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full bg-white rounded-lg border border-gray-700 overflow-hidden">
        <thead>
          <tr className="w-full bg-[#293635] text-white">
            <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Tanggal</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Nama Pegawai</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Jam Masuk</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Jam Pulang</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {dataHadir.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="text-left py-3 px-4">{index + 1}</td>
              <td className="text-left py-3 px-4">{row.date}</td>
              <td className="text-left py-3 px-4">{row.name}</td>
              <td className="text-left py-3 px-4">{row.time1}</td>
              <td className="text-left py-3 px-4">{row.time2}</td>
              <td className="text-left py-3 px-4">{row.status}</td>
              <td className="text-left py-3 px-4">
                <button className="py-1 px-2 bg-red-500 text-white rounded-lg">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
