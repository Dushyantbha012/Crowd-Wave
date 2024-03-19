import icon from "./signup.png";
import Image from "next/image";
import Wallet from "../Wallet";
export default function () {
  return (
    <div>
      <ul className="flex flex-row text-xl justify-between w-screen h-16 align-middle items-center px-5 font-medium border-zinc-300 border-b-2">
        <li className="">Crowd Wave</li>
        <li className=" ">
          <ul className="flex flex-row justify-between gap-10 items-center align-middle">
            <li className="flex flex-row align-middle items-center gap-x-2">
              Sign Up
              <Image src={icon} width={30} height={30} alt="Signup Icon" />
            </li>
            <li>Start a Campaign</li>
            <li>DashBoard</li>
            <li>
              <Wallet />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
