function Cards(props) {
  return (
    <div className="rounded-2xl min-w-[240px] h-[280px] mr-7 bg-[#150050]">
      <img
        className="min-w-[240px] h-[125px] rounded-t-2xl"
        src={props.icon}
        alt="Game Icon"
      />
      <h3 className="text-[#885fff] mt-1 text-xs px-3">{props.genre}</h3>
      <h6 className="text-[#ffff] text-white text-lg font-semibold px-3">
        {props.gameName}
      </h6>
      <p className="text-[#ffff] px-3 text-sm">{props.description}</p>
      <button className="text-[#885fff] text-xs font-semibold px-3 py-2">
        PLAY NOW
      </button>
    </div>
  );
}

export default Cards;
