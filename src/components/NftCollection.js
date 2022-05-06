import React, { useState, useEffect } from "react";
import Card from "./Staking1";
import collection from "../StakingCollections";
import thespot from "../images/thespotmaster.png";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import goatdmain from "../images/goatdmain.png";
import analog from "../images/analogtitle.png";
import apechain from "../images/apechain.png";

const NftCollection = () => {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const [spotsMinted, setSpotsMinted] = useState([]);
  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  async function getNumberMinted() {
    const ABI = [
      {
        inputs: [],
        name: "nftCount",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ];

    const nftCountOptions = {
      chain: "avalanche",
      address: "0x0c6945e825fc3c80f0a1ea1d3e24d6854f7460d8",
      function_name: "nftCount",
      abi: ABI,
      params: {},
    };
    const nftsMinted = await Moralis.Web3API.native.runContractFunction(
      nftCountOptions
    );
    setSpotsMinted(nftsMinted);
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
  //render staking cards
  /*const renderCard = (collection, index) => {
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
  };*/

  function alertClick() {
    alert("Analog: Launching Soon");
  }

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10 font-mono text-spot-yellow bg-slate-900">
      <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
        <img className="w-full" src={thespot} alt=""></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center">
            <h1>MINTING IS LIVE! (0.69 avax)</h1>
          </div>

          <div className="text-slate-50 text-base">
            <div className="flex flex-col grid gap-4 grid-cols-5 px-4 py-4 place-contents-center">
              <button
                className="align-middle rounded-lg sm:px-4 md:px-4 lg:px-2 xl:px-4 px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
                onClick={mint1Nft}
              >
                1
              </button>
              <button
                className="align-middle rounded-lg sm:px-4 md:px-4 lg:px-2 xl:px-4 px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
                onClick={mint2Nft}
              >
                2
              </button>
              <button
                className="align-middle rounded-lg sm:px-4 md:px-4 lg:px-2 xl:px-4 px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
                onClick={mint3Nft}
              >
                3
              </button>
              <button
                className="align-middle rounded-lg sm:px-4 md:px-4 lg:px-2 xl:px-4 px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
                onClick={mint4Nft}
              >
                4
              </button>
              <button
                className="align-middle rounded-lg sm:px-4 md:px-4 lg:px-2 xl:px-4 px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
                onClick={mint5Nft}
              >
                5
              </button>
            </div>
            <div className="font-bold text-l py-4 flex justify-center">
              <h3>^ How many Spots? ^</h3>
            </div>
            <div className="font-bold text-l py-6">
              <h3>{spotsMinted}/610 Minted</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
        <img className="w-full" src={goatdmain} alt=""></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center">
            <h1>GoatD: Customizable pfp</h1>
          </div>
          <div className="text-slate-50 text-base">
            <div className="flex flex-col space-y-4 py-4">
              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={onClickUrl("https://thespot.wtf")}
              >
                Enter the Transmorphisizer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
        <img className="w-full" src={analog} alt=""></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center">
            <h1>Analog: 1/1 Customizable NFTs</h1>
          </div>
          <div className="text-slate-50 text-base">
            <div className="flex flex-col space-y-4 py-4">
              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={onClickUrl("/analog")}
              >
                Enter Analog
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
        <img className="w-full" src={apechain} alt=""></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center">
            <h1>Spot Staking</h1>
          </div>
          <div className="text-slate-50 text-base">
            <div className="flex flex-col space-y-4 py-4">
              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
      hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={onClickUrl("/staking")}
              >
                Enter Staking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCollection;
