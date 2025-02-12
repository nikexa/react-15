import React from 'react'
import { useLocation } from 'react-router-dom'
import wikipediaIMG from '../../IMAGES/wikipedia.png'

const Planet = () => {

    const location=useLocation()
    const data=location.state

  return (
    <>
    <div className='flex '>

      <div className='w-[60%] flex justify-center items-center'>
        <img src={data.images.planet} alt="" />
      </div>

      <div className='w-[40%] mt-[100px]'>
        <p className='font-[Antonio] font-normal text-[80px] text-white'>{data.name}</p>
        <p className='w-[350px] font-[Spartan] font-normal text-[14px] text-white '>{data.overview.content}</p>
        <div className='flex items-center gap-[8px]'>
          <p className='font-[Spartan] font-normal text-[14px] text-white'>Source :  <a className='fonr-[700] underline' target='blank' href={data.overview.source}> Wikipedia</a></p>
          <img className='' src={wikipediaIMG} alt="" /> 
        </div>
        <button className='flex gap-[20px] h-[48px] w-[350px] bg-[#419EBB;] items-center'>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%]'>01</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white '>OVERVIEW</p>
        </button>

        <button className='flex gap-[20px] h-[48px] w-[350px] bg-[#070724;] items-center border border-white'>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%]'>02</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white '>Surface Geology</p>
        </button>

        <button className='flex gap-[20px] h-[48px] w-[350px] bg-[#070724;] items-center border border-white'>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%]'>03</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white '>Surface Geology</p>
        </button>
      </div>

    </div>
    
    <div className='flex justify-center gap-[50px]'>
      <div className='w-[255px] h-[128px] border border-white flex flex-col justify-center'>
        <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px]'>ROTATION TIME</p>
        <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]'>{data.rotation}</p>
      </div>

      <div className='w-[255px] h-[128px] border border-white flex flex-col justify-center'>
        <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px]'>REVOLUTION TIME</p>
        <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]'>{data.revolution}</p>
      </div>

      <div className='w-[255px] h-[128px] border border-white flex flex-col justify-center'>
        <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px]'>radius</p>
        <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]'>{data.radius}</p>
      </div>

      <div className='w-[255px] h-[128px] border border-white flex flex-col justify-center'>
        <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px]'>AVERAGE TEMP.</p>
        <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]'>{data.temperature}</p>
      </div>

    </div>

    </>
  )
}

export default Planet