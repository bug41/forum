'use client'

import { useState,useEffect } from 'react'

export default function DarkMode() {
    const [count, setCount] = useState(0);
    const [mode, setMode] = useState('N');
    
    useEffect(()=>{
        console.log('test1')
        if(typeof window != 'undefined'){
            console.log('test2')
            if(localStorage.getItem('DarkMode') != 'undefined'){                                
                localStorage.getItem('DarkMode') == "Y" ? localStorage.setItem('DarkMode','N') : localStorage.setItem('DarkMode','Y')                
            }            
        }
    },[count])

    const handleDarkMode = ()=>{
        console.log(count);
        setCount(prevCount => prevCount + 1);   
    };
    
    return(
        <div className="button-container">            
            <button onClick={handleDarkMode}>
                DarkMode
            </button>
        </div>
    )
}




