import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

type Article = {
    name?: string
}

export default function Post() {

    const [article, setArticle] = useState<Article>({name: ''})

    useEffect(() => {
        axios.get('/api/v1/post').then((res: AxiosResponse) => {
            const { data } = res
            setArticle(data)
        })
    }, [])

    return (
        <div className="wrapper">
            {article.name}

            <style jsx global>
                {`
                    body {
                        background-color: #fff;
                    }
                    .wrapper {
                        color: #000;
                    }
                `
                }
            </style>
        </div>

    )
}