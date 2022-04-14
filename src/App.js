import React, { useEffect } from "react";
import "./App.css";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Navbar } from "./components/Navbar";
import Authenticate from "./components/Authenticate";
import { useChain } from "react-moralis";
import Footer from "./components/Footer";
import Home from "./pages";
import Hero from "./components/Hero";
import Nfts from "./components/Nft";
import NftCollection from "./components/NftCollection";
import AnalogCollection from "./components/AnalogCollection";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;

{
  /*import React, {useState, useEffect} from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero'
import { Routes, BrowserRouter as Router,Route } from 'react-router-dom';
import Team from './pages/team';
import Contact from './pages/contact';
import Home from './pages';
import Auth from './components/Authenticate'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('i resized')
    }
  }

  window.addEventListener('resize', hideMenu)

  return () => {
    window.removeEventListener('resize', hideMenu);
  }
})

  return (
    <>
     <Navbar toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle}/>
     <Auth />
     <Hero />
     
     <Routes>
       <Router path="/" exact component={Home} />
       <Router path="/contact" component={Contact} />
       <Router path="/team" component={Team} />
     </Routes>
     
    
    </>
  );
}

export default App;
*/
}
