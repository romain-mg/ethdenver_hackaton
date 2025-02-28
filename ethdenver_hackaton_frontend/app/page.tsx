"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4 px-8 bg-white shadow">
        <div className="text-2xl font-bold">Passive</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Swap
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <ConnectButton />
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Invest in Crypto Passively, Without Abandoning your Custory
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your gateway to effortless crypto investments. Get exposure to baskets
          of tokens with a single purchase. Sit back, relax and watch your
          portfolio grow with Passive.
        </p>

        {/* Aave-style “bar chart” illustration */}
        <div className="flex justify-center items-end space-x-4 mt-16">
          {/* Circle 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            <div className="w-2 bg-blue-500 h-8"></div>
          </div>
          {/* Circle 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-500 rounded-full"></div>
            <div className="w-2 bg-red-500 h-16"></div>
          </div>
          {/* Circle 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
            <div className="w-2 bg-yellow-500 h-12"></div>
          </div>
          {/* Circle 4 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full"></div>
            <div className="w-2 bg-green-500 h-20"></div>
          </div>
          {/* Circle 5 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
            <div className="w-2 bg-purple-500 h-32"></div>
          </div>
        </div>

        <Link href="/swap" className={buttonVariants({ variant: "default" })}>
          Get Started
        </Link>
      </main>
    </div>
  );
}
