import React from 'react'
import { useLocation } from 'react-router-dom'
import wikipediaIMG from '../../IMAGES/wikipedia.png'

const Planet = () => {

    const location=useLocation()
    const data=location.state

  return (
    <>
    <div className='flex h-[70vh] xl:flex-col'>

      <div className='w-[60%] flex justify-center items-center'>
        <img src={data.images.planet} alt="" />
      </div>

      <div className='w-[40%] mt-[100px]'>
        <div>
          <p className='font-[Antonio] font-normal text-[80px] mb-[20px] text-white'>{data.name}</p>
          <p className='w-[350px] font-[Spartan] font-normal text-[14px] mb-[20px] text-white '>{data.overview.content}</p>
          <div className='flex items-center gap-[8px] mb-[30px]'>
            <p className='font-[Spartan] font-normal text-[14px] text-white tracking-[1px]'>Source :  <a className='fonr-[700] underline' target='blank' href={data.overview.source}> Wikipedia</a></p>
            <img className='' src={wikipediaIMG} alt="" /> 
          </div>
        </div>
        <div className='flex  flex-col gap-[16px]'>
        <button className='flex gap-[20px] h-[48px] w-[350px] bg-[#419EBB;] items-center test'>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%] ml-[25px]'>01</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white ml-[10px]'>OVERVIEW</p>
        </button>

        <button className='flex gap-[20px] h-[48px] w-[350px] bg-[#070724;] items-center  test'>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%] ml-[25px]'>02</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white ml-[10px]'>Surface Geology</p>
        </button>

        <button className='flex gap-[20px] h-[48px] w-[350px] bg-[#070724;] items-center  test'>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%] ml-[25px]'>03</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white  ml-[10px]'>Surface Geology</p>
        </button>
        </div>
      </div>

    </div>
    
    <div className='flex justify-center gap-[50px]'>
      <div className='w-[255px] h-[128px] test flex flex-col justify-center'>
        <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px]'>ROTATION TIME</p>
        <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]'>{data.rotation}</p>
      </div>

      <div className='w-[255px] h-[128px] test flex flex-col justify-center'>
        <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px]'>REVOLUTION TIME</p>
        <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]'>{data.revolution}</p>
      </div>

      <div className='w-[255px] h-[128px] test flex flex-col justify-center'>
        <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px]'>RADIUS</p>
        <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]'>{data.radius}</p>
      </div>

      <div className='w-[255px] h-[128px] test flex flex-col justify-center'>
        <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px]'>AVERAGE TEMP.</p>
        <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]'>{data.temperature}</p>
      </div>

    </div>

    </>
  )
}

export default Planet