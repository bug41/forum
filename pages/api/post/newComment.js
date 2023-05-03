import { connectDB } from "@/util/database"

export default async function handler(req,res) {   
    if(req.method == 'POST'){
       
        const data = JSON.parse(req.body)

        const { parent, content, created_by } = data;

        if (!parent || !content || !created_by) {
            return res.status(400).json({ message: '입력 값이 부족합니다.' });
        }

        //if(req.body.title == '' || req.body.content == ''){
        //    return res.status(400).json('제목 어디감')
        //}
        const db = (await connectDB).db("forum")

        try {
            let result = await db.collection('comment').insertOne(data)
            
            if(result.acknowledged == true){
                console.log("여기 오는지 먼저")
                res.redirect(302, '/detail/'+data.parent)
            }
        } catch (error) {
            return res.status(400).json('DB 문제생김')
        }
    }
}