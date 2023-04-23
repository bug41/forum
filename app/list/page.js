import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    //console.log(result);

    return (
      <div className="list-bg">
        {
            result.map((a,i) =>{
                return (
                <div className="list-item" key={i}>
                    <h4>
                      <Link href={"/detail/"+result[i]._id}>{result[i].title}</Link>                      
                    </h4>
                    <Link href={'/edit/'+result[i]._id}>수정</Link>
                    {/* <DetailLink/> */}
                    <p>1월1일</p>
                </div>
                )
            })
        }        
      </div>
    )
  } 