import "@covalenthq/goldrush-kit/styles.css";
import {
  GoldRushProvider,
  NFTWalletTokenListView,
  TokenBalancesListView,
  TokenTransfersListView,
  AddressActivityListView,
} from "@covalenthq/goldrush-kit";
import { useAccount } from "wagmi";

export const CovalentNftCard = () => {
  const { address } = useAccount();

  return (
    <main className="">
      <GoldRushProvider
        apikey={
          process.env.NEXT_PUBLIC_API_KEY || "cqt_rQVDvrpg69d899FKXHyXKW6RCWmG"
        }
        mode="light"
        color="slate"
      >
        <NFTWalletTokenListView
          address={address}
          chain_names={["avalanche-mainnet", "avalanche-testnet"]}
        />
      </GoldRushProvider>
    </main>
  );
};

export const CovalentTokenCard = () => {
  const { address } = useAccount();

  return (
    <main className="">
      <GoldRushProvider
        apikey={
          process.env.NEXT_PUBLIC_API_KEY || "cqt_rQVDvrpg69d899FKXHyXKW6RCWmG"
        }
        mode="light"
        color="slate"
      >
        <TokenBalancesListView
          chain_names={["avalanche-mainnet", "avalanche-testnet"]}
          hide_small_balances
          address={address}
        />
      </GoldRushProvider>
    </main>
  );
};
