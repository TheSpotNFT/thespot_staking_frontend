import React, { useState, useEffect, useRef, useCallback } from 'react';
import collection from "../FragmentsCollections";
import Card from "../components/ExpandCards";
import Moralis from 'moralis';
import Fragments from '../FragmentsCollections';
import { useMoralis, useWeb3ExecuteFunction} from "react-moralis";
import Mint from '../components/Mint';
import fragAbi from '../ABI/fragAbi.json';
import expandAbi from '../ABI/expandAbi.json';




function ExpandCards() {
  const [filter, setFilter] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [walletTraits, setWalletTraits] = useState([])
  const [apiLoaded, setApiLoaded] = useState(false)
  const [checkMyTraits, setCheckMyTraits] = useState(false)
  const {account, isAuthenticated} = useMoralis();
  const userAddress = account
  const fragContract = "0xa8f2A53A508d9510efE6b059c9e68D7d9855c60c";  //fuji
  const [ownedCards, setOwnedCards] = useState(true)    
  const [isApproved, setIsApproved] = useState(false);
  const contractProcessor = useWeb3ExecuteFunction();
  const expandContract = "0xD1Cb30EE40804915307D8D842C0c205b3a557B87";  //fuji


  async function isApprovedForAll() {
    const approvedForAll = {
      chain: "0xa869",
      address: fragContract, 
      function_name: "isApprovedForAll",
      abi: fragAbi,
      params: {
        owner: userAddress,
        operator: expandContract,
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

  function getTraits() {
    const options = { chain: "0xa869", address: userAddress, token_address: fragContract };
    Moralis.Web3API.account.getNFTsForContract(options).then((data)=>{
        const result = data.result
        setWalletTraits(result.map(nft=>nft.token_id))
        setApiLoaded(true)
        
    });

}
 useEffect(()=>{
        getTraits();
    }, [account])



  let ownedFilter = Fragments.filter(item=> {
      if(walletTraits.includes(item.id.toString())) {
          
          return item
      }
  
  })

  

  function renderCard(collection) {

    return (
      <Card
        key={collection.id}
        nftName={collection.name}
        image={collection.image}
        id={collection.id}
      />
    );
  };
  

  return (
    <div className="px-10 py-4 ga
    p-10 font-mono text-spot-yellow bg-slate-900">
      Expand your ERC-721 tokens into ERC-1155 tokens in order to create a supply of ERC-1155 token for use in the Blender. <font color="white">You can only do this once so be sure to select the final supply quantity for your ERC-721, this will affect the combinations available for the Blender for all users.</font> Only the Fragments you own are shown below. You MUST approve your Fragments to be used prior to Expanding them.
      <div className="pt-1 pb-1 pr-2 pl-1 flex">


</div>
<div className={isApproved ? "hidden" : "flex"}>
          <button className="m-1 rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={setApproval}>Approve Fragments</button></div>

     {/* <div className='self-end'>
<button className="w-1/3 m-2 rounded-lg px-4 py-2 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={()=>{
    setOwnedCards(!ownedCards)
    }}>{!ownedCards?'My Traits':'All Traits'}</button></div>*/}

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 font-mono text-spot-yellow">
      {ownedCards?ownedFilter.map(renderCard):collection.map(renderCard)}
    </div>
    </div>
  );
}

export default ExpandCards;
