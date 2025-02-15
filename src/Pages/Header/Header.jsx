import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../../data.json";
import resp from "../../../public/Group.png";
import next from '../../../public/Path 3.png'

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-between items-center h-[85px] Htest max-xl:flex-col max-xl:pt-[20px] max-xl:gap-[20px] max-xl:h-[120px] max-xl:justify-normal max-md:flex-row max-md:justify-between max-md:pt-[0px]">
      <p className="font-antonio font-normal text-[28px] text-white ml-[50px]">
        <Link to={"/"}>THE PLANETS</Link>
      </p>

      <ul className="flex font-spartan font-bold text-[11px] text-[#FFFFFF;] gap-[35px] mr-[40px] max-xl:mr-[0px] max-md:hidden">
        {data.map((planet) => {
          return (
            <li key={planet.name}>
              <button
                className="cursor-pointer font-spartan"
                onClick={() => {
                  navigate(`/${planet.name}`, { state: planet });
                }}
              >
                {planet.name}
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setShow(!show)} className=" hidden max-md:block max-md:pr-[50px]">
        <img className=" relative" src={resp} alt="" />
        {show && (
          <div className=" absolute w-[330px] h-[500px] left-[0px] top-[120px] bg-[#070724] z-1">
            {data.map((planet) => {
              return (
                <div className="flex items-center border-b border-b-[#FFFFFF]">
                  <div className=" h-[60px] w-[327px] flex items-center gap-[20px]">
                    <img className="w-[20px] h-[20px]" src={planet.images.planet} alt="" />
                  <p key={planet.name} className="text-white text-[15px] font-[700] w-full h-full  flex items-center">
                    <button
                      className="cursor-pointer font-spartan "
                      onClick={() => {
                        navigate(`/${planet.name}`, { state: planet });
                      }}
                    >
                      {planet.name}
                    </button>
                  </p>
                  </div>
                  <img className="pr-[20px]" src={next} alt="" />
                </div>
              );
            })}
          </div>
        )}
      </button>
    </div>
  );
};

export default Header;
