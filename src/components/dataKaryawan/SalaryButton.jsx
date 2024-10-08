import React from "react";
import axios from "axios";

const SalaryButton = () => {
  const handleClick = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_IP_ADDRESS}/api/admin/reduce-salary`,
        {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
        }
      );
      await axios.put(
        `${import.meta.env.VITE_IP_ADDRESS}/api/admin/increase-salary`,
        {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
        }
      );

      alert("Proses gaji berhasil!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_IP_ADDRESS}/api/admin/reset-salary`
      );

      alert("Reset Berhasil");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-5">
      <button
        className="py-1 px-2 bg-sky-500 text-white rounded-lg"
        onClick={handleClick}
      >
        Proses Gaji
      </button>

      <button
        className="py-1 px-2 bg-rose-500 text-white rounded-lg"
        onClick={handleReset}
      >
        Reset Gaji
      </button>
    </div>
  );
};

export default SalaryButton;
