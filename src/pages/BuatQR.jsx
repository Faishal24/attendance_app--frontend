import axios from "axios";
import React, { useState } from "react";
import QRCode from "qrcode.react";

const BuatQR = () => {
  const [date, setDate] = useState("");
  const [qrCodeData, setQRCodeData] = useState("");
  const [error, setError] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const generateQRCode = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/generate",
        { date }
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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Generate QR Code</h1>
      <div className="flex-col flex items-center">
        <div className="flex gap-4 mb-[5em] w-full">
          <div className="flex items-center gap-2">
            <label htmlFor="date">Tanggal:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="p-2 border-[#293635] rounded-lg border-2"
            />
          </div>
          <button
            onClick={generateQRCode}
            className="w-full py-2 px-3 border-2 rounded-lg text-secondary-dark border-secondary-dark hover:bg-secondary-dark hover:text-white "
          >
            Generate QR Code
          </button>
        </div>
        {qrCodeData && (
          <div className="p-3 border-4 border-slate-950 w-min">
            <QRCode value={qrCodeData} size={384} />
          </div>
        )}
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* <button onClick={() => console.log(qrCodeData)}>ss</button> */}
    </div>
  );
};

export default BuatQR;
