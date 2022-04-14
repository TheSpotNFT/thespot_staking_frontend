import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "./AnalogCards";
import analogNfts from "../AnalogNfts";

const NftCollection = () => {
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

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10 font-mono text-spot-yellow bg-slate-900">
      {analogNfts.map(renderCard)}
    </div>
  );
};

export default NftCollection;
