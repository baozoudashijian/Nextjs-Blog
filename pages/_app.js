import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <div className="zrj">
            <Head>
                <title>My Blog</title>
                <link rel="icon" href="/favicon.ico" key="title" />
            </Head>
            <Component {...pageProps} />
        </div>

    )
}