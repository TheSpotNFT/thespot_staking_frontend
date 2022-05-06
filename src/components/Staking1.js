import React, { useContext, useEffect, useState } from "react";
import {
  useMoralis,
  useWeb3ExecuteFunction,
  useMoralisWeb3Api,
} from "react-moralis";
//OLD VERSION
function Card(props) {
  const { Moralis } = useMoralis();
  console.log("component rendering");
  const { account, isAuthenticated } = useMoralis();
  const userAddress = account;
  const chain = "avalanche";
  const contract = "0x6d5087B3082f73D42a32D85e38BC95dcceDe39Bb";
  const spotContract = "0x0c6945e825fc3c80f0a1ea1d3e24d6854f7460d8";
  const [spotNftCount, setSpotNftCount] = useState([]);
  const [nftContractCount, setNftContractCount] = useState([]);

  async function getNfts() {
    const options = { address: account, chain: chain, token_address: contract };
    const countNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    const nftCount = countNFTs.result.length;
    setNftContractCount(nftCount);
    console.log(nftCount);
  }

  async function getSpotNfts() {
    const options = {
      address: account,
      chain: chain,
      token_address: spotContract,
    };
    const spotNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    const spotCount = spotNFTs.result.length;
    setSpotNftCount(spotCount);
  }
  //In progress
  /*async function stakeApe() {
    let options = {
      contractAddress: "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8",
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
      params: {
        _tokenID: props.id,
        _variationID: 4,
      },
    };
*/
  /*await contractProcessor.fetch({
      params: options,
    });
  }*/

  useEffect(() => {
    getNfts();
    getSpotNfts();

    // getSupply();
  }, []);

  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
      <img className="w-full" src={props.image} alt={props.nftName}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h3>Stake Your {props.nftName}</h3>
        </div>
        <div className="text-slate-50 text-base">
          <h5>
            Number of {props.nftName} in Wallet: {nftContractCount}
          </h5>
          <h5>Number of Spots in Wallet: {spotNftCount}</h5>
          <h5>Time Remaining until Claimable: 1.5hr</h5>
          <div className="flex flex-col space-y-4 py-4">
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
            >
              Stake
            </button>
            <button
              className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
            >
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
