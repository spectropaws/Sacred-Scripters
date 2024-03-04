"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronFirst,
  HomeIcon,
  Heart,
  Airplay,
  ShoppingBag,
} from "lucide-react";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sideBarMenu = [
    {
      name: "HOME",
      path: "/home",
      icon: <HomeIcon size={24} strokeWidth={1} />,
    },
    {
      name: "MY GAMES",
      path: "/library",
      icon: <Heart size={24} strokeWidth={1} />,
    },
    {
      name: "STREAM",
      path: "/stream",
      icon: <Airplay size={24} strokeWidth={1} />,
    },
    {
      name: "SHOP",
      path: "/shop",
      icon: <ShoppingBag size={24} strokeWidth={1} />,
    },
  ];

  const handleOnClick = (idx) => {
    console.log(activeIndex);
    setActiveIndex(idx);
  };

  const collapse = () => {
    setCollapsed(true);
  };

  const fullView = () => {
    setCollapsed(false);
  };

  return (
    <div className="flex w-[25vw]">
      <div className="bord flex items-center flex-col bg-[#150050] transition-all duration-500">
        <div className="flex flex-col">
          <div className="flex my-3 w-16">
            <Image
              height={400}
              width={400}
              src="/images/logo.png"
              className="my-auto h-10 w-10 m-2"
              alt="logo"
            />
            <p className="my-auto text-lg text-[#885fff] font-semibold">
              GAMERLY
            </p>
            <p
              className="my-auto text-lg ms-36 cursor-pointer"
              onClick={collapse}
            >
              {/* <ChevronFirst /> */}
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              height={500}
              width={500}
              src="/images/img1.jpg"
              className=" h-36 w-36 rounded-3xl mx-auto"
              alt="logo"
            />
            <p className=" mt-3 mx-auto text-lg text-[#885fff]">Username</p>
            <p className=" mt-1 mx-auto text-[#CFAA27]">546 TOKENS</p>
          </div>
        </div>
        <div className="mx-auto my-10 flex flex-col text-white">
          {sideBarMenu.map((item, idx) => (
            <Link
              href={item.path}
              onClick={() => handleOnClick(idx)}
              key={idx}
              className={`${
                activeIndex === idx && "bg-[#20105C]"
              } cursor-pointer h-14 pt-3.5 text-lg w-[330px] text-center nav-item`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/logout"
            onClick={() => handleLogout()}
            className="cursor-pointer h-14 pt-3.5 text-lg w-[330px] text-center nav-item"
          >
            LOG OUT
          </Link>
        </div>
      </div>
    </div>
  );
}
