import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req,res) {   
    if(req.method == 'POST'){        

        if(req.body.title == '' || req.body.content == ''){
            return res.status(500).json('제목 어디감')
        }

        try {
            const db = (await connectDB).db("forum")

            // debug 모드 켜기
            //db.on('query', (query) => {
            //    console.log(query);
            //});
            
            let result = await db.collection('post').updateOne({_id: new ObjectId(req.body._id)},
                {
                    $set : {title : req.body.title, content : req.body.content}                    
                }
            )

            // debug 모드 끄기
            //db.removeListener('query', console.log);
            //await client.close();
            
            if(result.acknowledged == true){
                //return res.status(302).redirect('/write')
               res.redirect(302, '/detail/'+req.body._id)
            }else{
                //return res.status(302).redirect('/list')
            }    
        } catch (error) {
            return res.status(500).json('DB 문제생김')
        }

        

    }
}