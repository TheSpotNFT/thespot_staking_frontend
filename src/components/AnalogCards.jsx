import React, { useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

function Card(props) {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const [variation, setVariation] = useState(props.image1);

  function changeVariation1() {
    setVariation(props.image1);
  }
  function changeVariation2() {
    setVariation(props.image2);
  }
  function changeVariation3() {
    setVariation(props.image3);
  }
  function changeVariation4() {
    setVariation(props.image4);
  }

  async function commitVariation1() {
    let options = {
      contractAddress: "0xc2A39aDc4b3445e130172CFa0F437BBE2264f730",
      functionName: "changeVariation",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "_tokenID", type: "uint256" },
            { internalType: "uint256", name: "_variationID", type: "uint256" },
          ],
          name: "changeVariation",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(1.0),
      params: {
        _tokenID: props.id,
        _variationID: 1,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }

  async function commitVariation2() {
    let options = {
      contractAddress: "0xc2A39aDc4b3445e130172CFa0F437BBE2264f730",
      functionName: "changeVariation",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "_tokenID", type: "uint256" },
            { internalType: "uint256", name: "_variationID", type: "uint256" },
          ],
          name: "changeVariation",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(1.0),
      params: {
        _tokenID: props.id,
        _variationID: 2,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }
  async function commitVariation3() {
    let options = {
      contractAddress: "0xc2A39aDc4b3445e130172CFa0F437BBE2264f730",
      functionName: "changeVariation",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "_tokenID", type: "uint256" },
            { internalType: "uint256", name: "_variationID", type: "uint256" },
          ],
          name: "changeVariation",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(1.0),
      params: {
        _tokenID: props.id,
        _variationID: 3,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }
  async function commitVariation4() {
    let options = {
      contractAddress: "0xc2A39aDc4b3445e130172CFa0F437BBE2264f730",
      functionName: "changeVariation",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "_tokenID", type: "uint256" },
            { internalType: "uint256", name: "_variationID", type: "uint256" },
          ],
          name: "changeVariation",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(1.0),
      params: {
        _tokenID: props.id,
        _variationID: 4,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
      <img className="w-full" src={variation} alt={props.nftName}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h3>NFT Name: {props.nftName}</h3>
        </div>
        <div className="text-slate-50 text-base">
          <h5>ID: {props.id}</h5>
          <div className="flex flex-col space-y-4 py-4">
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
              onMouseEnter={changeVariation1}
              onClick={commitVariation1}
            >
              Variation 1 (Click to Commit)
            </button>
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
              onMouseEnter={changeVariation2}
              onClick={commitVariation2}
            >
              Variation 2 (Click to Commit)
            </button>
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
              onMouseEnter={changeVariation3}
              onClick={commitVariation3}
            >
              Variation 3 (Click to Commit)
            </button>
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
              onMouseEnter={changeVariation4}
              onClick={commitVariation4}
            >
              Variation 4 (Click to Commit)
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
}
export default Card;
