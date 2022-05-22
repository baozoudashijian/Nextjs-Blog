import axios, { AxiosResponse } from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Post() {

    const [article, setArticle] = useState<Article>([])

    useEffect(() => {
        axios.get('/api/v1/post').then((res: AxiosResponse) => {
            const { data } = res
            setArticle(data)
        })
    }, [])

    return (
        <div className="wrapper">
            {
                article.map((item: string, index: number) => {
                    return <p key={index}><Link href={{
                        pathname: '/posts/detail',
                        query: { id: item },
                      }}>{item}</Link></p>
                })
            }
        </div>

    )
}