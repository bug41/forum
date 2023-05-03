import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req,res) {   
    if(req.method == 'POST'){

        let session = await getServerSession(req , res, authOptions)

        req.body = JSON.parse(req.body);
        let data = {
            content : req.body.comment,
            parent : new ObjectId(req.body.parent),
            author : session.user.email,
            created_by : req.body.created_by,
        }

        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('comment').insertOne(data)
            
            if(result.acknowledged == true){
                //return res.status(302).redirect('/write')
               res.redirect(302, '/list')
            }else{
                //return res.status(302).redirect('/list')
            }    
        } catch (error) {
            return res.status(500).json('DB 문제생김')
        }

        

    }
}