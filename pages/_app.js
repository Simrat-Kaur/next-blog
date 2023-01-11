import Navbar from "../components/Navbar";
import Head from "next/head";
import '../styles/globals.css'

function App ({ Component, pageProps }){
    console.log('[App] render');
    return (
        <>
            <Head>
                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <header>
                <Navbar />
            </header>
            <Component {...pageProps} />
        </>
    );
}

export default App;