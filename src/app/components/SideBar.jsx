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
      path: "/LayoutTest",
      icon: <HomeIcon size={24} strokeWidth={1} />,
    },
    {
      name: "MY GAMES",
      path: "/LayoutTest",
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
    <div className="flex w-[20vw]">
      {collapsed ? (
        <div className="border-2 w-[90px] flex flex-col bg-blue-900 transition-all duration-500">
          <div className="mx-auto sidebar-header">
            <Image
              onClick={fullView}
              height={500}
              width={500}
              src="/images/logo.png"
              className="my-3 h-12 w-12 cursor-pointer "
              alt="logo"
            />
            <Image
              height={500}
              width={500}
              src="/images/img1.jpg"
              className=" h-12 w-12"
              alt="logo"
            />
          </div>
          <div className="mx-auto my-5">
            {sideBarMenu.map((item, idx) => (
              <Link
                href={item.path}
                onClick={() => handleOnClick(idx)}
                key={idx}
                className={`${
                  activeIndex === idx ? "bg-purple-400" : "bg-blue-800"
                } my-6 mx-auto cursor-pointer w-10 flex justify-center h-10 py-2 text-black rounded-md`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="bord flex flex-col bg-blue-800 transition-all duration-500">
          <div className="flex flex-col">
            <div className="flex my-3 w-16">
              <Image
                height={500}
                width={500}
                src="/images/logo.png"
                className="my-auto"
                alt="logo"
              />
              <p className="my-auto text-lg">GAMERLY</p>
              <p
                className="my-auto text-lg ms-36 cursor-pointer"
                onClick={collapse}
              >
                <ChevronFirst />
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
              <p className=" mt-3 mx-auto text-lg">Username</p>
              <p className=" mt-1 mx-auto">546 TOKENS</p>
            </div>
          </div>
          <div className="mx-auto my-10 flex flex-col">
            {sideBarMenu.map((item, idx) => (
              <Link
                href={item.path}
                onClick={() => handleOnClick(idx)}
                key={idx}
                className={`${
                  activeIndex === idx && "bg-[blue]"
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
      )}
    </div>
  );
}
