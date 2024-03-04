import React from "react";
import RecentlyPlayed from "./RecentlyPlayed";
import Cards from "../shop/Cards";
import data from "./RecentGameData.js";
import gameData from "./PopularGameData.js";

function CreateRecent(data) {
  return (
    <RecentlyPlayed
      key={data.id}
      icon={data.icon}
      gameName={data.gameName}
      description={data.description}
    />
  );
}

function CreatePopular(gameData) {
  return (
    <Cards
      key={gameData.id}
      icon={gameData.icon}
      genre={gameData.genre}
      gameName={gameData.gameName}
      description={gameData.description}
    />
  );
}

function NavSearch() {
  return (
    <>
      <div className="bg-[#110B32]">
        <div className="flex space-between w-[75vw]">
          <div className="flex w-[35%] my-8 mx-14">
            <h3 className="p-2 px-8 bg-[#150050] text-[#ffffff] text-center rounded-[35px]">
              Hello, User
            </h3>
            <input
              className="p-2 px-8 mx-6 bg-[#150050] w-[65%] border-none text-[#ffffff] rounded-[35px]"
              type="text"
              placeholder="Search"
            />
          </div>
          {/*Add Button Component*/}
          <button className="text-white my-8 mx-14">
            Shop
          </button>{" "}
          {/*Add Button Component*/}
        </div>

        <div className="flex space-between">
          <div className="ml-10 block w-[40vw] h-[45vh] bg-[#150050] rounded-[15px]"></div>
          <div className="w-[30vw] h-[45vh] bg-[#150050] rounded-[15px] shadow-2xl shadow-black">
            <h2 className="text-[#ffff] m-4 font-semibold">RECENTLY PLAYED</h2>
            <div className="w-auto h-[250px] overflow-y-scroll no-scrollbar">
              {data.map(CreateRecent)}
            </div>
          </div>
        </div>
        <div className="ml-14 mr-8">
          <h3 className="text-white my-8 font-semibold">POPULAR GAMES</h3>
          <div className="flex overflow-x-scroll no-scrollbar h-[300px] w-[57%]">
            {gameData.map(CreatePopular)}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavSearch;

