import React from 'react';
import evolutionCollection from "../EvolveCollection";
import Card from "../components/EvolveCards";

const renderCard = (evolutionCollection, index) => {
    return (
        <Card
        key={evolutionCollection.id}
        nftName={evolutionCollection.name}
        image1={evolutionCollection.image1}
        image2={evolutionCollection.image2}
        image3={evolutionCollection.image3}
        image4={evolutionCollection.image4}
        image5={evolutionCollection.image5}
        image6={evolutionCollection.image6}
        image7={evolutionCollection.image7}
        image8={evolutionCollection.image8}
        image9={evolutionCollection.image9}
        id={evolutionCollection.id}
      />
    );
  };

function Evolve() {
    return (
        <div className="px-10 py-4 gap-10 font-mono text-spot-yellow bg-slate-900">
          Evolve
          <div className="py-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-8 gap-10 font-mono text-spot-yellow bg-slate-900">
            {evolutionCollection.map(renderCard)}
          </div>
        </div>
      );
}

export default Evolve
