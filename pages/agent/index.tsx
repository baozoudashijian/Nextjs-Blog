import { NextApiHandler, NextPage } from "next";
import { NextRequest } from "next/server";
import { useCallback, useEffect } from "react";
import parser from 'ua-parser-js'

const Agent: NextPage = (props: any) => {
    // useEffect只会在前端执行.
    // 学习typeORM
    useEffect(() => {
        console.log('学习typeORM')
        console.log(document.body.clientWidth)
        console.log(props)
    }, [])

    const handleClick = useCallback(() => {
        console.log(document.body.clientHeight)
    }, [])

    const { ua } = props
    
    return (
        <div onClick={handleClick}>当前访问的浏览器是{ua.browser.name}</div>
    )
}

export default Agent

export async function getServerSideProps(context: any) {
    let ua = parser(context.req.headers['user-agent']);
    return {
      props: {
        ua: JSON.parse(JSON.stringify(ua))
      }, // will be passed to the page component as props
      
    }
  }