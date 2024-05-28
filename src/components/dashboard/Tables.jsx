import React, { useState, useEffect } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { LiaTimesCircle } from "react-icons/lia";
import axios from "axios";

const Tables = () => {
  const [morning, setMorning] = useState([]);
  const [afternoon, setAfternoon] = useState([]);
  const [employee, setEmployee] = useState([]);
  // const hariIni = new Date().toISOString().split("T")[0];

  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = (now.getDate()).toString().padStart(2, '0');

  const hariIni = `${year}-${month}-${day}`;

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/admin/attendance/morning")
      .then((result) => {
        const filteredData = result.data.filter(
          (item) => item.date.split("T")[0] === hariIni
        );
        setMorning(filteredData);
      })
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

    if (morningRecord) {
      employee.date = morningRecord.date;
      employee.berangkat = morningRecord.time;
    }
    return employee;
  });

  const test = () => {
    console.log(hariIni);
  };

  return (
    <div className="flex w-full justify-between gap-10">
      <div className="overflow-x-auto mt-8 w-2/4">
        <div className="flex items-center gap-2">
          <LiaTimesCircle className="text-2xl" />
          <p className="text-xl my-3">Daftar Pegawai Terlambat [Hari Ini]</p>
        </div>

        <table className="w-full bg-white rounded-lg border border-gray-700 overflow-hidden">
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
            {mergedData
              .filter((item) => {
                if (item.berangkat) {
                  const [hours, minutes] = item.berangkat.split(":");
                  return (
                    parseInt(hours, 10) > 8 ||
                    (parseInt(hours, 10) === 8 && parseInt(minutes, 10) > 0)
                  );
                }
                return false;
              })
              .slice(0, 6)
              .map((row, index) => (
                <tr
                  key={row.id}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-left py-3 px-4">{index + 1}</td>
                  <td className="text-left py-3 px-4">{row.berangkat}</td>
                  <td className="text-left py-3 px-4">{row.name}</td>
                  <td className="text-left py-3 px-4">Terlambat</td>
                </tr>
              ))}
          </tbody>
        </table>
        <button
          className="px-4 py-2 w-full mt-2 rounded-lg font-semibold text-secondary-text bg-secondary hover:bg-secondary-hover"
          onClick={() => test()}
        >
          Lihat Selengkapnya
        </button>
      </div>

      <div className="overflow-x-auto mt-8 w-2/4">
        <div className="flex items-center gap-2">
          <AiOutlineFieldTime className="text-2xl" />
          <p className="text-xl my-3">Daftar Pegawai Hadir [Hari Ini]</p>
        </div>
        <table className="w-full bg-white rounded-lg border border-gray-700 overflow-hidden">
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
            {mergedData
              .filter((item) => item.berangkat && item.berangkat !== null)
              .slice(0, 6)
              .map((row, index) => (
                <tr
                  key={row.id}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-left py-3 px-4">{index + 1}</td>
                  <td className="text-left py-3 px-4">{row.berangkat}</td>
                  <td className="text-left py-3 px-4">{row.name}</td>
                  <td className="text-left py-3 px-4">
                    {row.berangkat.split(":")[0] > 8 ||
                    (row.berangkat.split(":")[0] == 8 &&
                      row.berangkat.split(":")[1] > 0)
                      ? "Terlambat"
                      : "Tepat Waktu"}
                  </td>
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
