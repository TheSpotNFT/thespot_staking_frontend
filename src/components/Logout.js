import React from "react";
import { useMoralis } from "react-moralis";
//import Authenticate from "./Authenticate";
import { useChain } from "react-moralis";

function LogoutButton({
  account,
  web3Modal,
  loadWeb3Modal,
  web3Provider,
  setWeb3Provider,
  logoutOfWeb3Modal,
}) {
  // const { logout, isAuthenticating, account } = useMoralis();
  // const { switchNetwork, chainId } = useChain();
  if (account) {
    return (
      <div className="text-right md:flex align-middle py-0">
        <div className="align-middle py-2">
          {/* <h1 className="text-slate-600 text-right font-mono px-10 py-0"><b>Wallet:</b> {(chainId==="0xa86a")?account.substring(0,5)+'...'+account.slice(-4):<button className="text-[red]" onClick={()=>switchNetwork("0xa86a")}>Switch to Avalanche!</button>}</h1> */}
        </div>
        <button
          className="rounded-lg px-4 py-0 border-4 border-white text-xl font-mono font-bold text-slate-700 
            hover:bg-white hover:border-black hover:text-gray-900 duration-300"
          onClick={() => logoutOfWeb3Modal()}
        >
          {account.substring(0, 5) +
            "..." +
            account.substring(account.length - 4)}
        </button>
      </div>
    );
  }
  return (
    <div className="text-right md:flex align-middle py-0">
      <div className="align-middle py-2">
        <button
          className="rounded-lg px-4 py-0 border-4 border-white text-xl font-mono font-bold text-slate-700 
            hover:bg-white hover:border-black hover:text-gray-900 duration-300"
          onClick={() => loadWeb3Modal()}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LogoutButton;
