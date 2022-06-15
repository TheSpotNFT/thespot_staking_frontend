import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

function Card(props) {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const [variation, setVariation] = useState(props.image1);
  const { account, isAuthenticated } = useMoralis();
  const analogContract = "0xBe18CF471925d683c272AAFe9d1aaFDA99612B69";
  const userAddress = account;
  const [isLoading, setIsLoading] = useState([]);

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

  function changeVariation5() {
    setVariation(props.image5);
  }
  function changeVariation6() {
    setVariation(props.image6);
  }
  function changeVariation7() {
    setVariation(props.image7);
  }
  function changeVariation8() {
    setVariation(props.image8);
  }
  function changeVariation9() {
    setVariation(props.image9);
  }


  async function commitVariation1() {
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
  }
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
          <div className="font-mono text-white list-none flex pb-3"> <h5>Taptapkaboom has Delivered! View your options for the next evolution of this piece below</h5></div>
          <div className="flex flex-col grid gap-4 grid-cols-4 py-6 place-contents-center">
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
              onMouseEnter={changeVariation1}
              onClick={commitVariation1}
            >
              1
            </button>
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
              onMouseEnter={changeVariation2}
              onClick={commitVariation2}
            >
              2
            </button>
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
              onMouseEnter={changeVariation3}
              onClick={commitVariation3}
            >
              3
            </button>

          </div>
          <div className="flex justify-center">
            <h5>Click the evolution version number to commit</h5>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
}
export default Card;
