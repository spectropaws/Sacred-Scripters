import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function GameForm() {
  return (
    <div className="p-12 w-full bg-gradient-to-bl from-[#150050] via-[#120B34] via-33% via-[#110E2B] via-66% to-[#10131E] to-100%">
      <h1 className="text-4xl font-semibold text-primary">UPLOAD GAME</h1>
      <div className="flex w-full justify-between py-8">
        <form className=" basis-2/3 flex flex-col h-full">
          <div className="grid w-full items-center gap-1.5 my-10">
            <Label htmlFor="gametitle" className="text-2xl text-white">
              GAME TITLE
            </Label>
            <Input
              type="text"
              id="gametitle"
              placeholder="Game Title"
              className="w-full text-2xl text-white p-8 mt-3 hover:border-none border-none rounded-2xl shadow-[0_3px_10px_0_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="grid w-full items-center gap-1.5 my-5">
            <Label htmlFor="gamedescription" className="text-2xl text-white">
              GAME DESCRIPTION
            </Label>
            <Textarea
              type="text"
              id="gamedescription"
              placeholder="Description"
              className="w-full text-2xl text-white h-[150px] mt-3 hover:border-none border-none rounded-2xl shadow-[0_3px_10px_0_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="flex w-full">
            <div className="grid w-1/2 items-center gap-1.5 my-10 mr-8">
              <Label htmlFor="gamecreator" className="text-2xl text-white">
                CREATOR
              </Label>
              <Input
                type="text"
                id="gamecreator"
                placeholder="Creator"
                className="w-full text-2xl text-white p-8 mt-3 hover:border-none border-none rounded-2xl shadow-[0_3px_10px_0_rgba(0,0,0,0.5)]"
              />
            </div>

            <div className="grid w-1/2 items-center gap-1.5 my-10 ml-8">
              <Label htmlFor="gameprice" className="text-2xl text-white">
                PRICE
              </Label>
              <Input
                type="number"
                id="gameprice"
                placeholder="Tokens"
                className="w-full text-2xl text-white p-8 mt-3 hover:border-none border-none rounded-2xl shadow-[0_3px_10px_0_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          <div className="grid w-1/2 items-center gap-1.5">
            <Label htmlFor="gamefile" className="text-2xl text-white">
              UPLOAD GAME FILE
            </Label>
            <Input
              id="gamefile"
              type="file"
              className="w-full text-2xl file:text-white file:px-3 file:py-3.5 file:font-semibold cursor-pointer file:text-2xl file:mr-8 file:rounded-lg file:bg-gradient-to-r file:from-[#5215FCff] file:via-[#8357FDcc] file:to-[#FFFFFF00] pb-16 text-white hover:border-none border-none bg-transparent"
            />
          </div>
        </form>
        <div className="block w-1/3 h-full bg-black"></div>
      </div>
      <h1 className="text-5xl">LOL</h1>
    </div>
  );
}
