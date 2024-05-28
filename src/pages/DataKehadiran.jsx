import React, { useRef } from "react";
import Tables from "../components/dataKehadiran/Tables";
import { AiOutlineFileSearch } from "react-icons/ai";
import generatePDF, { Margin } from "react-to-pdf";

const options = {
  page: {
    margin: Margin.MEDIUM,
  },
};

const Kehadiran = () => {
  const targetRef = useRef();
  return (
    <>
      <div ref={targetRef}>
        <div className="flex items-center gap-2">
          <AiOutlineFileSearch className="text-3xl" />
          <h1 className="text-2xl font-bold">Data Kehadiran</h1>
        </div>
        <Tables />
      </div>
      <div className="flex justify-end">
        <button
          className="mt-5 py-2 px-3 bg-secondary-dark text-white rounded-lg hover:bg-secondary-hover2"
          onClick={() => generatePDF(targetRef, options)}
        >
          Unduh
        </button>
      </div>
    </>
  );
};

export default Kehadiran;
