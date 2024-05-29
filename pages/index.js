import React, { Fragment } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'

function HomePage(props) {
    return (
        <Fragment>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

// This only works om "Page" folder:
// This "getStaticProps" components runs 1'st and it is server side runner
export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb+srv://rsravik9:yZ9LkYMvNfpUW6Ve@cluster0.pth9ptd.mongodb.net/meetupDB?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db();

    const meetupCollection = db.collection("meetups")

    const allmeetups = await meetupCollection.find().toArray()
    client.close(); // It is important to close connection after done.


    return {
        props: {
            meetups: allmeetups.map((ele) => {
                return {
                    title: ele.title,
                    address: ele.address,
                    image: ele.image,
                    description: ele.description,
                    id: ele._id.toString()
                }
            })
        },
        revalidate: 10 // After deployment in every 10 seconds it will re gererated on server
    }
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: dummyMeetups
//         },
//     }
// }

export default HomePage;


