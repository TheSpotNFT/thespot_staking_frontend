import { stringify } from 'postcss';
import React, { useEffect, useState } from 'react'
import { useWeb3ExecuteFunction, useMoralisCloudFunction, useMoralis } from "react-moralis";
import Moralis from 'moralis';
import fragAbi from '../ABI/fragAbi.json';
import expandAbi from '../ABI/expandAbi.json';

function Mint(props) {
  const { account, isAuthenticated } = useMoralis();
  const [isLoading, setIsLoading] = useState(false)
  const contractProcessor = useWeb3ExecuteFunction();
  const [isApproved, setIsApproved] = useState(false);
  const fragContract = "0xa8f2A53A508d9510efE6b059c9e68D7d9855c60c"; //fuji
  const expandContract = "0xD1Cb30EE40804915307D8D842C0c205b3a557B87"; //fuji

  let userAddress = props.userAddress

  const { data: mintData, error: mintError, fetch: mintFetch, isFetching: mintFetching, isLoading: mintLoading } = useWeb3ExecuteFunction();

  function getImage() {
    return props.saveImage()
  }

  async function isApprovedForAll() {
    const approvedForAll = {
      chain: "0xa869",
      address: fragContract,
      function_name: "isApprovedForAll",
      abi: fragAbi,
      params: {
        owner: userAddress,
        operator: expandContract, //expand fuji
      },
    };
    const areYouApproved = await Moralis.Web3API.native.runContractFunction(
      approvedForAll
    );
    setIsApproved(areYouApproved);


  }
  useEffect(() => {
    isApprovedForAll();
  }, []);

  // console.log(isApproved, userAddress)


  async function expandMyNFT() {

    setIsLoading(true)

    await Moralis.enableWeb3();
    const sendOptions = {
      contractAddress: expandContract, //expand fuji
      functionName: "mint",
      chain: "0xa869",
      abi: expandAbi,
      msgValue: Moralis.Units.ETH(0),
      params: {
        fragId: props.id,
        amounts: props.quantity,
      },
    };

    const transaction = await contractProcessor.fetch({
      params: sendOptions,
      onError: (err) => {
        setIsLoading(false);
        alert(JSON.stringify(err.data.message));
      },
      onSuccess: (tx) => {
        tx.wait(5)
          .then(alert("Expansion Successfully! View your NFT on Campfire, Kalao or Joepegs!"))
          .then(setIsLoading(false))
          .then(console.log(tx));
      },
    });

  }


  /*useEffect(() => {
    checkApproval();
   
  }, [])
  */
  async function setApproval() {
    await Moralis.enableWeb3();
    const options = {
      contractAddress: fragContract, //frag fuji
      functionName: "setApprovalForAll",
      abi: fragAbi,
      params: {
        operator: expandContract, //expand fuji
        approved: "1",
      },
    };
    await contractProcessor.fetch({
      params: options,
    });
    const transaction = await Moralis.executeFunction(options);
    await transaction.wait()
    isApprovedForAll();
  }


  if (isLoading) {
    return (
      <div><button className="inline-flex m-1 rounded-lg px-4 py-2 border-2 border-spot-yellow text-spot-yellow
     duration-300 font-mono font-bold text-base" disabled>
        <svg className="inline animate-ping h-5 w-5 mr-3" viewBox="0 0 35 35">
          <circle className="path" cx="12" cy="15" r="10" fill="yellow" stroke="yellow" strokeWidth="2"></circle>
        </svg>
        Processing...
      </button>
      </div>
    )
  } else
    return (

      <div className="flex">
        <div className={isApproved ? "flex" : "hidden"}>
          <button className="m-1 rounded-lg px-3.5 py-2 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={expandMyNFT}>Expand (0.5)</button>
        </div>





      </div>


    )
}

export default Mint;


{/*
      <div className="flex">
        <div className={isApproved ? "flex" : "hidden"}>
          <button className="m-1 rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={mintMyNFT}>Mint (0.2)</button>

          <button className="m-1 rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={spotMintMyNFT}>Spot Holder Mint (0)</button>
        </div>

        <div className={isApproved ? "hidden" : "flex"}>
          <button className="m-1 w-max rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={setApproval}>Approve</button>
        </div>
    </div>*/}