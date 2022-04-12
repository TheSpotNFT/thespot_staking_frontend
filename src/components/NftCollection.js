import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "./Cards";
import collection from "../Collection";
import thespot from "../images/thespotmaster.png";
import {
  useMoralis,
  useMoralisWeb3Api,
  useWeb3ExecuteFunction,
} from "react-moralis";

const NftCollection = () => {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  //get nftCount from contract for how many nfts minted
  async function getNumberMinted() {
    const data = await Moralis.Web3API.native.runContractFunction({
      chain: "avalanche",
      address: "0x0c6945e825fc3c80f0a1ea1d3e24d6854f7460d8",
      function_name: "nftCount",
      params: {},
      abi: {
        inputs: [],
        name: "nftCount",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    });
    //console.log(data);
  }

  //Minting: cleanup. try to use one function with inputs from buttons changing number of mints and value vs multiple functions
  async function mint1Nft() {
    let options = {
      contractAddress: "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8",
      functionName: "mintSPOT",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "mintSPOT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(0.69),
      params: {
        tokenAmount: 1,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }

  async function mint2Nft() {
    let options = {
      contractAddress: "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8",
      functionName: "mintSPOT",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "mintSPOT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(1.38),
      params: {
        tokenAmount: 2,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }

  async function mint3Nft() {
    let options = {
      contractAddress: "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8",
      functionName: "mintSPOT",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "mintSPOT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(2.07),
      params: {
        tokenAmount: 3,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }

  async function mint4Nft() {
    let options = {
      contractAddress: "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8",
      functionName: "mintSPOT",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "mintSPOT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(2.76),
      params: {
        tokenAmount: 4,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }

  async function mint5Nft() {
    let options = {
      contractAddress: "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8",
      functionName: "mintSPOT",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "mintSPOT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(3.45),
      params: {
        tokenAmount: 5,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }

  //call getNumberMinted to pull value from contract
  useEffect(() => {
    getNumberMinted();
  }, []);

  const renderCard = (collection, index) => {
    return (
      <Card
        key={collection.id}
        nftName={collection.name}
        image={collection.image}
        hoverimage={collection.hoverimage}
        id={collection.id}
        contract={collection.contract}
      />
    );
  };

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 font-mono text-spot-yellow bg-slate-900">
      <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
        <img className="w-full" src={thespot} alt=""></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center">
            <h1>MINT IS LIVE!</h1>
          </div>
          <div className="text-slate-50 text-base">
            <div className="flex flex-col grid gap-4 grid-cols-5 px-4 py-10 place-contents-center">
              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={mint1Nft}
              >
                Mint 1 Spot
              </button>
              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={mint2Nft}
              >
                Mint 2 Spots
              </button>
              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={mint3Nft}
              >
                Mint 3 Spots
              </button>
              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={mint4Nft}
              >
                Mint 4 Spots
              </button>
              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={mint5Nft}
              >
                Mint 5 Spots
              </button>
              <div className="font-bold text-xl mb-2 flex justify-center py-6">
                <h3>333/610 Minted</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {collection.map(renderCard)}
    </div>
  );
};

export default NftCollection;
