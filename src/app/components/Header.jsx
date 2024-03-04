"use client";

import React from "react";
import "./Header.css";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [
  "/Assets/scroll1.jpg",
  "/Assets/scroll2.jpg",
  "/Assets/scroll3.jpg",
  "/Assets/scroll4.jpg",
  "/Assets/scroll5.jpg",
  "/Assets/scroll6.jpg",
  "/Assets/scroll1.jpg",
  "/Assets/scroll2.jpg",
  "/Assets/scroll3.jpg",
  "/Assets/scroll4.jpg",
  "/Assets/scroll5.jpg",
  "/Assets/scroll6.jpg",
  "/Assets/scroll1.jpg",
  "/Assets/scroll2.jpg",
  "/Assets/scroll3.jpg",
];
const row2 = [
  "/Assets/scroll7.jpg",
  "/Assets/scroll8.jpg",
  "/Assets/scroll9.jpg",
  "/Assets/scroll10.jpg",
  "/Assets/scroll11.jpg",
  "/Assets/scroll12.jpg",
  "/Assets/scroll13.jpg",
  "/Assets/scroll7.jpg",
  "/Assets/scroll8.jpg",
  "/Assets/scroll9.jpg",
  "/Assets/scroll10.jpg",
  "/Assets/scroll11.jpg",
  "/Assets/scroll12.jpg",
  "/Assets/scroll13.jpg",
  "/Assets/scroll7.jpg",
];
const row3 = [
  "/Assets/scroll14.jpg",
  "/Assets/scroll15.jpg",
  "/Assets/scroll16.jpg",
  "/Assets/scroll17.jpg",
  "/Assets/scroll18.jpg",
  "/Assets/scroll19.jpg",
  "/Assets/scroll14.jpg",
  "/Assets/scroll15.jpg",
  "/Assets/scroll16.jpg",
  "/Assets/scroll17.jpg",
  "/Assets/scroll18.jpg",
  "/Assets/scroll19.jpg",
  "/Assets/scroll14.jpg",
  "/Assets/scroll15.jpg",
  "/Assets/scroll16.jpg",
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
                <p className=" text-5xl font-semibold leading-tight">
                  GATHER YOUR <span className=" text-purple-800">GEARS</span>{" "}
                  AND BUCKLE YOUR SEAT TO GET{" "}
                  <span className=" text-purple-800">
                    STORMING EXPERIENCE!!
                  </span>
                </p>
                <p className="px-[20%] mt-3 text-center leading-5 font-medium text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas at vel eaque temporibus dicta perferendis
                  repellendus, corrupti vero maxime quam minima laudantium
                  voluptatum totam ex optio porro libero suscipit
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
