import { useNetwork, useSwitchNetwork } from 'wagmi'

export const NetworkSwitcher = () => {
    const { chain } = useNetwork()
    const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();

   
    return (
      <div className='text-end pr-10'>

      
        {chain && <div>Connected to {chain.name}</div>}
        
        {chains.map((x) => (
          <button
          className="btn btn-coral-simple !px-[12px] !py-[8px]"
            disabled={!switchNetwork || x.id === chain?.id}
            key={x.id}
            onClick={() => switchNetwork?.(x.id)}
          >
            {x.name}
            {isLoading && pendingChainId === x.id && ' (switching)'}
          </button>
        ))}
   
        <div>{error && error.message}</div>
        </div>
    )
}
