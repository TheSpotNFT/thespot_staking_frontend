import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

function Card(props) {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const [variation, setVariation] = useState(props.image1);
  const { account, isAuthenticated } = useMoralis();
  const analogContract = "0xB65a7eC3FA73691AD7623DBCb09772709cCe83dd";
  const [checkMyNFTs, setCheckMyNFTs] = useState(false);
  const [walletNFTs, setWalletNFTs] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);
  const userAddress = account;

  /*function getNFTs() {
    const options = {
      chain: "avalanche testnet",
      address: userAddress,
      token_address: analogContract,
    };
    Moralis.Web3API.account.getNFTsForContract(options).then((data) => {
      const result = data.result;
      setWalletNFTs(result.map((nft) => nft.token_id));
      setApiLoaded(true);
    });
  }
  useEffect(() => {
    getNFTs();
  }, [checkMyNFTs, account]);
*/
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
      contractAddress: "0xB65a7eC3FA73691AD7623DBCb09772709cCe83dd",
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
      contractAddress: "0xB65a7eC3FA73691AD7623DBCb09772709cCe83dd",
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
      contractAddress: "0xB65a7eC3FA73691AD7623DBCb09772709cCe83dd",
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
      contractAddress: "0xB65a7eC3FA73691AD7623DBCb09772709cCe83dd",
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
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
              onMouseEnter={changeVariation4}
              onClick={commitVariation4}
            >
              4
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
