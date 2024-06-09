import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

const DrawerEmployee = ({ open, toggleDrawer }) => {
  const [form, setForm] = useState({
    kode: "",
    name: "",
    posisi: "",
    gender: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    agama: "",
    telepon: "",
    role: "employee",
  });

  const handleSubmit = async () => {
    await axios.post(`${import.meta.env.VITE_IP_ADDRESS}/api/admin/add/employee`, form);
    toggleDrawer(false);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  const DrawerList = (
    <Box
      sx={{ width: 450 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <div className="p-5 flex flex-col gap-5" onClick={handleClickInside}>
        <h1 className="text-2xl font-bold text-center">Tambah Karyawan</h1>
        <TextField
        id="outlined-basic"
        name="kode"
        label="Kode"
        variant="outlined"
        size="small"
        value={form.kode}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        name="name"
        label="Nama"
        variant="outlined"
        size="small"
        value={form.name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        name="posisi"
        label="Posisi"
        variant="outlined"
        size="small"
        value={form.posisi}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        name="gender"
        label="Gender"
        variant="outlined"
        size="small"
        value={form.gender}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        name="tempat_lahir"
        label="Tempat Lahir"
        variant="outlined"
        size="small"
        value={form.tempat_lahir}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        name="tanggal_lahir"
        label="Tanggal Lahir"
        variant="outlined"
        size="small"
        value={form.tanggal_lahir}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        name="agama"
        label="Agama"
        variant="outlined"
        size="small"
        value={form.agama}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        name="telepon"
        label="Telepon"
        variant="outlined"
        size="small"
        value={form.telepon}
        onChange={handleChange}
      />
        <button 
        className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-[500] rounded-lg"
        onClick={() => handleSubmit()}
        >
          Tambahkan
        </button>
      </div>
    </Box>
  );
  return (
    <>
      <Drawer open={open} anchor="right" onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default DrawerEmployee;
