import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import axios from "axios"

type ContentProps = {
    content?: string | '';
    data?: {
        title: string | '';
        date: string | '';
    }
}

export default function Detail() {

    const [content, setContent] = useState<ContentProps>({content: '', data: {title: '', date: ''}})
    const router = useRouter()
    useEffect(() => {
        if(router.query.id ) {
            getData(router.query.id as string)
        }
    }, [router.query.id])

    let getData = async (id: string) => {
        const { data } = await axios.get('/api/v1/post?id=' + id)
        console.log(data)
        setContent(data)
    }

    return (
        <div>
            <h1>标题：{content.data?.title}</h1>
            <p>日期：{content.data?.date}</p>
            <p dangerouslySetInnerHTML={{ __html: content.content as string }}></p>
        </div>
    )
}