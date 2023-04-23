import { connectDB } from "@/util/database"
import Link from "next/link"

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
                      <Link href={"../detail/"+result[i]._id}>{result[i].title}</Link>                      
                    </h4>
                    <p>{result[i].content}</p>
                </div>
                )
            })
        }        
      </div>
    )
  } 