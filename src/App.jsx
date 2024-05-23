import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Kehadiran from "./pages/DataKehadiran";
import DataAdmin from "./pages/DataAdmin";
import DataKaryawan from "./pages/DataKaryawan";
import BuatQR from "./pages/BuatQR";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Sidebar />
        <div className="content ml-64 pt-20 p-6 min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/datakehadiran" element={<Kehadiran />} />
            <Route path="/datakaryawan" element={<DataKaryawan />} />
            <Route path="/dataadmin" element={<DataAdmin />} />
            <Route path="/buatqrcode" element={<BuatQR />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
