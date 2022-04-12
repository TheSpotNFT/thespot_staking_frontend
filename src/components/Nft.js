import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useMoralis } from 'react-moralis';
import Moralis from 'moralis';
import Card from "./Cards";
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"
import img4 from "../images/4.png"
import { data } from 'autoprefixer';




export default function Authenticate() {
    console.log("component rendering")
    const {account, isAuthenticated} = useMoralis();
    const userAddress = account
    const chain = 'avalanche';
    const spotAnalogContract = '0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8';
    const [walletImg, setWalletImg] = useState([])
    
    /*async function getNfts() {
      const options = { address: account, chain: chain, token_address: spotAnalogContract }
      const NFTs = await Moralis.Web3API.account.getNFTsForContract(options) 
      const result = NFTs.result
      const final = result.map(nft=>nft.metadata)
  //     let images = []
  //     for(let i=0; i<final.length; i++) {
  //     const token = JSON.parse(final[i])
  //     images.push(token.image)
  //     }
  //    console.log(images)
      const tokenArray = final.map((ea)=>{
      const parsed = JSON.parse(ea)
        if(parsed!=null){
          return parsed.image
        }
      })
      setWalletImg(tokenArray)

      console.log(walletImg[0])
      
      
    };

    useEffect(() => {
      getNfts();
    },[]);
    
*/

function createCard(collectionCard) { //Building the card here from Card.jsx passing props and simultaneously fetching traits on click.
  return (
      
     <div onClick= {()=>{

     }}> <Card
      key = {collectionCard.id}
      nftName = {collectionCard.nftName}
      traitType = {collectionCard.traitType}
      rarity = {collectionCard.rarity}
      image = {collectionCard.image}
      id = {collectionCard.id}
      /></div>
    )
    }

    return (
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-5 font-mono text-spot-yellow">
      {createCard}
      </div>
    )}
     /* <div className="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 font-mono text-spot-yellow bg-slate-900">
        <Card
          key = "1"
          nftName = "insert nft name prop"
          variationType = "insert variation type from contract metadata"
          image1 = {walletImg[0]}
          image2 = {walletImg[2]}
          image3 = {walletImg[3]}
          image4 = {walletImg[4]}
          id = "insert nft id from meta"
          />
        <Card
          key = "1"
          nftName = "insert nft name prop"
          variationType = "insert variation type from contract metadata"
          image1 = {walletImg[0]}
          image2 = {walletImg[2]}
          image3 = {walletImg[3]}
          image4 = {walletImg[4]}
          id = "insert nft id from meta"
          />
     
        
        </div>
      
  
      )
*/
    
         

