import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req,res) {
   
    if(req.method == 'GET'){
        try {
            
            let db = (await connectDB).db('forum') 
            let result = await db.collection('post').deleteOne({_id : new ObjectId(req.query.id)});
                                                             //{_id : new ObjectId(JSON.parse(req.body)._uid)}

            if(result.deletedCount == 0){
                res.status(500).json('삭제실패')
            }

            res.status(200).json('삭제완료')
        } catch (error) {
            console.log(error);
            res.status(500)
        }        
    }

    

}