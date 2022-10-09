import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import TraitContractABI from "../ABI/TraitContractABI.json";
import Mint from "../components/Mint.jsx"
import collection from "../StakingCollections";
import Blender from "../pages/Blender";

function Card(props) {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const [variation, setVariation] = useState(props.image1);
  const { account, isAuthenticated } = useMoralis();
  const traitContract = "0x9521807ADF320D1CDF87AFDf875Bf438d1D92d87";
  const [totalSupply, setTotalSupply] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);
  const userAddress = account;







  return (


    <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
      <img className="w-full" src={props.image1} alt={props.nftName}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h3>NFT Name: {props.nftName}</h3>
        </div>
        <div className="text-slate-50 text-base">
          <h5>ID: {props.id}</h5>

          <div className="grid grid-cols-5">





          </div>

        </div>
      </div>
    </div>
  );
}
export default Card;
