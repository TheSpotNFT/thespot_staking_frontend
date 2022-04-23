import React, { useEffect } from "react";
import "./App.css";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Navbar } from "./components/Navbar";
import Authenticate from "./components/Authenticate";
import { useChain } from "react-moralis";
import Footer from "./components/Footer";
import NftCollection from "./components/NftCollection";
import AnalogCollection from "./components/AnalogCollection";
import { Routes, Route } from "react-router-dom";
import TraitDashboard from "./components/TraitDashboard";
import MapBoard from "./components/Map";
import "leaflet/dist/leaflet.css";

function App() {
  const {
    isWeb3Enabled,
    isWeb3EnableLoading,
    enableWeb3,
    isAuthenticated,
    account,
  } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const { switchNetwork, chainId, chain } = useChain();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
      enableWeb3({ provider: connectorId });
    }
    //(chainId !== '0xa86a')&&switchNetwork("0xa86a") MAINNET
    //(chainId !== '0xa869')&&switchNetwork("0xa869") FUJI
  }, [isAuthenticated, isWeb3Enabled, chain]);

  if (!isAuthenticated || account === null) {
    return <Authenticate />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<NftCollection />} />
        <Route path="/analog" exact element={<AnalogCollection />} />
        <Route path="/traitdashboard" exact element={<TraitDashboard />} />
        <Route path="/map" exact element={<MapBoard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
