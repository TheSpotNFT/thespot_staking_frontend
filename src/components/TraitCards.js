import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import TraitContractABI from "../ABI/TraitContractABI.json";

function Card(props) {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const [variation, setVariation] = useState(props.image1);
  const { account, isAuthenticated } = useMoralis();
  const traitContract = "0x9521807ADF320D1CDF87AFDf875Bf438d1D92d87";
  const [totalSupply, setTotalSupply] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);
  const userAddress = account;

  async function getTokenBalance() {
    const ABI = TraitContractABI; // Add ABI of 0xdAC17F958D2ee523a2206206994597C13D831ec7

    const options = {
      chain: "avalanche",
      address: traitContract,
      function_name: "totalSupply",
      abi: ABI,
      params: { id: props.id },
    };
    const totalTokenSupply = await Moralis.Web3API.native.runContractFunction(
      options
    );
    setTotalSupply(totalTokenSupply);
  }

  useEffect(() => {
    getTokenBalance();
  }, []);
  console.log(totalSupply);

  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
      <img className="w-full" src={variation} alt={props.nftName}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h3>NFT Name: {props.nftName}</h3>
        </div>
        <div className="text-slate-50 text-base">
          <h5>ID: {props.id}</h5>
          <h5>Total Supply: {totalSupply}</h5>
          <div className="font-mono text-white list-none flex pb-3"></div>
          <div className="flex flex-col grid gap-4 grid-cols-4 py-6 place-contents-center">
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
            >
              1
            </button>
          </div>
          <div className="flex justify-center">
            <h5>Click number of variaton to commit change to NFT</h5>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
}
export default Card;
