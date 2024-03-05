import React, { useEffect, useState } from "react";
import Tokens from "./Tokens.jsx";
import Cards from "./Cards.jsx";
import SkewButton from "../components/SkewButton.jsx";
import axios from "axios";
import tokenObj from "./tokenObj.js";

export default function Shop() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axios.get('http://localhost:5000/games'); // Adjust the URL as needed
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }

    fetchGames();
  }, []);

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

  function CreatePopular(game) {
    return (
      <Cards
        key={game.id}
        icon={game.icon}
        genre={game.genre}
        gameName={game.gameName}
      />
    );
  }

  return (
    <div className="bg-[#110B32] w-[76vw]">
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
        <SkewButton className="flex justify-center items-center justify-self-end text-white my-8 mx-14 w-32 h-10">
          Shop
        </SkewButton>{" "}
        {/*Add Button Component*/}
      </div>

      <div className="flex justify-around">
        <div className="w-2/3 mr-16">
          <h2 className="text-[#ffff] m-3 ml-12 font-semibold">
            FEATURED GAME
          </h2>
          <div className="ml-10 block h-[55vh] bg-[#150050] rounded-[15px]"></div>
        </div>

        <div className="w-1/3">
          <h2 className="text-[#ffff] m-3 font-semibold">RECENTLY PLAYED</h2>
          <div className="h-[45vh] rounded-[15px] ">
            <div className="w-auto h-[250px]">
              {tokenObj.map(CreateTokens)}
              {/* Map over tokens here if needed */}
            </div>
          </div>
        </div>
      </div>

      <div className="ml-14 mr-8">
        <h3 className="text-white my-8 font-semibold">FAMOUS GAMES</h3>
        <div className="flex overflow-x-scroll no-scrollbar h-[300px]">
          {games.map(CreatePopular)}
        </div>
      </div>
    </div>
  );
}
