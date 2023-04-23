export default function handler(req,res) {
    
    if(req.method == 'POST'){
        console.log(res.status(200).json('포포포포포포포스트'))
    }else{
        console.log(res.status(200).json('게게게게게게겟'))
    }

    

}