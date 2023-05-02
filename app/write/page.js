import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth';

export default async function Write() {

  //유저세션 출력시 아무것도 없으면 return
  let session = await getServerSession(authOptions)
  console.log(session);

    return (
      <div className="p-20">
          { 
            session 
              ? <form action="/api/post/new" method="POST">
                  <input name="title" placeholder="글제목"/>
                  <input name="content" placeholder="글내용"/>
                  <button type="submit">전송</button>
                </form> 
              : <p>로그인을 하세요</p>
          }             
      </div>
    )
  } 