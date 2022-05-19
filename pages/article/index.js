import Link from "next/link";
import styles from "../../styles/Article.module.css"


export default function Article() {

    return (
        <>
            <div className={`article bg ${styles.size}`}>文章</div>
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