'use client'

import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react'

export default function DarkMode() {

    let router = useRouter()

    const [count, setCount] = useState(0);
    const [mode, setMode] = useState('N');
    
    let cookieChk = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0]
    
    useEffect(()=>{
       //쿠키생성, 컴포넌트 로드시 1회 실행
       if(cookieChk == ''){
        setCookie('light')
       }
        //if(typeof window != 'undefined'){
        //    console.log('test2')
        //    if(localStorage.getItem('DarkMode') != 'undefined'){                                
        //        localStorage.getItem('DarkMode') == "Y" ? localStorage.setItem('DarkMode','N') : localStorage.setItem('DarkMode','Y')                
        //    }            
        //}
    },[])

    const handleDarkMode = ()=>{
        cookieChk == 'light' ? setCookie('dark') : setCookie('light')
        //window.location.reload();
        router.refresh()
        //setCount(prevCount => prevCount + 1);   
    };

    const setCookie = (mode) =>{
        document.cookie = 'mode='+mode+'; max-age=' + (3600 * 24 * 400)
    }
    
    return(
        <div className="button-container">            
            <span onClick={handleDarkMode}>
                {cookieChk == 'light' ? '☀️' : '🌙'}
            </span>
        </div>
    )
}




