import React, { useEffect, useState } from "react";
import axios from "axios";

const Tables = () => {
  const [morning, setMorning] = useState([]);
  const [afternoon, setAfternoon] = useState([]);
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_IP_ADDRESS}/api/admin/attendance/morning`)
      .then((result) => setMorning(result.data))
      .catch((error) => console.log(error));

    axios
      .get(`${import.meta.env.VITE_IP_ADDRESS}/api/admin/attendance/afternoon`)
      .then((result) => setAfternoon(result.data))
      .catch((error) => console.log(error));

    axios
      .get(`${import.meta.env.VITE_IP_ADDRESS}/api/admin/employee`)
      .then((result) => setEmployee(result.data))
      .catch((error) => console.log(error));
  }, []);

  const mergedData = employee.map((employee) => {
    const morningRecords = morning.filter(
      (record) => record.user_id === employee._id
    );
    const afternoonRecords = afternoon.filter(
      (record) => record.user_id === employee._id
    );

    const kehadiran = [];
    morningRecords.forEach((morningRecord) => {
      const correspondingAfternoonRecord = afternoonRecords.find(
        (record) => record.date === morningRecord.date
      );
      kehadiran.push({
        date: morningRecord.date,
        berangkat: morningRecord.time,
        pulang: correspondingAfternoonRecord
          ? correspondingAfternoonRecord.time
          : "",
      });
    });

    return {
      ...employee,
      kehadiran,
    };
  });

  const test = () => {
    console.log(mergedData);
  };

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
              Status Berangkat
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              Status Pulang
            </th>
            {/* <th className="text-left py-3 px-4 font-semibold text-sm">Aksi</th> */}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {mergedData
            .flatMap((employee) =>
              employee.kehadiran.map((record) => ({
                ...record,
                name: employee.name, // Include the employee's name in each attendance record
              }))
            )
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((record, index) => (
              <tr
                key={record.date + "-" + record.user_id}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">
                  {record.date.split("T")[0]}
                </td>
                <td className="text-left py-3 px-4">{record.name}</td>{" "}
                {/* Include employee's name */}
                <td className="text-left py-3 px-4">{record.berangkat}</td>
                <td className="text-left py-3 px-4">{record.pulang}</td>
                <td className="text-left py-3 px-4">
                  {record.berangkat.split(":")[0] > 8 ||
                  (record.berangkat.split(":")[0] == 8 &&
                    record.berangkat.split(":")[1] > 0)
                    ? "Terlambat"
                    : "Tepat Waktu"}
                </td>
                <td className="text-left py-3 px-4">
                  {record.pulang.split(":")[0] > 17 ||
                  (record.pulang.split(":")[0] == 17 &&
                    record.pulang.split(":")[1] > 30)
                    ? "Lembur"
                    : "Hadir"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <td className="text-left py-3 px-4">
        <button
          className="py-1 px-2 bg-red-500 text-white rounded-lg"
          onClick={() => test()}
        >
          Hapus
        </button>
      </td> */}
    </div>
  );
};

export default Tables;
