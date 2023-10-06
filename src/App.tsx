import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { Build } from "./pages/build/Build";
import { Flexible2 } from "./pages/flexible/Flexible2";
import { Footer } from "./pages/footer/Footer";
import { Header } from "./pages/header/Header";
import { Intro } from "./pages/intro/Intro";
import { Power } from "./pages/power/Power";
import { Unlock } from "./pages/unlock/Unlock";
import { WhySetpoint } from "./pages/whysetpoint/WhySetpoint";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
)
 
// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),    
  ],
  publicClient,
  webSocketPublicClient,
})
function App() {
  return (
    <WagmiConfig config={config}>
      <Header />
      <main className="">
        <Intro />
        <WhySetpoint />
        <Power />
        <Build />
        <Flexible2 />
        <Unlock />
        <Footer />
      </main>
      </WagmiConfig>

  );
}
export default App;
