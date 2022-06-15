import React from "react";
import { useMoralis } from "react-moralis";
import theSpot from "../images/thespotmaster.png";
import coreowl from "../images/owlcore.png";

export default function Authenticate() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-slate-900 flex w-full h-screen align-middle flex">
      <div className="m-auto">
        <img
          src={theSpot}
          className="shadow rounded h-auto align-middle border-none"
          alt="The Spot Logo"
        ></img>
        
        <div className="grid grid-cols-2 justify-center align-middle px-25 py-10 space-x-4">
         
          <button
            className="align-middle rounded-full px-4 py-4 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
            
            
          >
           <div><img
          src={coreowl}
          className="align-middle rounded align-middle border-none h-12"
          alt="Core Connect Logo"
        ></img></div> 
          </button>
          <button
            className="align-middle rounded-full px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
            onClick={() =>
              authenticate({ signingMessage: "Sign in to The Spot!" })
            }
          >
            <b>Authenticate Metamask</b>
          </button>
        </div>
       
      </div>
    </div>
  );
}
