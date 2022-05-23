type Article = [string] | []
type ssgArticle = {
    article : [];
}
type ContentProps = {
    content?: string | '';
    data?: {
        title: string | '';
        date: string | '';
    }
}