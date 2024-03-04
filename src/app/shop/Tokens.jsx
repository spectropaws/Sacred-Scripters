import SkewButton from "../components/SkewButton";

function Tokens(props) {
  return (
    <div className="p-4 w-[90%] h-auto bg-[#150050] rounded-2xl mb-3 shadow-lg shadow-black">
      <h5 className="text-[#CFAA27] font-semibold">{props.gameName}</h5>
      <h3 className="font-semibold text-white">{props.tokens} Tokens</h3>
      <div className="flex justify-between">
        <h5 className="text-[#CFAA27] font-semibold my-2">
          ₹ <span className="text-2xl">{props.price}</span>
        </h5>
        <SkewButton className="flex justify-center items-center text-white w-28 h-10 mr-4">
          Buy
        </SkewButton>{" "}
      </div>
    </div>
  );
}
export default Tokens;
