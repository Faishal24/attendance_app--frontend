import React, { useEffect, useState } from "react";
import axios from "axios";

const Tables = () => {
  const [morning, setMorning] = useState([]);
  const [afternoon, setAfternoon] = useState([]);
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/admin/attendance/morning")
      .then((result) => setMorning(result.data))
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:3000/api/admin/attendance/afternoon")
      .then((result) => setAfternoon(result.data))
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:3000/api/admin/employee")
      .then((result) => setEmployee(result.data))
      .catch((error) => console.log(error));
  }, []);

  const mergedData = employee.map((employee) => {
    const morningRecord = morning.find(
      (record) => record.user_id === employee._id
    );
    const afternoonRecord = afternoon.find(
      (record) => record.user_id === employee._id
    );

    if (morningRecord && afternoonRecord) {
      employee.date = morningRecord.date;
      employee.berangkat = morningRecord.time;
      employee.pulang = afternoonRecord.time;
    }
    return employee;
  });

  const test = () => {
    console.log(mergedData);
  };
  const dataHadir = [
    {
      date: "23 Mei 2024",
      name: "Jane Roe",
      time1: "06:41",
      time2: "15:58",
      status: "Hadir",
    },
    {
      date: "23 Mei 2024",
      name: "Richard Roe",
      time1: "06:42",
      time2: "15:58",
      status: "Hadir",
    },
    {
      date: "23 Mei 2024",
      name: "Alex Smith",
      time1: "06:48",
      time2: "15:59",
      status: "Hadir",
    },
    {
      date: "23 Mei 2024",
      name: "John Doe",
      time1: "06:49",
      time2: "15:59",
      status: "Hadir",
    },
    {
      date: "23 Mei 2024",
      name: "Alice Johnson",
      time1: "06:52",
      time2: "15:59",
      status: "Hadir",
    },
    {
      date: "23 Mei 2024",
      name: "Michael Brown",
      time1: "06:56",
      time2: "15:59",
      status: "Hadir",
    },
  ];
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full bg-white rounded-lg border border-gray-700 overflow-hidden">
        <thead>
          <tr className="w-full bg-secondary text-secondary-text">
            <th className="text-left py-3 px-4 font-semibold text-sm">No</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Tanggal
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Nama Pegawai
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Jam Masuk
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Jam Pulang
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Status
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {mergedData
            .filter(
              (item) =>
                (item.berangkat && item.berangkat !== null) ||
                (item.pulang && item.pulang !== null)
            )
            .map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">
                  {row.date.split("T")[0]}
                </td>
                <td className="text-left py-3 px-4">{row.name}</td>
                <td className="text-left py-3 px-4">{row.berangkat}</td>
                <td className="text-left py-3 px-4">{row.pulang}</td>
                <td className="text-left py-3 px-4">
                  {row.berangkat.split(":")[0] > 8 ||
                  (row.berangkat.split(":")[0] == 8 &&
                    row.berangkat.split(":")[1] > 0)
                    ? "Terlambat"
                    : "Hadir"}
                </td>
                <td className="text-left py-3 px-4">
                  <button className="py-1 px-2 bg-red-500 text-white rounded-lg">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button className="mt-5 py-2 px-3 bg-secondary-dark text-white rounded-lg hover:bg-secondary-hover2">Unduh</button>
    </div>
  );
};

export default Tables;
