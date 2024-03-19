"use client";
import "dotenv";
import { ethers } from "ethers";
import { useState } from "react";

function Wallet() {
  const networks = {
    sepolia: {
      chainId: `0x${Number(11155111).toString(16)}`,
      chainName: "Sepolia Testnet",
      nativeCurrency: {
        name: "SepoliaETH",
        symbol: "SepoliaETH",
        decimals: 18,
      },
      rpcUrls: ["https://sepolia.infura.io/v3/"],
      blockExplorerUrls: ["https://sepolia.etherscan.io/"],
    },
  };
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  async function connectWallet() {
    //@ts-ignore
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(
      //@ts-ignore
      window.ethereum,
      "any"
    );
    const network = await provider.getNetwork();
    if (network.chainId !== 11155111) {
      //@ts-ignore
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{ ...networks["sepolia"] }],
      });
    }
    const account = provider.getSigner();
    setAddress(await account.getAddress());
    setBalance(ethers.utils.formatEther(await account.getBalance()).toString());
  }

  return <div onClick={connectWallet}>Wallet {balance}</div>;
}

export default Wallet;
