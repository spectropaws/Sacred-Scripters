"use client";

import React from "react";
import styles from "./Footer.module.css";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "#/images/logo.png";

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
                <h3 className="text-[#885fff] text-center">GAMERLY</h3>
                <p className="text-white text-center">Some Random Text</p>
              </div>
              <div className="self-center w-80 m-10 text-center text-white">
                <h2 className="font-bold">Connect with us Now!</h2>
                <ul className="flex items-center justify-between">
                  <li>
                    <button>
                      <Image
                        src="/images/img1.jpg"
                        className="h-12 w-12 m-3"
                        alt="Instagram"
                        width={200}
                        height={200}
                      />
                    </button>
                  </li>
                  <li>
                    <button>
                      <Image
                        src="/images/img1.jpg"
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
                        src="/images/img1.jpg"
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
                        src="/images/img1.jpg"
                        className="h-12 w-12 m-3"
                        alt="Pinterest"
                        width={200}
                        height={200}
                      />
                    </button>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, quidem! Culpa cumque dolores similique minus.
                </p>
              </div>
              <div className={`${styles.sub_headings} w-44 h-44`}>
                <h4>SUB-HEADING</h4>
                <ul className={styles.links}>
                  <li className={styles.list}>
                    <Link href="#">FOO-LINK 1</Link>
                  </li>
                  <li className={styles.list}>
                    <Link href="#">FOO-LINK 2</Link>
                  </li>
                  <li className={styles.list}>
                    <Link href="#">FOO-LINK 3</Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </InView>
      </footer>

      <div className="bg-[#885fff] w-full h-[60px] flex justify-center relative">
        <Image
          className="h-[100px] w-[100px] text-center top-[-85%] absolute"
          src={logo}
          alt="game icon"
        />
      </div>
    </>
  );
}

export default Footer;
