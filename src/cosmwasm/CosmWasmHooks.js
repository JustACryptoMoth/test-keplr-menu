import React, {useState} from 'react'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { connectKeplr }  from './Keplr'

// export interface ISigningCosmWasmClientContext {
// 	walletAddress: string,
// 	signingClient: SigningCosmWasmClient,
// 	loading: boolean,
// 	error: any,
// 	connectWallet: any,
// 	disconnect: Function
// }

const PUBLIC_RPC_ENDPOINT = process.env.REACT_APP_PUBLIC_CHAIN_RPC_ENDPOINT || ''
const PUBLIC_CHAIN_ID = process.env.REACT_APP_PUBLIC_CHAIN_ID

export const useSigningCosmWasmClient = (): ISigningCosmWasmClientContext => {
	const [walletAddress, setWalletAddress] = useState('')
	const [signingClient, setSigningClient] = useState<SigningCosmWasmClient>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const connectWallet = async () => {
		setLoading(true)

		try {
			await connectKeplr();

			// enable website to access Keplr
			await (window ).keplr.enable(PUBLIC_CHAIN_ID);

			// get offline signer for signing transactions
			const offlineSigner = await (window).getOfflineSigner(PUBLIC_CHAIN_ID);

			// make client
			const client = await SigningCosmWasmClient.connectWithSigner(
				PUBLIC_RPC_ENDPOINT,
				offlineSigner
			)
			setSigningClient(client)

			// get user address
			const [{address}] = await offlineSigner.getAccounts()
			setWalletAddress(address)

			// finished loading
			setLoading(false)

		} catch(error) {
			setError(error)
		}
	}

	const disconnect = () => {
		if(signingClient) {
			signingClient.disconnect();
		}
		setWalletAddress('')
		setSigningClient(null)
		setLoading(false)
	}

	return {
		walletAddress,
		signingClient,
		loading,
		error,
		connectWallet,
		disconnect,
	}

}


/*

const CosmWasm = () => {



return (
	<>
	</>
	)

}


export default CosmWasm

*/

