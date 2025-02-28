// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { Ether, SUPPORTED_CHAINS, Token } from "@uniswap/sdk-core";

// Currencies and Tokens

export const ETH = Ether.onChain(SUPPORTED_CHAINS[0]);

export const ARBITRUM_ONE = SUPPORTED_CHAINS[4];

export const WETH_TOKEN = new Token(
  ARBITRUM_ONE,
  "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  18,
  "WETH",
  "Wrapped Ether"
);

export const USDC_TOKEN = new Token(
  ARBITRUM_ONE,
  "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  6,
  "USDC",
  "USD//C"
);

export const WBTC_TOKEN = new Token(
  ARBITRUM_ONE,
  "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  6,
  "WBTC",
  "Wrapped Bitcoin"
);

// ABI's

export const ERC20_ABI = [
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",

  // Authenticated Functions
  "function transfer(address to, uint amount) returns (bool)",

  // Events
  "event Transfer(address indexed from, address indexed to, uint amount)",
];
