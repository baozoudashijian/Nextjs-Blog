import Head from 'next/head'
// import 'styles/global.css'
import '../styles/normal.css'
import variables from 'styles/variables.module.scss'

export default function App({ Component, pageProps }) {
    pageProps = {...pageProps, variables}
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