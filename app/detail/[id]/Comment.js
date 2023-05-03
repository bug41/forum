'use client'

import { useEffect, useState } from "react"
import dayjs from 'dayjs';

export default function Comment(props){
    let [comment, setComment] = useState('')
    const today = dayjs().format('YYYY-MM-DD HH:mm:ss')

    //client component 에서 로드할땐 여기서 한다
    useEffect(() => {
        console.log("==============")
        console.log(props._id)
        console.log("==============")
        fetch('/api/comment/list/_id='+props._id, {
            method: 'GET'
        })
    },[])

    return (
        <div>
            <div>댓글</div>
            <input onChange={(e)=>{setComment(e.target.value)}} />
            <button onClick={()=>{
                console.log(comment);
                //fetch('/api/post/newComment', {method: 'POST', 
                fetch('/api/comment/new', {method: 'POST', 
                    body: JSON.stringify({
                        "parent" : props._id,
                        "comment" : comment,
                        "created_by" : today
                    }
                    )
                })
            }}>댓글입력</button>
        </div>
    )
}