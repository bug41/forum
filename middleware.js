import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {

  /* 
  request.cookies.get('쿠키이름')  //출력
  request.cookies.has('쿠키이름')  //존재확인
  request.cookies.delete('쿠키이름')  //삭제
  
  const response = NextResponse.next()
  response.cookies.set({
    name: 'mode',
    value: 'dark',
    maxAge: 3600,
    httpOnly : true
  })  
  return response  //쿠키생성
  */  

  const session = await getToken({req: request})
  //console.log(session)

  if(request.nextUrl.pathname.startsWith('/write')){
    if(session == null)
      console.log('권한이 없지렁')
      //return NextResponse.redirect(new URL('/'), request.url) //버전별로 다르게 안될수도있음
      return NextResponse.redirect('http://localhost:3000/api/auth/signin')
  }

  //console.log(request.nextUrl)  //유저가 요청중인 URL 출력해줌
  //console.log(request.cookies)  //유저가 보낸 쿠키 출력해줌
  //console.log(request.headers)  //유저의 headers 정보 출력해줌 
  //new NextResponse.next()  //통과
  //new NextResponse.redirect()  //다른페이지 이동
  //new NextResponse.rewrite()  //다른페이지 이동

  if(request.nextUrl.pathname.startsWith('/list')){  // /list로 시작하는 모든 URL 도 검사 가능
    console.log(new Date() + 'ㅋㅋㅋ')
    console.log(request.headers.get('sec-ch-ua-platform'))
    return NextResponse.next()
  }
} 