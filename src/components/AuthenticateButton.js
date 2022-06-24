import React from "react";
import { useMoralis } from "react-moralis";
import theSpot from "../images/thespotmaster.png";
import coreowl from "../images/owlcoreconnect.png";

export default function Authenticate() {
  const { authenticate } = useMoralis();
  return (
    <div className="flex">
          <button
            className="animate-bounce rounded-lg bg-slate-900 px-4 py-0 border-4 border-slate-900 text-xl font-mono font-bold text-slate-900 
        hover:bg-black hover:border-black hover:text-gray-900 duration-300"
            onClick={() =>
              authenticate({ signingMessage: "Sign in!" })
            }
          >
            <img
          src={coreowl}
          className="align-middle rounded align-middle border-none h-10"
          alt="Core Connect Logo"
        ></img>
          </button>
        </div>
  );
}
