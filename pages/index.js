import Head from 'next/head'
import Link from 'next/link'
import styles from 'components/style'
import  Post from "pages/posts/index.tsx"

export default function Home(props) {
  // todo 分析后台管理系统页面
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" key="title" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h1>客户端渲染（BSR）</h1>
        <Link href="/article">跳转Atcile页面</Link>
        <Link href="/posts">跳转文章列表</Link>
        <Post />
        <h1>客户端渲染（SSG）</h1>
        <Link href="/ssg">跳转文章列表</Link>
      </main>
      {/* {s} */}
      <style jsx>{styles}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
