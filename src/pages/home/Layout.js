import { ReactNode } from 'react'
import Nav from './Nav'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content">

			<Nav />
			<main className="flex flex-col items-center justify-center w-full flex-1 p-2 md:px-20 text-center">
				{children}
			</main>
			<footer className="flex items-center justify-center w-full h24 border-t">
				Powered by{' '}
				<a
					className="pl-1 link link-primary link-hover"
					href="https://github.com/cosmos/cosmjs"
				>
					CosmJS
				</a>
				<span className="pl-1"> and</span>
				<a 
					className="pl-1 link link-primary link-hover"
					href="https://keplr.app/"
				>
					Keplr
				</a>
			</footer>
		</div>
	)
}








