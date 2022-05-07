import React from "react";
import collection from "../StakingCollections";
import Card from "./StakingCards";
import SpotCard from "./SpotStakingCard";
import spotStakingCollection from "../SpotStaking";

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
      stakingTokenId={collection.stakingTokenId}
      rewardContract={collection.rewardContract}
      rewardName={collection.rewardName}
    />
  );
};

/*const renderSpotCard = (spotStakingCollection, index) => {
  return (
    <SpotCard
      key={spotStakingCollection.id}
      nftName={spotStakingCollection.name}
      image={spotStakingCollection.image}
      id={spotStakingCollection.id}
      contract={spotStakingCollection.contract}
      contractIndex={spotStakingCollection.contractIndex}
      stakingTokenId={spotStakingCollection.stakingTokenId}
      rewardContract={spotStakingCollection.rewardContract}
    />
  );
};
*/
function StakingCards() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 font-mono text-spot-yellow bg-slate-900">
      {collection.map(renderCard)}
    </div>
  );
}

export default StakingCards;
