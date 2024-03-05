"use client"

import Sidebar from "@/app/components/SideBar";
import ShopDashboard from "./Shop";
import { useEffect } from "react";
import axios from "axios";

export default function Shop() {

    // useeffect fetch user details
    const username = localStorage.getItem("username");
    console.log(username);
    const token = localStorage.getItem("token");
    useEffect(async () => {
        const response = await axios.get(`http://localhost:5000/user/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
    }, []);



    // sidebar - name, tokens, profile photo link
    // ShopDashboard - fetch all games map

    return (
        <div className="flex">
            <Sidebar />
            <ShopDashboard />
        </div>
    );
}