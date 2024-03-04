import SkewButton from "../components/SkewButton";

function Cards(props) {
  return (
    <div className="rounded-2xl min-w-[240px] h-[250px] mr-7 bg-[#150050]">
      <img
        className="min-w-[240px] h-[125px] rounded-t-2xl"
        src={props.icon}
        alt="Game Icon"
      />
      <div>
        <h3 className="text-[#885fff] mt-1 text-xs px-3 mt-4">{props.genre}</h3>
        <h6 className="text-[#ffff] text-white text-lg font-semibold px-3">
          {props.gameName}
        </h6>
        <SkewButton className="flex justify-center items-center text-white w-24 h-8 ml-4 m-2">
          Buy
        </SkewButton>{" "}
      </div>
    </div>
  );
}

export default Cards;
