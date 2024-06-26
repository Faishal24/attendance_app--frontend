import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Kehadiran from "./pages/DataKehadiran";
import DataAdmin from "./pages/DataAdmin";
import DataKaryawan from "./pages/DataKaryawan";
import BuatQR from "./pages/BuatQR";
import DetailKaryawan from "./pages/DetailKaryawan";
import DataKehadiran from "./pages/DataKehadiranAll";

function App() {
  return (
      <div className="font-sans">
        {/* <Header /> */}
        <Sidebar />
        {/* <div className="content ml-64 pt-20 p-6 min-h-screen bg-white"> */}
        <div className="content ml-64 p-6 min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/datakehadiran" element={<Kehadiran />} />
            <Route path="/allkehadiran" element={<DataKehadiran />} />
            <Route path="/datakaryawan" element={<DataKaryawan />} />
            <Route path="/dataadmin" element={<DataAdmin />} />
            <Route path="/buatqrcode" element={<BuatQR />} />
            <Route path="/detailkaryawan" element={<DetailKaryawan />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
