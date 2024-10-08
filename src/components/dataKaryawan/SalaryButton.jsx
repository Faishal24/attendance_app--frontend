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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="py-1 px-2 bg-orange-500 text-white rounded-lg"
      onClick={handleClick}
    >
      Proses Gaji
    </button>
  );
};

export default SalaryButton;
