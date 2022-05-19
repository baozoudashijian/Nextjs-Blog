import Link from "next/link";

console.log('同构代码运行在两个环境 1')
export default function Article() {
    console.log('同构代码运行在两个环境 2')
    return (
        <>
            <div>文章</div>
            {console.log('同构代码运行在两个环境 3')}
            <Link href="/">返回首页</Link>
        </>
    )
}