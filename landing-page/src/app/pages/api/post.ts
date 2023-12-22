import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise
    const db = client.db("weby");

    if(req.method === 'POST') {
        try {
            const {email} = bodyObject

            console.log(email)
        } catch (error) {
            console.log(error);
            
        }
    }

}