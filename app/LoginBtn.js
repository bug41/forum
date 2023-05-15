'use client'

import {signIn, signOut} from 'next-auth/react'
import { useEffect } from 'react'

export default function LoginBtn() {

    //useEffect(()=>{
    //    if(typeof window != 'undefined'){
    //        localStorage.setItem('dartMode','값')
    //    }
    //},[])
    //
    return(        
        <button onClick={()=>{signIn()}}>로그인</button>
    )
}



