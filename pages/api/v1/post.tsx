import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { readdir } from 'fs/promises';
import matter from "gray-matter";


const post = async (req: NextApiRequest, res: NextApiResponse) => {

    const md = path.join(process.cwd(), 'markdown')
    const id = req.query.id
    const files = await readdir(md)

    if (id) {
        files.map((file) => {
            if(file == id) {
                const str = fs.readFileSync(path.join(md, file), 'utf-8')
                res.write(JSON.stringify(matter(str)))
            } 
        })
    }else{
        res.write(JSON.stringify(files))
    }

    res.end()
}

export const ssgPostList = async () => {
    const md = path.join(process.cwd(), 'markdown')
    const files = await readdir(md)

    return files
}

export default post