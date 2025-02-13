import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import wikipediaIMG from '../../IMAGES/wikipedia.png'

const Planet = () => {

    const location=useLocation()
    const data=location.state

    const [FirstBTN,setFirstBTN]=useState(true)
    const [SecondBTN,setSEcondBTN]=useState(false)
    const [ThirdBTN,setThirdBTN]=useState(false)

    const FirstBTNHandle = (e) =>{
      setFirstBTN(true)
      setSEcondBTN(false)
      setThirdBTN(false)
    }

    const SecondBTNHandle = (e) =>{
      setSEcondBTN(true)
      setFirstBTN(false)
      setThirdBTN(false)
    }

    const ThirdBTNHandle = (e) =>{
      setSEcondBTN(false)
      setFirstBTN(false)
      setThirdBTN(true)
    }


  return (
    <>
    <div className='flex h-[70vh] '>

      <div className={`w-[60%] flex justify-center items-center ${ThirdBTN && "relative"}`}>
        {FirstBTN && <img src={data.images.planet} alt="" />}
        {SecondBTN && <img src={data.images.internal} alt="" />}
        {ThirdBTN && <><img src={data.images.planet} alt="" /> <img className='w-[163px] h-[199px] absolute bottom-[60px]' src={data.images.geology} alt="" /></>}
      </div>

      <div className='w-[40%] mt-[100px]'>
        <div>
          <p className='font-[Antonio] font-normal text-[80px] mb-[20px] text-white'>{data.name}</p>
          <p className='w-[350px] font-[Spartan] font-normal text-[14px] mb-[20px] ragaca'>{FirstBTN ? data.overview.content : SecondBTN ? data.structure.content : ThirdBTN ? data.geology.content : "#"}</p>
          <div className='flex items-center gap-[8px] mb-[30px]'>
          <p className="font-[Spartan] font-normal text-[14px] tracking-[1px] rame">Source: <a className="font-[700] underline ara" target="_blank" href={FirstBTN ? data.overview.source : SecondBTN ? data.structure.source : ThirdBTN ? data.geology.source : "#"}>Wikipedia</a></p>
          <img className='' src={wikipediaIMG} alt="" /> 
          </div>
        </div>
        <div className='flex  flex-col gap-[16px]'>
        <button onClick={(e)=> FirstBTNHandle(e)} className={`flex gap-[20px] h-[48px] w-[350px] cursor-pointer ${!FirstBTN ? "bg-[#070724] ata" : "bg-[#419EBB]"} items-center test`}>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%] ml-[25px]'>01</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white ml-[10px]'>OVERVIEW</p>
        </button>

        <button onClick={(e)=> SecondBTNHandle(e)} className={`flex gap-[20px] h-[48px] w-[350px] cursor-pointer  ${!SecondBTN ? "bg-[#070724] ata" : "bg-[#419EBB]"} items-center  test`}>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%] ml-[25px]'>02</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white ml-[10px]'>Internal Structure</p>
        </button>

        <button onClick={(e)=> ThirdBTNHandle(e)} className={`flex gap-[20px] h-[48px] w-[350px] cursor-pointer  ${!ThirdBTN ? "bg-[#070724] ata" : "bg-[#419EBB]"} items-center  test`}>
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