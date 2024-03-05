"use client";

import React from "react";
import "./Header.css";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [
  "/images/landing/poster-1.jpg",
  "/images/landing/poster-2.jpg",
  "/images/landing/poster-3.jpg",
  "/images/landing/poster-4.jpg",
  "/images/landing/poster-5.jpg",
  "/images/landing/poster-6.jpg",
  "/images/landing/poster-7.jpg",
  "/images/landing/poster-8.jpg",
  "/images/landing/poster-9.jpg",
  "/images/landing/poster-10.jpg",
  "/images/landing/poster-1.jpg",
  "/images/landing/poster-2.jpg",
  "/images/landing/poster-3.jpg",
  "/images/landing/poster-4.jpg",
  "/images/landing/poster-5.jpg",
];
const row2 = [
  "/images/landing/poster-11.jpg",
  "/images/landing/poster-12.jpg",
  "/images/landing/poster-13.jpg",
  "/images/landing/poster-14.jpg",
  "/images/landing/poster-15.jpg",
  "/images/landing/poster-16.jpg",
  "/images/landing/poster-17.jpg",
  "/images/landing/poster-18.jpg",
  "/images/landing/poster-19.jpg",
  "/images/landing/poster-20.jpg",
  "/images/landing/poster-11.jpg",
  "/images/landing/poster-12.jpg",
  "/images/landing/poster-13.jpg",
  "/images/landing/poster-14.jpg",
  "/images/landing/poster-15.jpg",
];
const row3 = [
  "/images/landing/poster-21.jpg",
  "/images/landing/poster-22.jpg",
  "/images/landing/poster-23.jpg",
  "/images/landing/poster-24.jpg",
  "/images/landing/poster-25.jpg",
  "/images/landing/poster-26.jpg",
  "/images/landing/poster-27.jpg",
  "/images/landing/poster-28.jpg",
  "/images/landing/poster-29.jpg",
  "/images/landing/poster-30.jpg",
  "/images/landing/poster-21.jpg",
  "/images/landing/poster-22.jpg",
  "/images/landing/poster-23.jpg",
  "/images/landing/poster-24.jpg",
  "/images/landing/poster-25.jpg",
];

const Slider = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.1 } },
  };

  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="slider opacity-[40%]">
              <div className="slide-track">
                {row1.map((img, idx) => {
                  return (
                    <div className="slide" key={idx}>
                      <Image
                        width={500}
                        height={500}
                        className="object-cover h-44 w-80"
                        src={img}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="slide-track-reverse">
                {row2.map((img, idx) => {
                  return (
                    <div className="slide" key={idx}>
                      <Image
                        width={500}
                        height={500}
                        className="object-cover h-44 w-80"
                        src={img}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="slide-track">
                {row3.map((img, idx) => {
                  return (
                    <div className="slide" key={idx}>
                      <Image
                        width={500}
                        height={500}
                        className="object-cover h-44 w-80"
                        src={img}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col h-[60%] justify-center align-middle absolute w-[80%] top-[20%] left-[10%]">
              <div className=" flex flex-col my-auto mx-auto p-10 text-center">
                <p className=" text-white text-5xl font-semibold leading-tight">
                  GATHER YOUR <span className=" text-purple-800">GEARS</span>{" "}
                  AND BUCKLE YOUR SEAT TO GET{" "}
                  <span className=" text-purple-800">
                    STORMING EXPERIENCE!!
                  </span>
                </p>
                <p className=" text-white px-[20%] mt-3 text-center leading-5 font-medium text-lg">
                  Dive into a universe where gaming, live streaming, and game
                  creation collide. Our platform is your gateway to
                  adrenaline-pumping battles, epic quests, and heart-pounding
                  live streams. Whether you’re a player, a creator, or both,
                  unleash your inner hero and conquer new realms.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </>
  );
};

export default Slider;
