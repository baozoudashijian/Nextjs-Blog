import { NextApiRequest, NextApiResponse } from "next";

const post = (req: NextApiRequest, res: NextApiResponse) => {
    res.write(JSON.stringify({name: 'RongerZhang'}))
    res.end()
}
export default post