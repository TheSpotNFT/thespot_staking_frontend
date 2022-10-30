import React, { useEffect, useState, useCallback } from "react";
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
import Evolve from "./pages/Evolve";
import Team from "./pages/team";
import Learning from "./pages/learning";
import Expand from "./pages/Expand";
import Blender from "./pages/Blender";
import Bizness from "./pages/Bizness";
import { web3ModalSetup } from "./helpers/Web3Modal";
import { ethers } from "ethers";

function App() {
  //adds for auth
  const [account, setAccount] = useState("");
  const [txProcessing, setTxProcessing] = useState(false);
  const [web3Provider, setWeb3Provider] = useState(null);
  const web3Modal = web3ModalSetup();
  
  const Web3Api = useMoralisWeb3Api();

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    if (
      web3Provider &&
      web3Provider.provider &&
      typeof web3Provider.provider.disconnect == "function"
    ) {
      await web3Provider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setWeb3Provider(new ethers.providers.Web3Provider(provider));

    provider.on("chainChanged", (chainId) => {
      console.log(`Chain changed to -- ${chainId}`);
      setWeb3Provider(new ethers.providers.Web3Provider(provider));
      setTimeout(() => {
        window.location.reload();
      }, 1);
    });

    provider.on("accountsChanged", () => {
      console.log(`Account changed`);
      setWeb3Provider(new ethers.providers.Web3Provider(provider));
    });

    // Subscribe to session disconnection
    provider.on("disconnect", (code, reason) => {
      console.log("Disconnecting...");
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
    // eslint-disable-next-line
  }, [setWeb3Provider]);

  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  useEffect(() => {
    const getAddress = async () => {
      if (web3Provider && web3Provider.getSigner()) {
        const newAddress = await web3Provider.getSigner().getAddress();
        setAccount(newAddress);
      }
    };
    getAddress();
  }, [web3Provider]);


  return (
    <div className="bg-slate-700">
      <Navbar account={account}
            web3Modal={web3Modal}
            loadWeb3Modal={loadWeb3Modal}
            web3Provider={web3Provider}
            setWeb3Provider={setWeb3Provider}
            logoutOfWeb3Modal={logoutOfWeb3Modal}/>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/analog" exact element={<AnalogCollection 
            account={account}
            web3Modal={web3Modal}
            loadWeb3Modal={loadWeb3Modal}
            web3Provider={web3Provider}
            setWeb3Provider={setWeb3Provider}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
            txProcessing={txProcessing}
            setTxProcessing={setTxProcessing}/>} />
        <Route path="/staking" exact element={<Staking 
            account={account}
            web3Modal={web3Modal}
            loadWeb3Modal={loadWeb3Modal}
            web3Provider={web3Provider}
            setWeb3Provider={setWeb3Provider}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
            txProcessing={txProcessing}
            setTxProcessing={setTxProcessing}/>} />
        <Route path="/evolve" exact element={<Evolve />} />
        <Route path="/team" exact element={<Team />}/>
        <Route path="/learning" exact element={<Learning />}/>
        <Route path="/expand" exact element={<Expand />}/>
        <Route path="/blender" exact element={<Blender />}/>
        <Route path="/bizness" exact element={<Bizness/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//<Route path="/map" exact element={<MapBoard />} />
