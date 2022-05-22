import { NextPage } from "next";
import { ssgPostList } from "pages/api/v1/post";

const SSG: NextPage<ssgArticle> = (props: ssgArticle) => {
    const { article } = props
    return (
        <div>
            {
                article.map((item: string, index: number) => {
                    return <div key={index}>{item}</div>
                })
            }
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            article: await ssgPostList()
        }
    }
}

export default SSG