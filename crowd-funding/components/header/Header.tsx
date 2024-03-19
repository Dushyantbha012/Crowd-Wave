"use client";

import icon from "./signup.png";
import Image from "next/image";
import Wallet from "../Wallet";
import { useRouter, usePathname } from "next/navigation";

export default function () {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div>
      <ul className="flex flex-row text-xl justify-between w-screen h-16 align-middle items-center px-5 font-medium border-zinc-300 border-b-2">
        <li
          className=""
          onClick={() => {
            router.push("/");
          }}
        >
          Crowd Wave
        </li>
        <li className=" ">
          <ul className="flex flex-row justify-between gap-10 items-center align-middle">
            <li
              className={`flex flex-row align-middle items-center gap-x-2 ${
                pathName == "/signup" ? "p-2 bg-slate-200 rounded-md" : ""
              }`}
              onClick={() => {
                router.push("/signup");
              }}
            >
              Sign Up
              <Image src={icon} width={30} height={30} alt="Signup Icon" />
            </li>
            <li
              onClick={() => {
                router.push("/campaign");
              }}
              className={`${
                pathName == "/campaign" ? "p-2 bg-slate-200 rounded-md" : ""
              }`}
            >
              Start a Campaign
            </li>
            <li
              onClick={() => {
                router.push("/dashboard");
              }}
              className={`${
                pathName == "/dashboard" ? "p-2 bg-slate-200 rounded-md" : ""
              }`}
            >
              DashBoard
            </li>
            <li>
              <Wallet />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
