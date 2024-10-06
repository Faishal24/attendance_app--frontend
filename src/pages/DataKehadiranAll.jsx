import React from 'react'
import Tables from '../components/dataKehadiranAll/Tables'
import { today } from '../lib/Today'

const DataKeharianAll = () => {
  const hariIni = today()
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