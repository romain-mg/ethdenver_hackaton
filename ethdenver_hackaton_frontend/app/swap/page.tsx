"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import { getAddress, isAddress } from "ethers";
import {
  writeContract as coreWriteContract,
  waitForTransactionReceipt,
} from "@wagmi/core";
import indexFund from "@/app/abi/indexFundAbi.json";
import mockUSDC from "@/app/abi/mockUSDCAbi.json";
import mockPSV from "@/app/abi/mockPSVAbi.json";
import mockWBTC from "@/app/abi/mockWBTCAbi.json";
import mockWETH from "@/app/abi/mockWETHAbi.json";
import { type WriteContractReturnType } from "@wagmi/core";
import { Input } from "@/components/ui/input";
import { arbitrumSepolia } from "wagmi/chains";
import { useState } from "react";
import { config } from "@/app/config";

export default function Home() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();
  const [stablecoinAmount, setStablecoinAmount] = useState(0);
  const [sharesToBurn, setSharesToBurn] = useState(0);

  function handleInvest() {
    console.log("handleInvest triggered");
    writeContract({
      abi: mockUSDC.abi,
      address: mockUSDC.address as `0x${string}`,
      functionName: "approve",
      args: [
        indexFund.address,
        BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
      ],
    });
    console.log("muckusddc approved");

    writeContract({
      abi: indexFund.abi,
      address: indexFund.address as `0x${string}`,
      functionName: "mintShare",
      args: [BigInt(stablecoinAmount), 100000, 3000],
    });
  }

  function handleBurn() {
    writeContract({
      abi: mockPSV.abi,
      address: mockPSV.address as `0x${string}`,
      functionName: "approve",
      args: [
        indexFund.address,
        BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
      ],
    });

    writeContract({
      abi: indexFund.abi,
      address: indexFund.address as `0x${string}`,
      functionName: "burnShare",
      args: [BigInt(sharesToBurn), true, 100000, 3000],
    });
  }

  const userData = useReadContract({
    abi: indexFund.abi,
    address: indexFund.address as `0x${string}`,
    functionName: "getUserData",
    args: [address],
    chainId: arbitrumSepolia.id,
  }) as { data: bigint[] };

  console.log("data", userData.data);

  const userMintedShares = userData.data ? userData.data[0] : "Loading...";
  const userTokenAAmount = userData.data ? userData.data[1] : "Loading...";
  const userTokenBAmount = userData.data ? userData.data[2] : "Loading...";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <main className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Crypto Index Fund</h1>
          <ConnectButton />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Invest in Index Fund</h2>
            <Input
              type="number"
              placeholder="Stablecoin Amount"
              value={stablecoinAmount}
              onChange={(e) => setStablecoinAmount(Number(e.target.value))}
              className="mb-4 p-2 border rounded"
            />
            <button
              onClick={handleInvest}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Invest
            </button>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Burn Shares</h2>
            <Input
              type="number"
              placeholder="Shares to Burn"
              value={sharesToBurn}
              onChange={(e) => setSharesToBurn(Number(e.target.value))}
              className="mb-4 p-2 border rounded"
            />
            <button
              onClick={handleBurn}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Burn
            </button>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Token Balances</h2>
            <p className="text-lg">
              Minted Shares:{" "}
              {userMintedShares ? userMintedShares.toString() : "0"}
            </p>
            <p className="text-lg">
              Token A (WBTC): {userTokenAAmount?.toString()}
            </p>
            <p className="text-lg">
              Token B (WETH): {userTokenBAmount?.toString()}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
