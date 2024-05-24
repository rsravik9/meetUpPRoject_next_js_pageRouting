import React, { Fragment, useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList'


function HomePage() {
    const [loadedMeetUps, setLoadedMeetUps] = useState([])
    useEffect(() => { 
        // Send HTTP request
        setLoadedMeetUps(dummyMeetups)
    }, [])
    return (
        <Fragment>
            <MeetupList meetups={loadedMeetUps} />
        </Fragment>
    )
}

export default HomePage;


const dummyMeetups = [
    {
        id: 1,
        title: "First Meetup",
        image: "https://www.meetup.com/_next/image/?url=%2Fimages%2Fcity%2Fdescriptions%2Fchicago.jpg&w=640&q=75",
        address: "Some Address For First Meetup",
        description: "This is first ever meetup"
    },
    {
        id: 2,
        title: "Second Meetup",
        image: "https://www.meetup.com/_next/image/?url=%2Fimages%2Fcity%2Fdescriptions%2Fnew_york.jpg&w=640&q=75",
        address: "Some Address For second Meetup",
        description: "This is Second ever meetup"
    },
    {
        id: 3,
        title: "Third Meetup",
        image: "https://www.meetup.com/_next/image/?url=%2Fimages%2Fcity%2Fdescriptions%2Fsan_francisco.jpg&w=640&q=75",
        address: "Some Address For third Meetup",
        description: "This is Third ever meetup"
    },
    {
        id: 4,
        title: "Fourth Meetup",
        image: "https://secure.meetupstatic.com/next/images/city/descriptions/nashville.webp?w=1920",
        address: "Some Address For fourth Meetup",
        description: "This is Fourth ever meetup"
    },
]