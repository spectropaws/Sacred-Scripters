import SideBar from "../components/SideBar";
import GameForm from "./GameForm";

export default function MyGames() {
    return (
        <div className="flex">
            <SideBar />
            <GameForm />
        </div>
    );
}