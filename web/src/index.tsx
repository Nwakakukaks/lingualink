import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, avalanche, avalancheFuji, mainnet } from "viem/chains";
import { AuthType } from "@particle-network/auth-core";
import {
  AuthCoreContextProvider,
  PromptSettingType,
} from "@particle-network/auth-core-modal";
import { ModalProvider } from "@particle-network/connect-react-ui"; // @particle-network/connectkit to use Auth Core
import { WalletEntryPosition } from "@particle-network/auth";
import {
  Ethereum,
  EthereumGoerli,
  EthereumSepolia,
  Avalanche,
  AvalancheTestnet,
  BNBChainTestnet,
  BNBChain,
} from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";
import { ContractProvider } from "./ContractContext";
import WagmiProvider from "./wagmiProvider";

import("buffer").then(({ Buffer }) => {
  window.Buffer = Buffer;
});

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "2c5136315963c8541beaca2234fedf25";

// 2. Create wagmiConfig
const metadata = {
  name: "Lingualink",
  description: "Lingualink built with love by Team3",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
});
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <ContractProvider>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={chakraTheme}>
          <WagmiProvider>
            <App />
          </WagmiProvider>
        </ChakraProvider>
      </CacheProvider>
    </ContractProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
