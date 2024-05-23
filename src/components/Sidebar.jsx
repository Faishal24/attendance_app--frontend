import React from "react";
import Divider from "./Divider";
import {
  AiOutlineDashboard,
  AiOutlineUsergroupAdd,
  AiOutlineCalendar,
  AiOutlineQrcode,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 w-64 h-full bg-[#293635] text-white pt-4">
      <h1 className=" px-4 text-xl font-bold">Aplikasi Presensi</h1>
      <Divider />
      <ul>
        <li className="px-2">
          <p className="px-2 text-light-cyan">Home</p>
          <ul>
            <Link to="/">
              <li className="py-3 px-2 hover:bg-[#384a49] hover:rounded-md flex items-center gap-2">
                <AiOutlineDashboard
                  style={{ fontSize: 20, color: "#75a19d" }}
                />
                <p>Dashboard Admin</p>
              </li>
            </Link>
          </ul>
        </li>

        <li className="px-2 py-3">
          <a href="#admin" className="px-2 text-light-cyan">
            Admin
          </a>
          <ul>
            <Link to="/datakaryawan">
              <li className="py-3 px-2 hover:bg-[#384a49] hover:rounded-md flex items-center gap-2">
                <AiOutlineUsergroupAdd
                  style={{ fontSize: 20, color: "#75a19d" }}
                />
                <p>Data Karyawan</p>
              </li>
            </Link>
            <Link to="/dataadmin">
              <li className="py-3 px-2 hover:bg-[#384a49] hover:rounded-md flex items-center gap-2">
                <AiOutlineUsergroupAdd
                  style={{ fontSize: 20, color: "#75a19d" }}
                />
                <p>Data Admin</p>
              </li>
            </Link>
            <Link to="/datakehadiran">
              <li className="py-3 px-2 hover:bg-[#384a49] hover:rounded-md flex items-center gap-2">
                <AiOutlineCalendar style={{ fontSize: 20, color: "#75a19d" }} />

                <p>Rekap Kehadiran</p>
              </li>
            </Link>
            <Link to="buatqrcode">
              <li className="py-3 px-2 hover:bg-[#384a49] hover:rounded-md flex items-center gap-2">
                <AiOutlineQrcode style={{ fontSize: 20, color: "#75a19d" }} />
                <p>Ambil QR Code</p>
              </li>
            </Link>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
