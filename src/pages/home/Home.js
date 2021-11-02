import React from 'react'
//import Poll from '../../poll/Poll'
import Nav from './Nav'
import {useSigningCosmWasmClient} from '../../cosmwasm/CosmWasmHooks'
import {useSigningClient} from "../../cosmwasm/CosmWasmContext"
import WalletLoader from './WalletLoader'

//export default function Layout({ children }: { children: ReactNode }) {

const Home = () => {
	const { walletAddress } = useSigningClient();

	return (
		<WalletLoader>
			<h1 className="text-6xl font-bold">
				Welcome to {process.env.REACT_APP_PUBLIC_CHAIN_NAME} #!
			</h1>

			<div className="mt-3 text-2xl">
				Your wallet address is:{' '}
				<pre className="font-mono break-all whitespace-pre-wrap">
					{walletAddress}
				</pre>
			</div>
		</WalletLoader>
	)
}

/*
const Home = () => {

	return (
		<div className='home'>
			<h1>Home</h1>
			<div class="poll">
				<div class="question"></div>
				<div class="answers"></div>
			</div>
		</div>
	);
	
};

*/
export default Home;
