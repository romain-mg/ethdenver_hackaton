import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [arbitrumSepolia],
  transports: {
    [arbitrumSepolia.id]: http(
      "https://arb-sepolia.g.alchemy.com/v2/QfUVCD1KuVfu_rCSuHm7MOtNu0okm_Kg"
    ),
  },
});

// Sets if the example should run locally or on chain
export enum Environment {
  LOCAL,
  MAINNET,
  ARBITRUM_ONE,
}

// Inputs that configure this example to run
export interface ExampleConfig {
  env: Environment;
  rpc: {
    local: string;
    mainnet: string;
    arbitrum_sepolia: string;
  };
}

// Example Configuration

export const etheresConfig: ExampleConfig = {
  env: Environment.ARBITRUM_ONE,
  rpc: {
    local: "http://localhost:8545",
    mainnet:
      "https://eth-mainnet.g.alchemy.com/v2/10qhLkNyizm_E2uz4PT_ZYtwAquQQ4Wb",
    arbitrum_sepolia:
      "https://arb-sepolia.g.alchemy.com/v2/10qhLkNyizm_E2uz4PT_ZYtwAquQQ4Wb",
  },
};

export const EnumToRpc = {
  [Environment.LOCAL]: etheresConfig.rpc.local,
  [Environment.MAINNET]: etheresConfig.rpc.mainnet,
  [Environment.ARBITRUM_ONE]: etheresConfig.rpc.arbitrum_sepolia,
};
