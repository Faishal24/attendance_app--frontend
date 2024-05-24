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
        "http://192.168.1.3:3000/api/admin/generate",
        { date }
      );
      setQRCodeData(response.data.qrCodeData);
      setError("");
    } catch (error) {
      console.error("QR code generation error:", error);
      setError("Failed to generate QR code");
    }
  };

  return (
    <div>
      <h2>Generate QR Code</h2>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </div>
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeData && <QRCode value={qrCodeData} size={512}/>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default BuatQR;
