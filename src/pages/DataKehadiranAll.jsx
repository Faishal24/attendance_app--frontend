import React from 'react'
import Tables from '../components/dataKehadiranAll/Tables'

const DataKeharianAll = () => {
  // buat tanggal hari ini
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1).toString().padStart(2, '0')
  const day = now.getDate().toString().padStart(2, '0')
  const hariIni = `${year}-${month}-${day}`
  return (
    <>
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Data Karyawan [{hariIni}]</h1>
      </div>
      <Tables />
    </>
  )
}

export default DataKeharianAll