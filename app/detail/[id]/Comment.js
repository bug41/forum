'use client'

import { useEffect, useState } from "react"
import dayjs from 'dayjs';

export default function Comment(props){

    const [count, setCount] = useState(0);

    let [comment, setComment] = useState('')
    const [data, setData] = useState(null);
    const today = dayjs().format('YYYY-MM-DD HH:mm:ss')

    //client component 에서 로드할땐 여기서 한다
    useEffect(() => {
        console.log('useEffect 호출')
        fetch('/api/comment/list?_id='+props._id, {method: 'GET'})
        .then(
            response => response.json()
        ).then(data => {
            console.log('useEffect 호출 후 data 가져옴')
          setData(data); // 가져온 데이터를 상태 변수에 저장
        });
    },[count])

    return (
        <div>
            <div>
                {data ? (
                    data.map((item, index) => (
                     <div key={index}>{item.content}</div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <input onChange={(e)=>{setComment(e.target.value)}} />
            <button onClick={()=>{
                //console.log(comment);
                //fetch('/api/post/newComment', {method: 'POST', 
                fetch('/api/comment/new', {method: 'POST', 
                    body: JSON.stringify({
                        "parent" : props._id,
                        "comment" : comment,
                        "created_by" : today
                    })
                }).then(
                    setCount(count+1),
                    console.log(count)
                );
            }}>댓글입력</button>
        </div>
    )
}