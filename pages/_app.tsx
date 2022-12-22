import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { Poppins } from '@next/font/google'
import Header from '../components/layout/Header'
const roboto = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {

    return <>
        <div className="isolate bg-white">
            <Header />
            <main className={roboto.className}>
                <Component {...pageProps} />
            </main>
        </div>
    </>
}
