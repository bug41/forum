import { connectDB } from "@/util/database"

export default async function handler(req,res) {   
    if(req.method == 'POST'){
        //console.log(req.body.title)
        //console.log(req.body.content)

        if(req.body.title == '' || req.body.content == ''){
            return res.status(500).json('제목 어디감')
        }

        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').insertOne(req.body)
            
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