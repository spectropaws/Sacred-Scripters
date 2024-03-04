import Sidebar from "@/app/components/SideBar";
import ShopDashboard from "./Shop";

export default function Shop() {
    return (
        <div className="flex">
            <Sidebar />
            <ShopDashboard />
        </div>
    );
}