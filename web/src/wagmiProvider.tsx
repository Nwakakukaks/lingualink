import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import {
  argentWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import { ParticleNetwork } from "@particle-network/auth";
import { arbitrum, mainnet, optimism, polygon } from "wagmi/chains";

import { particleWallet } from "@particle-network/rainbowkit-ext";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "2c5136315963c8541beaca2234fedf25";

new ParticleNetwork({
  projectId: "fa28478e-a9d9-4d69-a8a8-702bb0291de6",
  clientKey: "cTbp0AjrvUBEPo2Zs0We08kWF2kH76svkQLmaWFO",
  appId: "4d065c92-20c3-48fa-8cff-5e340d510af5",
});

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

const particleWallets = [
  particleWallet({ chains, authType: "google" }),
  particleWallet({ chains, authType: "facebook" }),
  particleWallet({ chains, authType: "apple" }),
  particleWallet({ chains }),
];

const popularWallets = {
  groupName: "Popular",
  wallets: [
    ...particleWallets,
    injectedWallet({ chains }),
    rainbowWallet({
      chains,
      projectId:projectId,
    }),
    coinbaseWallet({ appName: "RainbowKit demo", chains }),
    metaMaskWallet({
      chains,
      projectId:projectId,
    }),
    walletConnectWallet({
      chains,
      projectId:projectId,
    }),
  ],
};

const connectors = connectorsForWallets([
  popularWallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({
        chains,
        projectId:projectId,
      }),
      trustWallet({
        chains,
        projectId:projectId,
      }),
      omniWallet({
        chains,
        projectId:projectId,
      }),
      imTokenWallet({
        chains,
        projectId:projectId,
      }),
      ledgerWallet({
        chains,
        projectId:projectId,
      }),
    ],
  },
]);

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function WagmiProvider(props: any) {
  return (
    <>
      {config && (
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains}>
            {props.children}
          </RainbowKitProvider>
        </WagmiConfig>
      )}
    </>
  );
}

export default WagmiProvider;
