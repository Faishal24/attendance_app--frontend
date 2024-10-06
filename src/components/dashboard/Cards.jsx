import React, { useEffect, useState } from "react";
import { GoPeople } from "react-icons/go";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineAssignmentLate } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { today } from "../../lib/Today";

const cards = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [employee, setEmployee] = useState([]);
  const [morning, setMorning] = useState([]);
  const hariIni = today();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);

      const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ];
      const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      const day = days[now.getDay()];
      const date = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      setCurrentDate(`${day}, ${date} ${month} ${year}`);
    };

    const fetchData = async () => {
      axios
        .get(`${import.meta.env.VITE_IP_ADDRESS}/api/admin/employee`)
        .then((result) => setEmployee(result.data))
        .catch((error) => console.log(error));

      axios
        .get(`${import.meta.env.VITE_IP_ADDRESS}/api/admin/attendance/morning`)
        .then((result) => {
          const filteredData = result.data.filter(
            (item) => item.date.split("T")[0] === hariIni
          );
          setMorning(filteredData);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);
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

  const filterData = mergedData.filter((item) => {
    if (item.berangkat) {
      const [hours, minutes] = item.berangkat.split(":");
      return (
        parseInt(hours, 10) > 8 ||
        (parseInt(hours, 10) === 8 && parseInt(minutes, 10) > 0)
      );
    }
    return false;
  });

  return (
    <div className="flex gap-6 justify-between">
      <div className="bg-[#7D92DC] w-[24rem] h-[11em] p-4 rounded-lg flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <GoPeople className="text-[6rem] text-white" />
          <div className="flex flex-col items-end gap-2">
            {employee.length > 0 ? (
              <p className="text-white mt-2 text-4xl font-bold m-0">
                {employee.length}
              </p>
            ) : (
              <p className="text-white mt-2 text-4xl font-bold m-0">0</p>
            )}
            <h2 className="text-2xl text-white text-end">Jumlah Pegawai</h2>
          </div>
        </div>
        <div>
          <div className="bg-[#122f94] w-full h-px"></div>
          <Link to="/datakaryawan">
            <p className="text-white mt-2">Lihat Selengkapnya</p>
          </Link>
        </div>
      </div>

      <div className="bg-[#DC7D82] w-[24rem] h-[11em] p-4 rounded-lg flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <MdOutlineAssignmentLate className="text-[6rem] text-white" />
          <div className="flex flex-col items-end gap-2">
            {morning.length > 0 ? (
              <p className="text-white mt-2 text-4xl font-bold m-0">
                {filterData.length}
              </p>
            ) : (
              <p className="text-white mt-2 text-4xl font-bold m-0">0</p>
            )}
            <h2 className="text-2xl text-white text-end">Terlambat</h2>
          </div>
        </div>
        <div>
          <div className="bg-[#911118] w-full h-px"></div>
          <p className="text-white mt-2">Data Hari Ini</p>
        </div>
      </div>

      <div className="bg-[#7DDCB4] w-[24rem] h-[11em] p-4 rounded-lg flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <AiOutlineCalendar className="text-[6rem] text-white" />
          <div className="flex flex-col items-end gap-2">
            {morning.length > 0 ? (
              <p className="text-white mt-2 text-4xl font-bold m-0">
                {morning.length}
              </p>
            ) : (
              <p className="text-white mt-2 text-4xl font-bold m-0">0</p>
            )}
            <h2 className="text-2xl text-white text-end">Hadir</h2>
          </div>
        </div>
        <div>
          <div className="bg-[#118f5a] w-full h-px"></div>
          <p className="text-white mt-2">Data Hari Ini</p>
        </div>
      </div>

      <div className="bg-[#A1A1A1] w-[24rem] h-[11em] p-4 rounded-lg">
        <div className="flex items-center justify-between h-full">
          <AiOutlineClockCircle className="text-[6rem] text-white" />
          <div className="flex flex-col items-end gap-2">
            <h2 className="text-4xl text-white text-end font-bold">{currentTime}</h2>
            <p className="text-lg text-white mt-3">{currentDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
