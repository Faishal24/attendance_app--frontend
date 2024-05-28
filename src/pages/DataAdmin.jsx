import React from 'react'
import Tables from '../components/dataAdmin/Tables'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

const DataAdmin = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
      <AiOutlineUsergroupAdd className="text-3xl"/>
        <h1 className="text-2xl font-bold">Data Admin</h1>
      </div>
      <Tables/>
    </div>
  )
}

export default DataAdmin
