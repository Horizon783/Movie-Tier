import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import cat from "../assets/images/cat.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Watchlist",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiTv,
    },
    {
      name: "Series",
      icon: HiPlayCircle,
    },
  ];
  // doubt padding
  return (
    <div className=' h-[50px] w-screen flex items-center  gap-2 justify-between pr-[10px]'>
      <div className='flex  gap-2 items-end '>
        <div>
          <img
            src={logo}
            alt='logo.img'
            className='w-[100px] cursor-pointer '
          />
        </div>
        <div className=' hidden md:flex gap-[15px] mt-[10px]'>
          {menu.map((item) => {
            return <HeaderList name={item.name} Icon={item.icon} />;
          })}
        </div>
        <div className=' flex gap-[15px] mt-[10px] md:hidden'>
          {menu.map((item, ind) => {
            return ind < 3 && <HeaderList name={item.name} Icon={item.icon} />;
          })}
          <div
            className='cursor-pointer md:hidden'
            onClick={() => setToggle(!toggle)}
          >
            <HeaderList name={""} Icon={HiDotsVertical} />

            {toggle ? (
              <div className='absolute mt-3 bg-[#121212] border-[1px] p-4 border-gray-700 px-5 py-4'>
                {menu.map((item, ind) => {
                  return (
                    ind >= 3 && <HeaderList name={item.name} Icon={item.icon} />
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className='p-2.5'>
        <img src={cat} alt='logo.img' className='w-[38px] cursor-pointer ' />
      </div>
    </div>
  );
}

export default Header;
