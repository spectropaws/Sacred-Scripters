import SideBar from "../components/SideBar";
import HomePage from "./NavSearch";

export default function Home() {
    return (
        <div className="flex">
            <SideBar />
            <HomePage />
        </div>
    );
}