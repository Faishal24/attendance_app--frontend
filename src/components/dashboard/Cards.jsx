import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import { GoPeople } from "react-icons/go";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineAssignmentLate } from "react-icons/md";
import { Link } from "react-router-dom";

const cards = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);

      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli',
        'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      const day = days[now.getDay()];
      const date = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      setCurrentDate(`${day}, ${date} ${month} ${year}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);
  })

  return (
    <div className="flex gap-6 justify-between">
      <div className="bg-[#7D92DC] w-[17em] h-[9em] p-4 rounded-lg flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <GoPeople style={{ fontSize: 27, color: "white" }} />
          <h2 className="text-2xl text-white font-bold">Jumlah Pegawai</h2>
        </div>
        <div>
          <div className="bg-[#122f94] w-full h-px"></div>
          <Link to="/datakaryawan">
          <p className="text-white mt-2">Lihat Selengkapnya</p>
          </Link>
        </div>
      </div>

      <div className="bg-[#DC7D82] w-[17em] h-[9em] p-4 rounded-lg flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <MdOutlineAssignmentLate style={{ fontSize: 27, color: "white" }} />
          <h2 className="text-2xl text-white font-bold">Terlambat</h2>
        </div>
        <div>
          <div className="bg-[#911118] w-full h-px"></div>
          <p className="text-white mt-2">Data Hari Ini</p>
        </div>
      </div>

      <div className="bg-[#7DDCB4] w-[17em] h-[9em] p-4 rounded-lg flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <AiOutlineCalendar style={{ fontSize: 27, color: "white" }} />
          <h2 className="text-2xl text-white font-bold">Hadir</h2>
        </div>
        <div>
          <div className="bg-[#118f5a] w-full h-px"></div>
          <p className="text-white mt-2">Data Hari Ini</p>
        </div>
      </div>

      <div className="bg-[#A1A1A1] w-[17em] h-[9em] p-4 rounded-lg">
        <div className="flex items-center gap-4">
          <AiOutlineClockCircle style={{ fontSize: 27, color: "white" }} />
          <h2 className="text-2xl text-white font-bold">{currentTime}</h2>
        </div>
        <p className="text-lg text-white mt-3">{currentDate}</p>
      </div>
    </div>
  );
};

export default cards;