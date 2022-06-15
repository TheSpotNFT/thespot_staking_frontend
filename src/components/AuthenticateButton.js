import React from "react";
import { useMoralis } from "react-moralis";
import theSpot from "../images/thespotmaster.png";
import coreowl from "../images/owlcore.png";

export default function Authenticate() {
  const { authenticate } = useMoralis();
  return (
    <div className="flex">
          <button
            className="animate-bounce rounded-lg px-4 py-0 border-4 border-slate-900 text-xl font-mono font-bold text-slate-900 
        hover:bg-white hover:border-black hover:text-gray-900 duration-300"
            onClick={() =>
              authenticate({ signingMessage: "Sign in!" })
            }
          >
            <b>Metamask Sign-in</b>
          </button>
        </div>
  );
}
