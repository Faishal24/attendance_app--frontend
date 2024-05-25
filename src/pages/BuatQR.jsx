import axios from "axios";
import React, { useState } from "react";
import QRCode from "qrcode.react";
import Select from "react-select";

const BuatQR = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [qrCodeData, setQRCodeData] = useState("");
  const [error, setError] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  const handleTimeChange = (e) => {
    setTime(e.value);
  };

  const generateQRCode = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/generate",
        { date, time }
      );
      setQRCodeData(response.data.qrCodeData);
      setError("");
      console.log(date);
      // axios.post("http://localhost:3000/api/employee/checkin", new Date(date));
    } catch (error) {
      console.error("QR code generation error:", error);
      setError("Silahkan masukkan tanggal terlebih dahulu");
    }
  };

  const options = [
    { value: "pagi", label: "Pagi" },
    { value: "sore", label: "Sore" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Generate QR Code</h1>
      <div className="flex-col flex items-center ">
        <div className="flex gap-4 mb-5 w-full">
          <div className="flex flex-col gap-2 p-4 h-[35em] border-2 rounded-xl">
            <label htmlFor="date">Tanggal:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="p-1 border-[#d6d8d8] rounded-md border w-40 focus:border-blue-400 focus:border-2 focus:outline-0"
            />
            <label htmlFor="date">Waktu Presensi:</label>
            <Select
              className="w-40 rounded"
              options={options}
              onChange={handleTimeChange}
            />
            <button
              onClick={generateQRCode}
              className="w-full py-2 px-3 mb-[3em] border-2 rounded-lg text-white bg-secondary-dark hover:bg-secondary-hover2  "
            >
              Generate QR Code
            </button>
          </div>
          <div className="p-3 border-2 border-slate-200 w-full flex items-center justify-center rounded-lg">
            {qrCodeData && <QRCode value={qrCodeData} size={450} />}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
      {/* <button onClick={() => console.log(qrCodeData)}>ss</button> */}
    </div>
  );
};

export default BuatQR;
