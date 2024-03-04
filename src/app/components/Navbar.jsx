import Link from "next/link";
import { React } from "react";
import SkewButton from "./SkewButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" h-24 flex justify-between text-white font-bold">
      <div className="flex ml-10 content-center">
        <Image className="w-14 my-auto rounded-none h-14 content-center" height={500} width={500} src="/images/logo.png" alt="Gamerly" />
        <h3 className="m-auto text-2xl ms-5">
          <Link href="#">GAMERLY</Link>
        </h3>
      </div>
      <div className="my-auto">
        <ul className="flex justify-center">
          <li className="ml-11">
            <Link href="/">HOME</Link>
          </li>
          <li className="ml-11">
            <Link href="/feature">FEATURE</Link>
          </li>
          <li className="ml-11">
            <Link href="/games">GAMES</Link>
          </li>
          <li className="ml-11">
            <Link href="/comunity">COMMUNITY</Link>
          </li>
        </ul>
      </div>
      <SkewButton className={"w-44 mr-10 h-14 my-auto"}>PLAY NOW</SkewButton>
    </nav>
  );
};

export default Navbar;
