import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

function Card(props) {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const [variation, setVariation] = useState(props.image1);
  const [variationSelection, setVariationSelection] = useState("1");
  const { account, isAuthenticated } = useMoralis();
  const analogContract = "0xBe18CF471925d683c272AAFe9d1aaFDA99612B69";
  const userAddress = account;
  const [isLoading, setIsLoading] = useState([]);
  const [variation2, setVariation2] = useState([]);

function showVariation(){
  if (props.variations === "2") {
    setVariation2(false);
    } else setVariation2(true);
}
console.log(variation2);

  function changeVariation1() {
    setVariation(props.image1);
    setVariationSelection("1");
  }
  function changeVariation2() {
    setVariation(props.image2);
    setVariationSelection("2");
  }
  function changeVariation3() {
    setVariation(props.image3);
    setVariationSelection("3");
  }
  function changeVariation4() {
    setVariation(props.image4);
    setVariationSelection("4");
  }

  async function commitVariation() {
    let options = {
      contractAddress: "0xBe18CF471925d683c272AAFe9d1aaFDA99612B69",
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
        _variationID: variationSelection,
      },
    };

    await contractProcessor.fetch({
      params: options,
      onError: (err) => {
        setIsLoading(false);
        alert(JSON.stringify(err.data.message));
      },
      onSuccess: (tx) => {
        tx.wait(5)
          .then(alert("Variation Successful"))
          .then(setIsLoading(false))
          .then(console.log(tx));
      },
    });
  }

  /*async function commitVariation1() {
    let options = {
      contractAddress: "0xBe18CF471925d683c272AAFe9d1aaFDA99612B69",
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
      onError: (err) => {
        setIsLoading(false);
        alert(JSON.stringify(err.data.message));
      },
      onSuccess: (tx) => {
        tx.wait(5)
          .then(alert("Variation Successful"))
          .then(setIsLoading(false))
          .then(console.log(tx));
      },
    });
  }

  async function commitVariation2() {
    let options = {
      contractAddress: "0xBe18CF471925d683c272AAFe9d1aaFDA99612B69",
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
      onError: (err) => {
        setIsLoading(false);
        alert(JSON.stringify(err.data.message));
      },
      onSuccess: (tx) => {
        tx.wait(5)
          .then(alert("Variation Successful"))
          .then(setIsLoading(false))
          .then(console.log(tx));
      },
    });
  }
  async function commitVariation3() {
    let options = {
      contractAddress: "0xBe18CF471925d683c272AAFe9d1aaFDA99612B69",
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
      onError: (err) => {
        setIsLoading(false);
        alert(JSON.stringify(err.data.message));
      },
      onSuccess: (tx) => {
        tx.wait(5)
          .then(alert("Variation Successful"))
          .then(setIsLoading(false))
          .then(console.log(tx));
      },
    });
  }
  async function commitVariation4() {
    let options = {
      contractAddress: "0xBe18CF471925d683c272AAFe9d1aaFDA99612B69",
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
      onError: (err) => {
        setIsLoading(false);
        alert(JSON.stringify(err.data.message));
      },
      onSuccess: (tx) => {
        tx.wait(5)
          .then(alert("Variation Successful"))
          .then(setIsLoading(false))
          .then(console.log(tx));
      },
    });
  }*/
  return (
    <div
      className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300"
      onMouseLeave={changeVariation1}
    >
      <img className="w-full" src={variation} alt={props.nftName}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h3>NFT Name: {props.nftName}</h3>
        </div>
        <div className="text-slate-50 text-base">
          <h5>ID: {props.id}</h5>
          <div className="font-mono text-white list-none flex pb-3"></div>
          <div className="flex flex-col grid gap-4 grid-cols-4 py-6 place-contents-center">
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
              onMouseEnter={changeVariation1}
              onClick={changeVariation1}
            >
              1
            </button>
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
              onMouseEnter={changeVariation2}
              onClick={changeVariation2}
            >
              2
            </button>
            <div className={props.variations === "2" ? "hidden" : "flex grid gap-4"}>
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
              onMouseEnter={changeVariation3}
              onClick={changeVariation3}
            >
              3
            </button></div>
            <div className={props.variations === "2" ? "hidden" : "flex grid gap-4"}>
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
              onMouseEnter={changeVariation4}
              onClick={changeVariation4}
            >
              4
            </button></div>
          </div>
          <div className="flex grid grid-cols-1 justify-center">
         
            <h5></h5> <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
              
              onClick={commitVariation}
            >
              Click to Commit Variation {variationSelection}
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
}
export default Card;
