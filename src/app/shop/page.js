import Sidebar from "@/app/components/SideBar";
import ShopDashboard from "./Shop";

export default function Shop() {

    // useeffect fetch user details
    // sidebar - name, tokens, profile photo link
    // ShopDashboard - fetch all games map

    return (
        <div className="flex">
            <Sidebar />
            <ShopDashboard />
        </div>
    );
}