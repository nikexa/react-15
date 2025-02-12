import React from "react";
import { Link, useNavigate } from "react-router-dom";
import data from '../../data.json'

const Header = () => {

    const navigate=useNavigate()

  return (
    <div className="flex justify-between items-center h-[85px] border-b border-white">
      <p className="font-[Antonio] font-normal text-[28px] text-white ml-[50px]">
        <Link to={"/"}>THE PLANETS</Link>
      </p>

      <ul className="flex font-[Spartan] font-bold text-[11px] text-[#FFFFFF;] gap-[35px] mr-40">
        {data.map((planet)=>{
            return(
                <li key={planet.name}>
                    <button className="cursor-pointer" onClick={()=>{
                        navigate(`/${planet.name}` , {state:planet})
                    }}>{planet.name}</button>
                </li>
            )
        })}
      </ul>
    </div>
  );
};

export default Header;
