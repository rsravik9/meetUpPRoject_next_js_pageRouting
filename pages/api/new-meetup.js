// path : /api/new-meetup
import { MongoClient } from 'mongodb'


async function handler(req, res) {
    if (req.method == "POST") {
        const data = req.body

        const { title, image, address, description } = data

        const client = await MongoClient.connect("mongodb+srv://rsravik9:yZ9LkYMvNfpUW6Ve@cluster0.pth9ptd.mongodb.net/meetupDB?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db();

        const meetupCollection = db.collection("meetups")

        const result = await meetupCollection.insertOne(data)
        console.log("result", result)
        client.close(); // It is important to close connection after done.

        res.status(201).json({ message: "Meetup Inserted !" })
    }
}

export default handler;

// Setup Video link : https://www.youtube.com/watch?v=Hv1hlsmCh-8
// Setup Video link : https://www.youtube.com/watch?v=gkAVCFOjZfA
// Mongo DB:
// userName: rsravik9
// password: yZ9LkYMvNfpUW6Ve