import { connectDB } from "@/util/database"
 export default async function handler(req,res) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    
    if(req.method == 'POST'){
        console.log(res.status(200).json('포포포포포포포스트'))
    }else{
        console.log(res.status(200).json(result))
    }
}