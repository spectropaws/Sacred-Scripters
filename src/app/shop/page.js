import React from "react";
import Tokens from "./Tokens.jsx";
import Cards from "./Card.jsx";
// import gameData from "./PopularGameData.js";
// import tokenObj from "./tokenObj.js";

function CreateTokens(tokenObj) {
  return (
    <Tokens
      key={tokenObj.id}
      gameName={tokenObj.gameName}
      tokens={tokenObj.tokens}
      price={tokenObj.price}
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

export default function Shop() {
    return (
        <>
      <div className="bg-[#110B32]">
        <div className="flex justify-between">
          <div className="flex w-[55%] my-8 mx-14">
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
          <button className="justify-self-end text-white my-8 mx-14">
            Shop
          </button>{" "}
          {/*Add Button Component*/}
        </div>

        <div className="flex justify-around">
          <div>
            <h2 className="text-[#ffff] m-3 ml-12 font-semibold">
              FEATURED GAME
            </h2>
            <div className="ml-10 block w-[60vw] h-[55vh] bg-[#150050] rounded-[15px]"></div>
          </div>

          <div>
            <h2 className="text-[#ffff] m-3 font-semibold">RECENTLY PLAYED</h2>
            <div className="w-[30vw] h-[45vh] rounded-[15px] ">
              <div className="w-auto h-[250px]">
                {tokenObj.map(CreateTokens)}
              </div>
            </div>
          </div>
        </div>

        <div className="ml-14 mr-8">
          <h3 className="text-white my-8 font-semibold">FAMOUS GAMES</h3>
          <div className="flex overflow-x-scroll no-scrollbar h-[300px]">
            {gameData.map(CreatePopular)}
          </div>
        </div>
      </div>
    </>
    );
}