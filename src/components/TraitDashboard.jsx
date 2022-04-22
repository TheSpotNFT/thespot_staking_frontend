import React from "react";
import traitNfts from "../TraitNfts";
import Card from "./TraitCards";

const renderCard = (traitNfts, index) => {
  return (
    <Card
      key={traitNfts.id}
      nftName={traitNfts.name}
      image={traitNfts.image1}
      id={traitNfts.id}
    />
  );
};

const TraitDashboard = () => {
  return (
    <div className="px-10 py-1 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 font-mono text-spot-yellow bg-slate-900">
      {traitNfts.map(renderCard)}
    </div>
  );
};

export default TraitDashboard;
