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
import Profile from "/profile.png";
import DrawerAdmin from "./DrawerAdmin";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 w-64 h-full bg-secondary text-secondary-text pt-4">
      {/* <h1 className=" px-4 text-xl font-bold">Aplikasi Presensi</h1> */}
      <div className="px-4 py-2 flex items-center gap-5">
        <DrawerAdmin />
        <h1 className="text-2xl font-bold">Admin</h1>
      </div>
      <Divider />
      <ul>
        <li className="px-2">
          <p className="px-2 text-secondary-text">Home</p>
          <ul>
            <Link to="/dashboard">
              <li className="py-3 px-2 hover:bg-secondary-hover hover:rounded-md flex items-center gap-2">
                <AiOutlineDashboard className="text-secondary-dark text-2xl" />
                <p>Dashboard Admin</p>
              </li>
            </Link>
          </ul>
        </li>

        <li className="px-2 py-3">
          <a href="#admin" className="px-2 text-secondary-text">
            Admin
          </a>
          <ul>
            <Link to="/datakaryawan">
              <li className="py-3 px-2 hover:bg-secondary-hover hover:rounded-md flex items-center gap-2">
                <AiOutlineUsergroupAdd className="text-secondary-dark text-2xl" />
                <p>Data Karyawan</p>
              </li>
            </Link>
            <Link to="/dataadmin">
              <li className="py-3 px-2 hover:bg-secondary-hover hover:rounded-md flex items-center gap-2">
                <AiOutlineUsergroupAdd className="text-secondary-dark text-2xl" />
                <p>Data Admin</p>
              </li>
            </Link>
            <Link to="/datakehadiran">
              <li className="py-3 px-2 hover:bg-secondary-hover hover:rounded-md flex items-center gap-2">
                <AiOutlineCalendar className="text-secondary-dark text-2xl" />

                <p>Rekap Kehadiran</p>
              </li>
            </Link>
            <Link to="buatqrcode">
              <li className="py-3 px-2 hover:bg-secondary-hover hover:rounded-md flex items-center gap-2">
                <AiOutlineQrcode className="text-secondary-dark text-2xl" />
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
