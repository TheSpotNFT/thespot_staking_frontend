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
      stakingTime={collection.stakingTime}
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
    <div className="px-10 py-4 gap-10 font-mono text-spot-yellow bg-slate-900">
      Stake your NFTs in either our non-custodial single sided staking or our
      non-custodial staking pairs. Your NFTs never leave your wallet and you can
      stake as many at the same time as you would like. We will always be adding
      staking pairs and rewards to keep yours eyes on our discord, twitter and
      this page! Staking times vary for each reward.
      <div className="py-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 font-mono text-spot-yellow bg-slate-900">
        {collection.map(renderCard)}
      </div>
    </div>
  );
}

export default StakingCards;
