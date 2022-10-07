import { stringify } from 'postcss';
import React, { useEffect, useState } from 'react'
import { useWeb3ExecuteFunction, useMoralisCloudFunction, useMoralis } from "react-moralis";
import Moralis from 'moralis';
import fragAbi from '../ABI/fragAbi.json';
import expandAbi from '../ABI/expandAbi.json';
import biznessAbi from '../ABI/biznessAbi.json';

function PrintCard(props) {
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


  async function printMyCard() {

    setIsLoading(true)
    const base64 = await getImage()
    const imageData = new Moralis.File("img.png", { base64: base64 });
    await imageData.saveIPFS();
    const imgURL = await imageData.ipfs();
    console.log(imgURL)

    const metadata = {
      "name": "BizCards",
      "description": "Customized NFT BizCards",
      "image": imgURL,
      "attributes": [
        {
          "trait_type": "Background:",
          "value": props.background
        },
        {
          "trait_type": "Name",
          "value": props.name
        },
        {
          "trait_type": "Title",
          "value": props.title
        },
        {
          "trait_type": "Project",
          "value": props.project
        },
        {
          "trait_type": "Wallet",
          "value": props.wallet
        },
        {
          "trait_type": "Domain",
          "value": props.domain
        },
        {
          "trait_type": "Discord",
          "value": props.discord
        },
        {
          "trait_type": "Twitter",
          "value": props.twitter
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
      contractAddress: "0x11C49B8d2F8C92598Fe0bea8fCb9f1B3f045A723", //bizness testnet
      functionName: "printCard",
      chain: 0xa869,
      abi: biznessAbi,
      msgValue: Moralis.Units.ETH(0),
      params: {
        _tokenID: props.unnamedID,
        newTokenUri: metaDataUrl,
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
          .then(alert("Printing Successfully! View your NFT on Campfire, Kalao or Joepegs!"))
          .then(setIsLoading(false))
          .then(console.log(tx));
      },
    });

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

      <div className="flex pb-2 w-full pr-2">
        <div className={isApproved ? "flex w-full" : "flex w-full"}>
          <button className="m-1 w-full rounded-lg px-3.5 py-2 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={printMyCard}>Print</button>
        </div>





      </div>


    )
}

export default PrintCard;


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