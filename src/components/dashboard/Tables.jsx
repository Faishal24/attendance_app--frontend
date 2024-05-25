import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { LiaTimesCircle } from "react-icons/lia";

const Tables = () => {
  const dataHadir = [
    { time: "06:42", name: "Jane Roe", status: "Hadir" },
    { time: "06:42", name: "Richard Roe", status: "Hadir" },
    { time: "06:48", name: "Alex Smith", status: "Hadir" },
    { time: "06:49", name: "John Doe", status: "Hadir" },
    { time: "06:52", name: "Alice Johnson", status: "Hadir" },
    { time: "06:56", name: "Michael Brown", status: "Hadir" },
  ];

  const dataTelat = [
    { time: "07:05", name: "Emily Davis", status: "Telat" },
    { time: "07:10", name: "David Wilson", status: "Telat" },
    { time: "07:15", name: "Sophia Martinez", status: "Telat" },
    { time: "07:20", name: "James Anderson", status: "Telat" },
    { time: "07:25", name: "Linda Thomas", status: "Telat" },
    { time: "07:30", name: "Daniel Lee", status: "Telat" },
  ];

  return (
    <div className="flex w-full justify-between">
      <div className="overflow-x-auto mt-8">
        <div className="flex items-center gap-2">
          <LiaTimesCircle className="text-2xl" />
          <p className="text-xl my-3">Daftar Pegawai Terlambat [Hari Ini]</p>
        </div>

        <table className="w-[37em] bg-white rounded-lg border border-gray-700 overflow-hidden">
          <thead>
            <tr className="w-full bg-secondary text-secondary-text">
              <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Jam Masuk
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Nama Pegawai
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {dataTelat.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">{row.time}</td>
                <td className="text-left py-3 px-4">{row.name}</td>
                <td className="text-left py-3 px-4">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="px-4 py-2 w-full mt-2 rounded-lg font-semibold text-secondary-text bg-secondary hover:bg-secondary-hover">
          Lihat Selengkapnya
        </button>
      </div>

      <div className="overflow-x-auto mt-8">
        <div className="flex items-center gap-2">
          <AiOutlineFieldTime className="text-2xl" />
          <p className="text-xl my-3">Daftar Pegawai Hadir [Hari Ini]</p>
        </div>
        <table className="w-[37em] bg-white rounded-lg border border-gray-700 overflow-hidden">
          <thead>
            <tr className="w-full bg-secondary text-secondary-text">
              <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Waktu Datang
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Nama Pegawai
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {dataHadir.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">{row.time}</td>
                <td className="text-left py-3 px-4">{row.name}</td>
                <td className="text-left py-3 px-4">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="px-4 py-2 w-full mt-2 rounded-lg font-semibold text-secondary-text bg-secondary hover:bg-secondary-hover">
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Tables;
