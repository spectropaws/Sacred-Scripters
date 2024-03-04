import React from "react";

function RecentlyPlayed(props) {
  return (
    <div className="flex m-1 my-2">
      <img
        className="h-10 w-10 mx-2 my-2 rounded-lg"
        src={props.icon}
        alt="Game Icon"
      />
      <div className="">
        <h3 className="text-[#885fff]">{props.gameName}</h3>
        <p className="text-[#ffff]">{props.description}</p>
      </div>
    </div>
  );
}

export default RecentlyPlayed;
