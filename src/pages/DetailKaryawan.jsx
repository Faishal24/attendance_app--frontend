import React from "react";
import { useLocation } from "react-router-dom";
import Profile from "/profile.png";

const DetailKaryawan = () => {
  const { from } = useLocation().state;
  return (
    <div>
      <h1 className="text-2xl font-bold">Detail Karyawan</h1>
      {/* <button onClick={() => console.log(from)}>Klik</button> */}
      <div className="container mx-auto px-4 py-3">
        <div className="max-w-md mx-auto bg-white border-2 rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="flex justify-center">
              <img src={Profile} className="w-[20em] rounded-xl my-2" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold my-2">
                Employee Code:
              </label>
              <p className="text-gray-900">{from.kode}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Name:
              </label>
              <p className="text-gray-900">{from.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Position:
              </label>
              <p className="text-gray-900">{from.posisi}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Email:
              </label>
              <p className="text-gray-900">{from.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKaryawan;
