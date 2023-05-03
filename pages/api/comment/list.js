import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
 export default async function handler(req,res) {

    const {_id} = req.query;

    if(req.method == 'GET'){
        const db = (await connectDB).db("forum")
        let result = await db.collection('comment').find({parent: new ObjectId(_id)}).toArray();
        console.log(res.status(200).json(result))
    }else{
        console.log(res.status(400).json('잘못된 요청입니다.'))
    }
}   