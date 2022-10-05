import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import TraitContractABI from "../ABI/TraitContractABI.json";
import Mint from "../components/Mint.jsx"
import collection from "../StakingCollections";
import Blender from "../pages/Blender";

function Card(props) {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const [variation, setVariation] = useState(props.image1);
  const { account, isAuthenticated } = useMoralis();
  const traitContract = "0x9521807ADF320D1CDF87AFDf875Bf438d1D92d87";
  const [totalSupply, setTotalSupply] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);
  const userAddress = account;
    //position setting
    const [position, setPosition] = useState(props.image1);
    const [image, setImage] = useState(props.image1);

    function imagePostion1(){
        setPosition(props.image1);
        setImage("trait.image1");
        console.log(position);
    }

    function imagePostion2(){
        setPosition(props.image2);
        setImage("trait.image2");
        console.log(position);
    }
    function imagePostion3(){
        setPosition(props.image3);
        setImage(props.image3);
        console.log(position);
    }
    function imagePostion4(){
        setPosition(props.image4);
        setImage(props.image4);
        console.log(position);
    }
    function imagePostion5(){
        setPosition(props.image5);
        setImage(props.image5);
        console.log(position);
    }
    function imagePostion6(){
        setPosition("6");
        console.log(position);
    }
    function imagePostion7(){
        setPosition("7");
        console.log(position);
    }
    function imagePostion8(){
        setPosition("8");
        console.log(position);
    }
    function imagePostion9(){
        setPosition("9");
        console.log(position);
    }
    function imagePostion10(){
        setPosition("10");
        console.log(position);
    }


  return (


    <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
      <img className="w-full" src={position} alt={props.nftName}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h3>NFT Name: {props.nftName}</h3>
        </div>
        <div className="text-slate-50 text-base">
          <h5>ID: {props.id}</h5>

          <div className="grid grid-cols-5">
                            
                            <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion1}>1</button>
    <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion2}>2</button>
    <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion3}>3</button>
    <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion4}>4</button>
    <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion5}>5</button>
    <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion6}>6</button>
    <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion7}>7</button>
    <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion8}>8</button>
    <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion9}>9</button>
    <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={imagePostion10}>10</button>
    </div>
          <div className="flex grid gap-2 py-2 pt-5 place-contents-center text-white">
            Position {position}
          


          </div>

        </div>
      </div>
    </div>
  );
}
export default Card;
