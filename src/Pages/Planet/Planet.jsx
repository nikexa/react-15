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
    <div className='w-full h-[50px] justify-center gap-[30px] border-b border-b-[#FFFFFF] Htest hidden max-md:flex'>
      <button className={`text-white ${FirstBTN ? "opacity" : "opacity-[20%]" } ${FirstBTN && "border-b-[#419EBB] && border-b-[4px]"} text-[9px] font-[700] `} onClick={(e)=> FirstBTNHandle(e)}>OVERVIEW</button>
      <button className={`text-white ${SecondBTN ? "opacity" : "opacity-[20%]" } ${SecondBTN && "border-b-[#419EBB] && border-b-[4px]"} text-[9px] font-[700]`} onClick={(e)=> SecondBTNHandle(e)}>Structure</button>
      <button className={`text-white ${ThirdBTN ? "opacity" : "opacity-[20%]" } ${ThirdBTN && "border-b-[#419EBB] && border-b-[4px]"} text-[9px] font-[700]`} onClick={(e)=> ThirdBTNHandle(e)}>Surface </button>
    </div>
    <div className='flex h-[80vh] max-xl:flex-col max-xl:h-[135vh] max-xl:items-center max-md:h-[68vh]'>

      <div className={`w-[60%] flex justify-center items-center ${ThirdBTN && "relative"} max-xl:pt-[100px]`}>
        {FirstBTN && <img className=' max-md:w-[224px] max-md:h-[224px]' src={data.images.planet} alt="" />}
        {SecondBTN && <img className=' max-md:w-[224px] max-md:h-[224px]' src={data.images.internal} alt="" />}
        {ThirdBTN && <><img className=' max-md:w-[224px] max-md:h-[224px]' src={data.images.planet} alt="" /> <img className='w-[163px] h-[199px] absolute bottom-[60px] max-xl:bottom-[-50px] max-md:w-[100px] max-md:h-[120px]' src={data.images.geology} alt="" /></>}
      </div>

      <div className='w-[40%] mt-[50px] max-xl:flex max-xl:items-center max-xl:justify-center max-xl:gap-[100px] max-md:flex-col'>
        <div className='max-md:flex max-md:flex-col max-md:items-center max-md:w-[327px]'>
          <p className='font-[Antonio] font-normal text-[80px] mb-[20px] text-white max-xl:text-[48px]'>{data.name}</p>
          <p className='w-[350px] font-[Spartan] font-normal text-[14px] mb-[20px] ragaca max-xl:text-[11px] max-xl:w-[339px] max-md:w-[327px] max-md:text-center'>{FirstBTN ? data.overview.content : SecondBTN ? data.structure.content : ThirdBTN ? data.geology.content : "#"}</p>
          <div className='flex items-center gap-[8px] mb-[30px]'>
          <p className="font-[Spartan] font-normal text-[14px] tracking-[1px] rame max-xl:text-[12px]">Source: <a className="font-[700] underline ara" target="_blank" href={FirstBTN ? data.overview.source : SecondBTN ? data.structure.source : ThirdBTN ? data.geology.source : "#"}>Wikipedia</a></p>
          <img className='' src={wikipediaIMG} alt="" /> 
          </div>
        </div>
        <div className='flex  flex-col gap-[16px] max-md:hidden'>
        <button onClick={(e)=> FirstBTNHandle(e)} className={`flex gap-[20px] h-[48px] w-[350px] cursor-pointer ${!FirstBTN ? "bg-[#070724] ata" : "bg-[#419EBB]"} items-center test max-xl:w-[281px]`}>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%] ml-[25px] max-xl:text-[9px]'>01</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white ml-[10px] max-xl:text-[9px]'>OVERVIEW</p>
        </button>

        <button onClick={(e)=> SecondBTNHandle(e)} className={`flex gap-[20px] h-[48px] w-[350px] cursor-pointer  ${!SecondBTN ? "bg-[#070724] ata" : "bg-[#419EBB]"} items-center  test max-xl:w-[281px]`}>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%] ml-[25px] max-xl:text-[9px]'>02</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white ml-[10px] max-xl:text-[9px]'>Internal Structure</p>
        </button>

        <button onClick={(e)=> ThirdBTNHandle(e)} className={`flex gap-[20px] h-[48px] w-[350px] cursor-pointer  ${!ThirdBTN ? "bg-[#070724] ata" : "bg-[#419EBB]"} items-center  test max-xl:w-[281px]`}>
          <p className='font-[Spartan] font-normal text-[12px] text-white opacity-[50%] ml-[25px] max-xl:text-[9px]'>03</p>
          <p className='font-[Spartan] font-normal text-[12px] text-white  ml-[10px] max-xl:text-[9px]'>Surface Geology</p>
        </button>
        </div>
      </div>

      <div className='hidden max-xl:block mt-[100px] max-md:hidden'>
        <div className='flex justify-center gap-[50px] max-xl:gap-[30px] max-md:flex-row max-md:items-center max-md:mt-[100px]'>
          <div className='w-[255px] h-[128px] test flex flex-col justify-center max-xl:w-[164px] max-xl:h-[88px] max-md:w-[327px] max-md:h-[48px] max-md:flex-row max-md:justify-between max-md:items-center'>
            <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px] max-md:text-[8px]'>ROTATION TIME</p>
            <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]  max-xl:text-[24px] max-md:text-[20px] max-md:pr-[20px]'>{data.rotation}</p>
          </div>

          <div className='w-[255px] h-[128px] test flex flex-col justify-center max-xl:w-[164px] max-xl:h-[88px] max-md:w-[327px] max-md:h-[48px] max-md:flex-row max-md:justify-between max-md:items-center'>
            <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px] max-md:text-[8px]'>REVOLUTION TIME</p>
            <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]  max-xl:text-[24px] max-md:text-[20px] max-md:pr-[20px]'>{data.revolution}</p>
          </div>

          <div className='w-[255px] h-[128px] test flex flex-col justify-center max-xl:w-[164px] max-xl:h-[88px] max-md:w-[327px] max-md:h-[48px] max-md:flex-row max-md:justify-between max-md:items-center'>
            <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px] max-md:text-[8px]'>RADIUS</p>
            <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]  max-xl:text-[24px] max-md:text-[20px] max-md:pr-[20px]'>{data.radius}</p>
          </div>

          <div className='w-[255px] h-[128px] test flex flex-col justify-center max-xl:w-[164px] max-xl:h-[88px] max-md:w-[327px] max-md:h-[48px] max-md:flex-row max-md:justify-between max-md:items-center'>
            <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px] max-md:text-[8px]'>AVERAGE TEMP.</p>
            <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]  max-xl:text-[24px] max-md:text-[20px] max-md:pr-[20px]'>{data.temperature}</p>
          </div>

        </div>
      </div>
    
    </div>

    <div className='flex pb-[100px] justify-center gap-[50px] max-xl:gap-[30px] max-md:flex-col max-md:items-center max-md:mt-[30px] max-xl:hidden max-md:flex'>
        <div className='w-[255px] h-[128px] test flex flex-col justify-center max-xl:w-[164px] max-xl:h-[88px] max-md:w-[327px] max-md:h-[48px] max-md:flex-row max-md:justify-between max-md:items-center'>
          <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px] max-md:text-[8px]'>ROTATION TIME</p>
          <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]  max-xl:text-[24px] max-md:text-[20px] max-md:pr-[20px]'>{data.rotation}</p>
        </div>

        <div className='w-[255px] h-[128px] test flex flex-col justify-center max-xl:w-[164px] max-xl:h-[88px] max-md:w-[327px] max-md:h-[48px] max-md:flex-row max-md:justify-between max-md:items-center'>
          <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px] max-md:text-[8px]'>REVOLUTION TIME</p>
          <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]  max-xl:text-[24px] max-md:text-[20px] max-md:pr-[20px]'>{data.revolution}</p>
        </div>

        <div className='w-[255px] h-[128px] test flex flex-col justify-center max-xl:w-[164px] max-xl:h-[88px] max-md:w-[327px] max-md:h-[48px] max-md:flex-row max-md:justify-between max-md:items-center'>
          <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px] max-md:text-[8px]'>RADIUS</p>
          <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]  max-xl:text-[24px] max-md:text-[20px] max-md:pr-[20px]'>{data.radius}</p>
        </div>

        <div className='w-[255px] h-[128px] test flex flex-col justify-center max-xl:w-[164px] max-xl:h-[88px] max-md:w-[327px] max-md:h-[48px] max-md:flex-row max-md:justify-between max-md:items-center'>
          <p className='font-[Spartan] font-normal text-[11px] text-white opacity-[50%] ml-[20px] max-md:text-[8px]'>AVERAGE TEMP.</p>
          <p className='font-[Antonio] font-normal text-[40px] text-white  ml-[20px]  max-xl:text-[24px] max-md:text-[20px] max-md:pr-[20px]'>{data.temperature}</p>
        </div>

      </div>
    

    </>
  )
}

export default Planet