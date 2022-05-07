import React from "react";
import collection from "../StakingCollections";
import Card from "./StakingCards";

//render staking cards
const renderCard = (collection, index) => {
  return (
    <Card
      key={collection.id}
      nftName={collection.name}
      image={collection.image}
      hoverimage={collection.hoverimage}
      id={collection.id}
      contract={collection.contract}
      contractIndex={collection.contractIndex}
      stakingRewardsTokenid={collection.stakingRewardsTokenid}
    />
  );
};

function StakingCards() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 font-mono text-spot-yellow bg-slate-900">
      {collection.map(renderCard)}
    </div>
  );
}

export default StakingCards;
