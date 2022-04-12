import React, { useState, useEffect, useRef, useCallback } from 'react';
import Card from "./Cards";
import { useMoralis } from "react-moralis";
import { Link } from 'react-router-dom';
import analogImage from '../images/analog.jpg';
import Moralis from 'moralis';

export default function hero(){
  /*
  const {account, isAuthenticated} = useMoralis();
  const spotContract = "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8";
  const userAddress = account

  const [walletTraits, setWalletTraits] = useState([])
  const [apiLoaded, setApiLoaded] = useState(false)
  const [checkMyTraits, setCheckMyTraits] = useState(false)
  console.log("component rendered")


  function getTraits() {
   const options = { chain: "avalanche", address: userAddress, token_address: spotContract };
    Moralis.Web3API.account.getNFTsForContract(options).then((data)=>{
      const result = data.result
      setWalletTraits(result.map(nft=>nft.token_id))
      setApiLoaded(true)
        console.log("api triggered")
      });
      
    }

*/
return(
   <div className="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 font-mono text-spot-yellow bg-slate-900">
 <Card
            key = "This"
            traitName = "That"
            traitType = "What"
            rarity = "who"
            image = "https://assets.nftrade.com/image/upload/w_500,c_scale/v1645587526/evm_43114_0x19a5b9fcd30d067c8fc287fe81b08798b837a3c6_2.png"
            id = "this"
            />
 <Card
            key = "This"
            traitName = "That"
            traitType = "What"
            rarity = "who"
            image = "https://assets.nftrade.com/image/upload/w_500,c_scale/v1645587526/evm_43114_0x19a5b9fcd30d067c8fc287fe81b08798b837a3c6_1.png"
            id = "this"
            />
   </div>
 )
}


