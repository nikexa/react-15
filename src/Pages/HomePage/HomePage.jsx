import React from 'react'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start h-[100vh] text-white bg-center bg-cover mt-[-85px] max-xl:mt-[-120px] bg-repeat " style={{backgroundImage:"url('/public/rame.png')"}}>
      <h1 className="text-6xl font-bold mb-[30px] mt-[250px] max-md:text-[20px] max-md:tracking-[5px] ">Welcome on Planets Page</h1>
      <p className="text-lg mb-6 max-md:text-[15px]">Made With ♡ By Nikoloz Tskhvariashvili</p>
    </div>
  )
}

export default HomePage