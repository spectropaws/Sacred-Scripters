"use client";

import SkewButton from "@/app/components/SkewButton";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
    const navigate = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleFormChange(event) {
        setFormData((currData) => {
            currData[event.target.name] = event.target.value;
            return { ...currData };
        });
    }

    async function handleFormSubmit(event) {
        // event.preventDefault();
        try {
            console.log(formData);
            var response = await axios.post(
                "http://localhost:5000/user/login",
                formData
            );
            // console.log(response.data, "   ",);

            if (response.status === 200) {
                console.log(response);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("username", response.data.username);
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate.push("/home");
                }, 1000);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response);
            // console.log(error);
        }
        setFormData({
            email: "",
            password: "",
        });
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.6 } },
    };

    return (
        <div className="relative h-[600px] w-[1100px] rounded-[40px] mx-auto overflow-clip  bg-blue-950 ">

            <div className="h-[100px] -ms-20 rounded-full rotate-[60deg] w-[380px] bg-slate-400 absolute top-0 left-[230px]"></div>
            <div className="h-[280px] -ms-20 rounded-full rotate-[60deg] w-[390px] bg-slate-400 absolute top-0 left-0"></div>
            <div className="h-[100px] -ms-20 rounded-full rotate-[60deg] w-[300px] bg-slate-400 absolute top-[350px] -left-[70px]"></div>
            <div className="h-[280px] -ms-20 rounded-full rotate-[60deg] w-[500px] bg-slate-400 absolute -bottom-[120px] left-[220px]"></div>
            <div className="h-full flex justify-center absolute top-0 right-0 w-2/4">
                <div className=" w-full text-center my-auto">
                    <h1 className="text-center text-4xl font-[700] mb-5">
                        USER LOGIN
                    </h1>

                    <form action={handleFormSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                                className=" px-10 h-9 bg-black w-80 placeholder-slate-50 font-medium text-[18px] rounded-md my-2"
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="Password"
                                name="password"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                                className=" px-10 h-9 bg-black w-80 placeholder-slate-50 font-medium text-[18px] rounded-md my-2"
                            />
                        </div>
                        <div className="mt-6">
                            <SkewButton className={"h-10 pt-1.5 w-32 "}>
                                {" "}
                                LOGIN{" "}
                            </SkewButton>
                        </div>
                    </form>

                    <div className="divide-blue-600 mt-3">
                        <Link href="#">Forgot Password?</Link>
                        <hr className="mt-4 w-[400px] mx-auto" />
                    </div>
                    <div className="divide-blue-600 mt-3">
                        <p href="#">Don&apos;t have an account</p>
                        <SkewButton className={"h-10 pt-1.5 px-2 w-56 mt-2"}>
                            {" "}
                            CREATE ACCOUNT{" "}
                        </SkewButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
