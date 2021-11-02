import { createContext, useContext, ReactNode } from 'react'
import { useSigningCosmWasmClient } from './CosmWasmHooks'
import { ISigningCosmWasmClientContext } from './CosmWasmHooks'

let CosmWasmContext: any
let { Provider } = (CosmWasmContext = 
	createContext({
		walletAddress: '',
		signingClient: null,
		loading: false,
		error: null,
		connectWallet: () => {},
		disconnect: () => {},
	}))

// export const useSigningClient = (): ISigningCosmWasmClientContext => 
// 	useContext(CosmWasmContext)

export const useSigningClient = () => useContext(CosmWasmContext);

export const SigningCosmWasmProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	const value = useSigningCosmWasmClient()
	return <Provider value={value}>{children}</Provider>
}