import { NextPage } from "next";
import { ssgPost, ssgPostList } from "pages/api/v1/post";


const Details: NextPage = (props: any) => {
    const  { article = "{}" } = props
    const content = JSON.parse(article)
    return (
        <div>
            <h1>标题：{content.data?.title}</h1>
            <p>日期：{content.data?.date}</p>
            <div dangerouslySetInnerHTML={{ __html: content.content as string }}></div>
        </div>
    )
}
export const getStaticPaths = async () => {
    const idList = await ssgPostList()
    
    return {
        paths: idList.map(id => ({params: {id}})),
        fallback: true
    }
}

export const getStaticProps = async (context: any) => {
    const { params } = context
    const data = await ssgPost(params.id)
    // 不序列化会一直报错
    const data2 = JSON.stringify(data)
    // console.log(data2, 'da')
    // 必须返回内容
    // 返回对象中必须有props参数
    console.log(data)
    return {
        props: {
            article: data2
        }
    }
}

export default Details

