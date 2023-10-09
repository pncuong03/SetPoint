import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { avalanche, bsc, mainnet } from '@wagmi/core/chains'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'


import { Build } from "./pages/build/Build";
import { Flexible2 } from "./pages/flexible/Flexible2";
import { Footer } from "./pages/footer/Footer";
import { Header } from "./pages/header/Header";
import { Intro } from "./pages/intro/Intro";
import { Power } from "./pages/power/Power";
import { Unlock } from "./pages/unlock/Unlock";
import { WhySetpoint } from "./pages/whysetpoint/WhySetpoint";
import { NetworkSwitcher } from './pages/header/SwitchNetwork';
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, bsc, avalanche],
  [publicProvider()],
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
        <NetworkSwitcher />
      
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
