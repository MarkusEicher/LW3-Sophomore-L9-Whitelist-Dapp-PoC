import {
    GaslessWallet,
    GaslessWalletConfig,
  } from "@gelatonetwork/gasless-wallet";
  import { ethers } from "ethers";

  const provider = new ethers.providers.JsonRpcProvider(); 
  
  const eoaProvider:
  | ethers.providers.ExternalProvider
  | ethers.providers.JsonRpcFetchFunc = window.ethereum; 

   

const gaslessWalletConfig: GaslessWalletConfig = {
    apiKey: "1BALANCE_API_KEY",
};

const gaslessWallet = new GaslessWallet(eoaProvider, gaslessWalletConfig);
await gaslessWallet.init();

const isGaslessWalletAlreadyDeployed = await gaslessWallet.isDeployed();

const {data} = await mintingContract.mint()
const { taskId } = await gaslessWallet.sponsorTransaction(
  mintingContract.address,
  data
);