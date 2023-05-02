import { connectDB } from "@/util/database";
import brcrypt from 'bcrypt';

export default async function handler(request, response){
    if(request.method == 'POST'){
        const { email, name, password } = request.body;

        // 빈 값 체크 - 필요한 값이 빠진 경우 400 Bad Request 에러 처리
        if (!email || !name || !password) {
            return response.status(400).json({ message: '입력 값이 부족합니다.' });
        }

        const db = (await connectDB).db("forum");
        
        try {
            // 중복 이메일 체크 - 이미 존재하는 경우 409 Conflict 에러 처리
            const count = await db.collection('user_cred').countDocuments({email: email});
            if(count > 0){
                return response.status(409).json({ message: '이미 존재하는 이메일입니다.' });
            }

            // 비밀번호 암호화
            const hash = await brcrypt.hash(password , 10);

            // 유저 생성
            const result = await db.collection('user_cred').insertOne({ email, name, password: hash });
            response.status(200).json({ message: '가입 성공' });
        } catch (error) {
            console.error(error);
            response.status(500).json({ message: '서버 오류가 발생했습니다.' });
        }
    } else {
        // POST 요청이 아닌 경우 405 Method Not Allowed 에러 처리
        response.status(405).json({ message: 'POST 요청이 아닙니다.' });
    }
}
