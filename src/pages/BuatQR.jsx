import axios from "axios";
import React, { useState } from "react";

const BuatQR = () => {
  const [qrCode, setQRCode] = useState("");

  const generateQRCode = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/qrcode/generate"
      );
      setQRCode(response.data.qrCodeDataURL);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-3">Buat QRCode</h1>
      <div className="flex flex-col w-[40em] items-center gap-5">
        <button
          onClick={generateQRCode}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          Generate QR Code
        </button>
        {qrCode && <img src={qrCode} alt="QR Code" className="w-[20em]" />}
      </div>
    </div>
  );
};

export default BuatQR;
