"use client";
import React, { useState } from "react";
import SkewButton from "@/app/components/SkewButton";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CreateAccount() {
  const navigate = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleFormChange(event) {
    setFormData((currData) => {
      currData[event.target.name] = event.target.value;
      return { ...currData };
    });
  }

  async function handleFormSubmit(event) {
    // event.preventDefault();
    console.log(formData);
    try {
      var response = await axios.post(
        "http://localhost:8080/user/signUp",
        formData
      );
      console.log("response");
      if (response.status === 200) {
        await toast.success(response.data.message);
        setTimeout(() => {
          navigate.push("/LayoutTest");
        }, 1500);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      // alert(error);
    }
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <>
      <Toaster />
      <div className="relative h-[600px] w-[1100px] rounded-[40px] mx-auto mt-40 overflow-clip  bg-blue-950 ">
        <div className="h-[100px] -ms-20 rounded-full -rotate-[60deg] w-[380px] bg-slate-400 absolute top-0 right-[170px]"></div>
        <div className="h-[280px] -ms-20 rounded-full -rotate-[60deg] w-[390px] bg-slate-400 absolute top-0 -right-16"></div>
        <div className="h-[100px] -ms-20 rounded-full -rotate-[60deg] w-[330px] bg-slate-400 absolute top-[330px] -right-[170px]"></div>
        <div className="h-[280px] -ms-20 rounded-full -rotate-[60deg] w-[500px] bg-slate-400 absolute -bottom-[120px] right-[170px]"></div>
        <div className="h-full flex justify-center absolute top-0 left-0 w-2/4">
          <div className=" w-full text-center my-auto divide-blue-600">
            <h1 className="text-center text-4xl font-[700] mb-5">
              CREATE NEW ACCOUNT
            </h1>

            <form action={handleFormSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className=" px-10 h-9 bg-black w-80 placeholder-slate-50 font-medium text-[18px] rounded-md my-2"
                />
                <br />

                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleFormChange}
                  required
                  className=" px-10 h-9 bg-black w-80 placeholder-slate-50 font-medium text-[18px] rounded-md my-2"
                />
                <br />

                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className=" px-10 h-9 bg-black w-80 placeholder-slate-50 font-medium text-[18px] rounded-md my-2"
                />
                <br />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleFormChange}
                  required
                  className=" px-10 h-9 bg-black w-80 placeholder-slate-50 font-medium text-[18px] rounded-md my-2"
                />
                <br />

                <input
                  type="password"
                  placeholder=" Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleFormChange}
                  required
                  className=" px-10 h-9 bg-black w-80 placeholder-slate-50 font-medium text-[18px] rounded-md my-2"
                />
              </div>
              <div className="mt-6 mb-5">
                <SkewButton className={"h-10 pt-1.5 w-56"}>
                  {" "}
                  CTREATE ACCOUNT{" "}
                </SkewButton>
              </div>
            </form>

            <hr className="mt-4 w-[400px] mx-auto" />
            <div className="divide-blue-600 mt-3">
              <p href="#">Already have an account?</p>
              <SkewButton className={"h-10 pt-1.5 px-2 w-32 mt-2"}>
                {" "}
                LOGIN{" "}
              </SkewButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
