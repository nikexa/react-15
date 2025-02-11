import React from 'react'
import { useLocation } from 'react-router-dom'

const Planet = () => {

    const location=useLocation()
    const data=location.state

  return (
    <div>
        <h1>{data.name}</h1>
        <h1>{data.rotation}</h1>
        <h1>{data.revolution}</h1>
        <img className='w-[250px] h-[250px]' src={data.images.planet} alt="" />
    </div>
  )
}

export default Planet