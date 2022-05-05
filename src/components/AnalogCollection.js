import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "./AnalogCards";
import analogNfts from "../AnalogNfts";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";

const renderCard = (analogNfts, index) => {
  return (
    <Card
      key={analogNfts.id}
      nftName={analogNfts.name}
      image1={analogNfts.image1}
      image2={analogNfts.image2}
      image3={analogNfts.image3}
      image4={analogNfts.image4}
      id={analogNfts.id}
    />
  );
};

const NftCollection = () => {
  const { account, isAuthenticated } = useMoralis();
  const analogContract = "0xBe18CF471925d683c272AAFe9d1aaFDA99612B69";
  const [checkMyNFTs, setCheckMyNFTs] = useState(false);
  const [walletNFTs, setWalletNFTs] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);
  const userAddress = account;
  const [filterButton, setFilterButton] = useState(1);
  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  let Links = [
    { name: "Home", link: "/" },
    { name: "Analog", link: "/analog" },
    { name: "Goatd", link: "https://thespot.wtf" },
    { name: "Twitter", link: "https://twitter.com/TheSpotnft" },
    { name: "Discord", link: "https://discord.com/invite/4wvC6xTFyB" },
    { name: "AnalogCampfire", link: "https://discord.com/invite/4wvC6xTFyB" },
    { name: "AnalogNFTrade", link: "https://discord.com/invite/4wvC6xTFyB" },
  ];

  function getNFTs() {
    const options = {
      chain: "avalanche",
      address: userAddress,
      token_address: analogContract,
    };
    Moralis.Web3API.account.getNFTsForContract(options).then((data) => {
      const result = data.result;
      setWalletNFTs(result.map((nft) => nft.token_id));
      setApiLoaded(true);
      console.log({ result });
    });
  }
  useEffect(() => {
    getNFTs();
  }, [checkMyNFTs, account]);

  return (
    <div className="px-10 py-4 gap-10 font-mono text-spot-yellow bg-slate-900">
      Analog is a dNFT that you may change to a specific variation if you own a
      Spot NFT and the 1/1 piece. Below you can browse all the variations of the
      pieces and commit a variation once you own the piece. Get a Spot NFT at
      <href
        style={{ cursor: "pointer" }}
        onClick={onClickUrl("https://thespot.art")}
      >
        {" "}
        thespot.art
      </href>{" "}
      and your Analog piece on{" "}
      <href
        style={{ cursor: "pointer" }}
        onClick={onClickUrl(
          "https://campfire.exchange/collections/0xbe18cf471925d683c272aafe9d1aafda99612b69"
        )}
      >
        Campfire.exchange
      </href>{" "}
      or{" "}
      <href
        style={{ cursor: "pointer" }}
        onClick={onClickUrl(
          "https://nftrade.com/assets/avalanche/0xbe18cf471925d683c272aafe9d1aafda99612b69"
        )}
      >
        NFTrade.com
      </href>
      <div className="py-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 font-mono text-spot-yellow bg-slate-900">
        {analogNfts
          .filter((renderCard) => {
            if (filterButton == 1) {
              return renderCard;
            } else return renderCard.id.walletNFTs;
          })
          .map(renderCard)}
      </div>
    </div>
  );
};

export default NftCollection;
/*
<div className="bg-slate-900 py-4 px-8">
        <button
          className="m-2 rounded-lg px-2 py-2 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base"
          onClick={() => {
            setCheckMyNFTs(!checkMyNFTs);
          }}
        >
          Check for Owned NFTs
        </button>
        <button
          className="m-2 rounded-lg px-2 py-2 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base"
          onClick={() => {
            if (filterButton == 0) {
              setFilterButton(1);
            } else setFilterButton(0);
          }}
        >
          Filter Results
        </button>
        <div className="font-mono text-white list-none flex pb-0 pt-3 text-sm">
          <div className="text-spot-yellow font-bold pr-3 text-xl px-2">* </div>
          Analog NFTs in your wallet:{" "}
          {(apiLoaded, checkMyNFTs && walletNFTs.length + " ")}{" "}
          {
            (apiLoaded,
            checkMyNFTs && "IDs: " + walletNFTs.map((NFT) => " " + NFT))
          }{" "}
          | Cost of variation: 1 Avax
        </div>
      </div>
      */
