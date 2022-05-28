import React, { useEffect } from "react";
import "./App.css";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Navbar } from "./components/Navbar";
import Authenticate from "./components/Authenticate";
import { useChain } from "react-moralis";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AnalogCollection from "./pages/AnalogCollection";
import { Routes, Route } from "react-router-dom";
import TraitDashboard from "./components/TraitDashboard";
import Staking from "./pages/Staking";


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
    <div className="bg-slate-700">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/analog" exact element={<AnalogCollection />} />
        <Route path="/staking" exact element={<Staking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//<Route path="/map" exact element={<MapBoard />} />
