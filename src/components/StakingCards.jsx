import React, { useContext, useEffect, useState } from "react";
import {
  useMoralis,
  useWeb3ExecuteFunction,
  useMoralisWeb3Api,
} from "react-moralis";

//Production
function Card(props) {
  console.log("component rendering");
  const { Moralis } = useMoralis();
  const { account, isAuthenticated } = useMoralis();
  const userAddress = account;
  const chain = "avalanche";
  //mainnet address const spotContract = "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8";
  //testnet address const stakingContract = "0xAf8c4E9c77df06245F3718977f67a60CA7EAfF3D";
  const spotContract = "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8"; //mainnet
  const stakingContract = "0xfe5C0c66986Be8Fb16A5186Fd047eb035468db74"; //mainnet
  const [spotNftCount, setSpotNftCount] = useState([]);
  const [nftContractCount, setNftContractCount] = useState([]);
  const contractProcessor = useWeb3ExecuteFunction();
  const [timeLeftSecs, setTimeLeftSecs] = useState([]);
  const [displayTime, setDisplayTime] = useState([]);
  const [userClaimed, setUserClaimed] = useState(["0"]);
  const [claimButton, setClaimButton] = useState([]);
  const [stakeButton, setStakeButton] = useState([]);
  //const [userStaked, setUserStaked] = useState([]);
  //const [userStaking, setUserStaking] = useState([]);
  //const userStaked = "0";
  //const userStaking = "0";
  const [updateTimeButton, setUpdateTimeButton] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [NFTsRemaining, setNFTsRemaining] = useState([]);

  /*async function getNfts() {
    const options = {
      address: account,
      chain: chain,
      token_address: props.contract,
    };
    const countNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    const nftCount = countNFTs.result.length;
    setNftContractCount(nftCount);
    console.log("get spots");
  }

   async function getSpotNfts() {
    const options = {
      address: account,
      chain: chain,
      token_address: spotContract,
    };
    const spotNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    const spotCount = spotNFTs.result.length;
    setSpotNftCount(spotCount);
    console.log("get other nft");
  }*/

  //timefetch
  async function getTimeLeft() {
    const options = {
      chain: chain,
      address: stakingContract,
      function_name: "timeUntilClaimable",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address",
            },
            {
              internalType: "address",
              name: "_contract",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_contractIndex",
              type: "uint256",
            },
          ],
          name: "timeUntilClaimable",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      params: {
        _account: userAddress,
        _contract: props.contract,
        _contractIndex: props.contractIndex,
      },
    };

    const timeRemaining = await Moralis.Web3API.native.runContractFunction(
      options
    );

    setTimeLeftSecs(timeRemaining);

    let d = Math.floor(timeRemaining / (3600 * 24));
    let h = Math.floor((timeRemaining % (3600 * 24)) / 3600);
    let m = Math.floor((timeRemaining % 3600) / 60);
    let s = Math.floor(timeRemaining % 60);

    if (h > 0 || m > 0 || s > 0) {
      return setDisplayTime(`${d}d:${h}h:${m}m:${s}s`);
    } else {
      return setDisplayTime("Start Staking or Claim!");
    }
  }

  /*async function getUserClaimed() {
    const options = {
      chain: chain,
      address: contract,
      function_name: "userToIndexClaimed",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_contractIndex",
              type: "uint256",
            },
          ],
          name: "userToIndexClaimed",
          outputs: [
            {
              internalType: "uint256",
              name: "claimed",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      params: {
        address: "0x84b126C2e11689FD8A51c20e7d5beD6616F60558",
        _contractIndex: props.contractIndex,
      },
    };
    const hasClaimed = await Moralis.Web3API.native.runContractFunction(
      options
    );
    setUserClaimed(hasClaimed);
    console.log("id", props.id, "Claimed", hasClaimed);
    console.log("component rendering4");
  }
*/
  async function getNFTsRemaining() {
    const options = {
      chain: chain,
      address: props.rewardContract,
      function_name: "balanceOf",
      abi: [
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ],
      params: {
        account: stakingContract,
        id: props.stakingTokenId,
      },
    };
    const NFTsLeft = await Moralis.Web3API.native.runContractFunction(options);
    setNFTsRemaining(NFTsLeft);
  }

  async function stake() {
    let options = {
      contractAddress: stakingContract,
      functionName: "stake",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_contract",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_contractIndex",
              type: "uint256",
            },
          ],
          name: "stake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      params: {
        _contract: props.contract,
        _contractIndex: props.contractIndex,
      },
    };

    await contractProcessor.fetch({
      params: options,
      onError: (err) => {
        setIsLoading(false);
        alert(JSON.stringify(err.data.message));
      },
      onSuccess: (tx) => {
        tx.wait(5)
          .then(alert("Staking Successful"))
          .then(setIsLoading(false))
          .then(console.log(tx));
      },
    });
  }

  async function claim() {
    let options = {
      contractAddress: stakingContract,
      functionName: "claimStake",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_contract",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_contractIndex",
              type: "uint256",
            },
          ],
          name: "claimStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      params: {
        _contract: props.contract,
        _contractIndex: props.contractIndex,
      },
    };

    await contractProcessor.fetch({
      params: options,
      onError: (err) => {
        setIsLoading(false);
        alert(JSON.stringify(err.data.message));
      },
      onSuccess: (tx) => {
        tx.wait(5)
          .then(alert("Claimed!"))
          .then(setIsLoading(false))
          .then(console.log(tx));
      },
    });
    console.log("Claiming");
  }

  function claimVisible() {
    if (userClaimed === 1) {
      return setClaimButton(
        <button
          className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
font-mono text-l"
        >
          Claimed
        </button>
      );
    } else if (timeLeftSecs !== 0) return setClaimButton();
    else
      return setClaimButton(
        <button
          className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
          onClick={claim}
        >
          Claim
        </button>
      );
  }

  function stakeVisible() {
    if (userClaimed === 1) {
      return setStakeButton();
    } else if (timeLeftSecs > 0) {
      return setStakeButton(
        <button
          className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
font-mono text-l"
        >
          Staking
        </button>
      );
    } else
      return setStakeButton(
        <button
          className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
          onClick={stake}
        >
          Stake
        </button>
      );
  }

  function updateTimeVisible() {
    if (userClaimed === 1) {
      return setUpdateTimeButton();
    } else
      return setUpdateTimeButton(
        <button
          className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
          onClick={getTimeLeft}
        >
          Update Time Left
        </button>
      );
  }

  useEffect(() => {
    //getNfts();
    //getSpotNfts();
    claimVisible();
    stakeVisible();
    updateTimeVisible();
    getNFTsRemaining();
    // getUserClaimed();

    // getSupply();
  }, []);

  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
      <img className="w-full" src={props.image} alt={props.nftName}></img>
      {
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <h3>Stake Your {props.nftName}</h3>
          </div>
          <div className="text-slate-50 text-base">
            {/*} <h5>
              Number of {props.nftName} in Wallet: {nftContractCount}
            </h5>
            <h5>Number of Spots in Wallet: {spotNftCount}</h5>*/}
            <h5>
              Number of {props.rewardName} left to Claim: {NFTsRemaining}
            </h5>
            <h5>Staking Time until Reward: {props.stakingTime}</h5>
            <h5>Time Remaining until Claimable: {displayTime}</h5>

            <div className="flex flex-col space-y-4 py-4">
              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={getTimeLeft}
              >
                Update Time Left
              </button>

              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={stake}
              >
                Stake
              </button>

              <button
                className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l"
                onClick={claim}
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Card;
