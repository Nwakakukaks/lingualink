import { useWeb3Modal } from "@web3modal/wagmi/react";
import "@particle-network/connect-react-ui/dist/index.css";
import { ConnectButton, } from "@particle-network/connect-react-ui";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';

export const ConnectionButton = () => {

  const { open } = useWeb3Modal();
  const { openConnectModal } = useConnectModal();
  

  return (
    <>
    {openConnectModal && (
      <button
        onClick={() => openConnectModal()}
        className="rounded-lg bg-gray-900 px-6 py-2 text-white h-12 text-lg hover:bg-black1"
      >
        <div className="flex space-x-3">
          <p>Connect wallet</p>
          <img src="/wallet.svg" />
        </div>
      </button>)}
    </>
  );
}

// Custom ConnectButton utilization
export const ParticleConnect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        openChainModal,
        accountLoading,
      }) => {
        return (
          <div>
            <button
              onClick={openConnectModal}
              disabled={!!account}
              className="rounded-lg bg-gray-900 px-6 py-2 text-white h-12 text-lg hover:bg-black1"
            >
              <div className="flex space-x-3">
                <p>Particle connect</p>
                <img src="/wallet.svg" />
              </div>
            </button>
            {/* <br />
            <br />
            <button onClick={openAccountModal} disabled={!account}>
              Open Account
            </button>
            <br />
            <br />
            <button onClick={openChainModal} disabled={!account}>
              Open Switch Network
            </button>
            <div>
              <h3>account</h3>
              <p>{account}</p>
            </div> */}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
