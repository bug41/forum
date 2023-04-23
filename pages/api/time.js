
 export default async function handler(req,res) {
    if(req.method == 'GET'){
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        res.status(200).json(formattedDate);
    }
}