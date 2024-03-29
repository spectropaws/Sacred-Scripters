"use client";

import React from "react";
import styles from "./Footer.module.css";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "#/images/logo.png";
import logolast from "#/images/footer_last_no_bg.png";


function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.1 } },
  };

  return (
    <>
      <footer className="bg-[#150050]">
        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-full flex justify-center items-center py-[50px] px-[75px]"
            >
              <div className="m-[50px] items-center">
                <Image
                  src={logo}
                  alt="Brand Name"
                  className="w-44 h-44 m-7"
                  width={200}
                  height={200}
                />
                <h3 className="text-[#885fff] text-center font-semibold text-2xl">GAMERLY</h3>
                {/* <p className="text-white text-center">Play Now!!</p> */}
              </div>
              <div className="self-center w-80 m-10 text-center text-white">
                <h2 className="font-bold text-xl">Connect with us Now!</h2>
                <ul className="flex items-center justify-between">
                  <li>
                    <button>
                      <Image
                        src="/images/insta.png"
                        className="h-12 w-12 m-3 rounded-full"
                        alt="Instagram"
                        width={200}
                        height={200}
                      />
                    </button>
                  </li>
                  <li>
                    <button>
                      <Image
                        src="/images/discord.png"
                        className="h-12 w-12 m-3"
                        alt="X"
                        width={200}
                        height={200}
                      />
                    </button>
                  </li>
                  <li>
                    <button>
                      {" "}
                      <Image
                        src="/images/x.png"
                        className="h-12 w-12 m-3"
                        alt="Youtube"
                        width={200}
                        height={200}
                      />
                    </button>
                  </li>
                  <li>
                    <button>
                      {" "}
                      <Image
                        src="/images/youtube.png"
                        className="h-12 w-12 m-3"
                        alt="Pinterest"
                        width={200}
                        height={200}
                      />
                    </button>
                  </li>
                </ul>
                <p>
                  Connect with us via Email for inquiries and collaborations, Join our Discord Community for Discussions and Events, and Follow us on Social media for Updates and Highlights !!!
                </p>
              </div>
              <div className={`${styles.sub_headings} w-44 h-44`}>
                <h4 className="font-semibold text-xl">CONTACT US</h4>
                <ul className={styles.links}>
                  <li className={styles.list}>
                    <Link href="#">gamerly@support.com</Link>
                  </li>
                  <li className={styles.list}>
                    <Link href="#">+91 9988952748</Link>
                  </li>
                  {/* <li className={styles.list}>
                    <Link href="#">FOO-LINK 3</Link> 
                  </li> */}
                </ul>
              </div>
            </motion.div>
          )}
        </InView>
      </footer>

      <div className="bg-[#885fff] w-full h-[60px] flex justify-center relative">
        <Image
          className="h-[100px] w-[100px] text-center top-[-85%] absolute"
          src={logolast}
          alt="game icon"
        />
      </div>
    </>
  );
}

export default Footer;
