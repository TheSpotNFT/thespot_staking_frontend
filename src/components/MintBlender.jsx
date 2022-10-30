import { stringify } from 'postcss';
import React, { useEffect, useState } from 'react'
import { useWeb3ExecuteFunction, useMoralisCloudFunction, useMoralis } from "react-moralis";
import Moralis from 'moralis';
import blenderAbi from '../ABI/blenderAbi.json';
import expandAbi from '../ABI/expandAbi.json';

function Mint(props) {
  const { account, isAuthenticated } = useMoralis();
  const [isLoading, setIsLoading] = useState(false)
  const contractProcessor = useWeb3ExecuteFunction();
  const [isApproved, setIsApproved] = useState(false);
  const blenderContract = "0xa8f2A53A508d9510efE6b059c9e68D7d9855c60c"; //fuji
  const expandContract = "0xD1Cb30EE40804915307D8D842C0c205b3a557B87"; //fuji

  let userAddress = props.userAddress

  const { data: mintData, error: mintError, fetch: mintFetch, isFetching: mintFetching, isLoading: mintLoading } = useWeb3ExecuteFunction();

  function getImage() {
    return props.saveImage()
  }

  async function isApprovedForAll() {
    const approvedForAll = {
      chain: "0xa869",
      address: expandContract,
      function_name: "isApprovedForAll",
      abi: expandAbi,
      params: {
        owner: userAddress,
        operator: blenderContract, //expand fuji
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


  console.log(isApproved, userAddress)


  async function blendMyNfts() {

    setIsLoading(true)
    const base64 = await getImage()
    const imageData = new Moralis.File("img.png", { base64: base64 });
    await imageData.saveIPFS();
    const imgURL = await imageData.ipfs();
    console.log(imgURL)

    const metadata = {
      "name": "Blender",
      "description": "Blend your expanded fragment NFTs to create a custom SPOT!",
      "image": imgURL,
      "attributes": [
        {
          "trait_type": "Background:",
          "value": props.background
        },
        {
          "trait_type": "Spot",
          "value": props.name
        },

      ],
    }
    console.log(metadata)


    const metaDataFile = new Moralis.File("file.json", { base64: btoa(JSON.stringify(metadata)) });
    await metaDataFile.saveIPFS();
    const metaDataUrl = await metaDataFile.ipfs();
    console.log(metaDataUrl)
    await Moralis.enableWeb3();
    const sendOptions = {
      contractAddress: blenderContract, //expand fuji
      functionName: "mint",
      chain: "0xa869",
      abi: blenderAbi,
      msgValue: Moralis.Units.ETH(0),
      params: {
        bg: props.id,
        letter1: props.letter1,
        letter2: props.letter2,
        letter3: props.letter3,
        letter4: props.letter4,
        letter5: props.letter5,
        letter6: props.letter6,
        uri: metaDataUrl
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
      contractAddress: expandContract, //frag fuji
      functionName: "setApprovalForAll",
      abi: expandAbi,
      params: {
        operator: blenderContract, //expand fuji
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
          <button className="m-1 rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={blendMyNfts}>Blend (0)</button>



          <div className={isApproved ? "hidden" : "flex"}>
            <button className="m-1 w-max rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={setApproval}>Approve</button>
          </div>

          {/*</div>
      <div className="flex">
        <div className={isApproved ? "flex" : "flex"}>
          <button className="m-1 rounded-lg px-3.5 py-2 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={blendMyNfts}>Blend (0.5)</button>
        </div>

    */}



        </div></div>


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