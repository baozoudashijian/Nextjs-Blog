import Link from "next/link";
import styles from "styles/Article.module.css"
import png from 'public/109951166463602925.jpeg'
import Image from 'next/image'

console.log(png, 'png')
export default function Article(props) {

    console.log(props, 'article')

    return (
        <>
            <div className={`article bg ${styles.size}`}>文章</div>
            <div>
                <Image src={png} />
                <Image
                    src="/109951167165747391.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>
            <Link href="/">返回首页</Link>
            <style jsx>
                {
                    `
                        .article {
                            color: #c00
                        }
                    `
                }
            </style>
        </>
    )
}