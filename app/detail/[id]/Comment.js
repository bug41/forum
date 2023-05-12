'use client'

import { useEffect, useState, useCallback } from "react"
import dayjs from 'dayjs';

export default function Comment(props){

    const [count, setCount] = useState(0);

    let [comment, setComment] = useState('')
    const [data, setData] = useState([]);
    const today = dayjs().format('YYYY-MM-DD HH:mm:ss')

    //client component 에서 로드할땐 여기서 한다
    useEffect(() => {       
        fetchData();
    },[count]);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('/api/comment/list?_id=' + props._id, { method: 'GET' });
            const data = await response.json();

            console.log(data);
            setData(data); // 가져온 데이터를 상태 변수에 저장
           
        } catch (error) {
            console.error('데이터 가져오기 실패:', error);
        }
    },[props._id]);

    const handleCommentSubmit = async ()=>{
        try{
            await fetch('/api/comment/new', {
                method: 'POST',
                body: JSON.stringify({
                    "parent" : props._id,
                    "comment" : comment,
                    "created_by" : today
                })
            });
            setComment('');
            setCount(prevCount => prevCount + 1);                    
        }catch(error){  
            console.error('댓글 등록에 실패하였습니다', error);
        }       
    };

    return (
        <div>
            <hr/>
            <div>
                {
                data.length > 0 ? 
                    data.map((item, index) => 
                     <div key={index}>{item.content}</div>
                    )
                    : 
                '댓글없음'
                }
            </div>
            <input onChange={(e)=>{setComment(e.target.value)}} value={comment} />
            <button onClick={handleCommentSubmit}>댓글입력</button>
        </div>
    )
}