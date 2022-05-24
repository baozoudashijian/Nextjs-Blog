import { NextApiHandler, NextPage } from "next";
import { NextRequest } from "next/server";
import { useEffect } from "react";
import parser from 'ua-parser-js'

const Agent: NextPage = (props: any) => {
    // useEffect只会在前端执行.
    useEffect(() => {
        console.log(document.body.clientWidth)
        console.log(props)
    }, [])
    const { ua } = props
    
    return (
        <div>当前访问的浏览器是{ua.browser.name}</div>
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