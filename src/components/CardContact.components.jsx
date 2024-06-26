import React from 'react'

const CardContactComponents = ({data}) => {
  return (
    <div className=' w-full border shadow flex items-center justify-center rounded-lg'>
      <div className=" p-5 ">
        <h1 className=""><span className=' font-bold font-serif'>name:</span> {data.name}</h1>
        <h1 className=""><span className=' font-bold font-serif'>Phone:</span> {data.phone}</h1>
        <h1 className=""><span className=' font-bold font-serif'>Email:</span> {data.email}</h1>
        <h1 className=""><span className=' font-bold font-serif'>Address:</span> {data.address}</h1>
      </div>
    </div>
  )
}

export default CardContactComponents
