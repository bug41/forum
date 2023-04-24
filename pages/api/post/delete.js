import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req,res) {    
    if(req.method == 'DELETE'){
        console.log(req);
        console.log('왜 아무것도')
        console.log(req.body);
        res.status(200).json('삭제완료')
        
    }
}